/* =========================================================
   VOLPINI OS
========================================================= */

const languageOptions =
    document.querySelectorAll(
        ".language-option"
    );


const applicationCards =
    document.querySelectorAll(
        ".application-card"
    );

const applicationWindow =
    document.getElementById(
        "applicationWindow"
    );

const applicationContent =
    document.getElementById(
        "applicationContent"
    );

const windowTitle =
    document.getElementById(
        "windowTitle"
    );

const closeApplication =
    document.getElementById(
        "closeApplication"
    );

const osClock =
    document.getElementById(
        "osClock"
    );


let selectedApplication = 0;


/* =========================================================
   APLICAÇÕES
========================================================= */

const applications = [

    {
        id: "terminal",
        title: "Volpini Terminal"
    },

    {
        id: "portfolio",
        title: "Volpini Portfolio"
    }

];



/* =========================================================
   SELEÇÃO
========================================================= */

function updateSelection() {

    applicationCards.forEach(
        (card, index) => {

            card.classList.toggle(
                "selected",
                index === selectedApplication
            );

        }
    );

}


/* =========================================================
   ABRIR
========================================================= */

function openApplication(
    applicationId
) {

    const application =
        applications.find(
            app =>
                app.id === applicationId
        );


    if (!application) {
        return;
    }


    windowTitle.textContent =
        application.title;


    switch (applicationId) {

        case "terminal":

            loadTerminal();

            break;


        case "portfolio":

            loadPortfolio();

            break;


    }


    applicationWindow.classList.remove(
        "hidden"
    );

}


/* =========================================================
   TERMINAL
========================================================= */

function loadTerminal() {

    applicationContent.innerHTML = `

        <iframe
            src="terminal.html"
            style="
                width: 100%;
                height: 100%;
                min-height: 600px;
                border: none;
                display: block;
                background: #242832;
            "
            title="Volpini Terminal"
        ></iframe>

    `;

}


/* =========================================================
   PORTFÓLIO
========================================================= */

function loadPortfolio() {

    applicationContent.innerHTML = `

        <div
            style="
                padding: 40px;
                color: #e6edf3;
                font-family: 'Courier New', monospace;
            "
        >

            <h1
                style="
                    color: #00f5a0;
                    margin-bottom: 15px;
                "
            >
                Volpini
            </h1>


            <h2
                style="
                    color: #ffb52e;
                    margin-bottom: 30px;
                "
            >
                Técnico em Eletrônica
                &
                Bacharelado em Engenharia de Software
            </h2>


            <hr
                style="
                    border: 0;
                    border-top: 1px solid #394353;
                    margin-bottom: 30px;
                "
            >


            <h2>Sobre Mim</h2>

            <p
                style="
                    color: #aeb9c9;
                    line-height: 1.8;
                    margin: 15px 0 30px;
                "
            >
                Técnico em Eletrônica e atualmente
                cursando Bacharelado em Engenharia
                de Software.
            </p>


            <h2>Experiência</h2>

            <p
                style="
                    color: #aeb9c9;
                    line-height: 1.8;
                    margin: 15px 0;
                "
            >
                <strong style="color:#00f5a0;">
                    TSA
                </strong>
                —
                Estágio em Desenvolvimento Front-End
                durante 1 ano e 5 meses.
            </p>


            <p
                style="
                    color: #aeb9c9;
                    line-height: 1.8;
                    margin: 15px 0 30px;
                "
            >
                <strong style="color:#00f5a0;">
                    Matter&Co
                </strong>
                —
                Desenvolvimento de Software,
                atualmente.
            </p>


            <h2>Projeto</h2>

            <p
                style="
                    color: #aeb9c9;
                    line-height: 1.8;
                    margin-top: 15px;
                "
            >
                Display de 7 segmentos movido por
                servo motores — relógio utilizando
                24 servos.
            </p>

        </div>

    `;

}



/* =========================================================
   FECHAR
========================================================= */

closeApplication.addEventListener(
    "click",
    () => {

        applicationWindow.classList.add(
            "hidden"
        );


        applicationContent.innerHTML =
            "";

    }
);


/* =========================================================
   CLIQUE NAS APLICAÇÕES
========================================================= */

applicationCards.forEach(
    (card, index) => {

        card.addEventListener(
            "click",
            () => {

                selectedApplication =
                    index;

                updateSelection();

                openApplication(
                    card.dataset.app
                );

            }
        );

    }
);


/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
         * Se uma aplicação estiver aberta,
         * ESC fecha a aplicação.
         */

        if (
            !applicationWindow.classList.contains(
                "hidden"
            )
        ) {

            if (event.key === "Escape") {

                closeApplication.click();

            }

            return;

        }


        switch (event.key) {

            case "ArrowRight":

            case "ArrowDown":

                selectedApplication++;

                if (
                    selectedApplication >=
                    applicationCards.length
                ) {

                    selectedApplication = 0;

                }

                updateSelection();

                break;


            case "ArrowLeft":

            case "ArrowUp":

                selectedApplication--;

                if (
                    selectedApplication < 0
                ) {

                    selectedApplication =
                        applicationCards.length - 1;

                }

                updateSelection();

                break;


            case "Enter":

                openApplication(
                    applicationCards[
                        selectedApplication
                    ].dataset.app
                );

                break;

        }

    }
);


/* =========================================================
   RELÓGIO
========================================================= */

function updateClock() {

    const now =
        new Date();


    const hours =
        String(
            now.getHours()
        ).padStart(2, "0");


    const minutes =
        String(
            now.getMinutes()
        ).padStart(2, "0");


    osClock.textContent =
        `${hours}:${minutes}`;

}


updateClock();


setInterval(
    updateClock,
    1000
);


/* =========================================================
   SELETOR DE IDIOMA
========================================================= */

function updateLanguageSelector() {

    const currentLanguage =
        getLanguage();


    languageOptions.forEach(
        button => {

            const buttonLanguage =
                button.dataset.language;


            button.classList.toggle(
                "active",
                buttonLanguage === currentLanguage
            );

        }
    );

}


languageOptions.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.dataset.language;


                setLanguage(language);


                updateLanguageSelector();

            }
        );

    }
);


updateLanguageSelector();

