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
        id: "resume",
        title: "Currículo PDF"
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

            card.setAttribute(
                "aria-pressed",
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


        case "resume":

            loadResume();

            break;


    }


    applicationWindow.classList.remove(
        "hidden"
    );

}


window.addEventListener("message", (event) => {

    if (event.origin !== window.location.origin) {
        return;
    }

    if (event.data?.type === "open-resume") {
        openApplication("resume");
    }

});


/* =========================================================
   TERMINAL
========================================================= */

function loadTerminal() {

    applicationContent.innerHTML = `

        <iframe
            src="terminal.html?embedded=1"
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
   CURRICULO PDF
========================================================= */

function loadResume() {

    const resumePdfPath = "CV%20Rafael%20Nagem%20Volpini-5.pdf";

    applicationContent.innerHTML = `

        <div class="pdf-viewer" aria-label="Visualizador de currículo PDF">
            <div class="pdf-toolbar">
                <label class="pdf-file-label" for="pdfFileInput">
                    <i class="fa-solid fa-folder-open" aria-hidden="true"></i>
                    Abrir PDF
                </label>
                <input id="pdfFileInput" class="sr-only" type="file" accept="application/pdf">
                <button id="pdfZoomOut" type="button" aria-label="Diminuir zoom">
                    <i class="fa-solid fa-minus" aria-hidden="true"></i>
                </button>
                <span id="pdfZoomStatus">100%</span>
                <button id="pdfZoomIn" type="button" aria-label="Aumentar zoom">
                    <i class="fa-solid fa-plus" aria-hidden="true"></i>
                </button>
                <a id="pdfDownload" class="pdf-download" href="${resumePdfPath}" download aria-label="Baixar currículo PDF">
                    <i class="fa-solid fa-download" aria-hidden="true"></i>
                </a>
            </div>
            <div id="pdfStatus" class="pdf-status" role="status" aria-live="polite">
                Carregando currículo...
            </div>
            <div id="pdfCanvasContainer" class="pdf-canvas-container" aria-label="Páginas do currículo">
            </div>
        </div>

    `;

    setupPdfViewer();

}


function setupPdfViewer() {

    const pdfFileInput = document.getElementById("pdfFileInput");
    const pdfCanvasContainer = document.getElementById("pdfCanvasContainer");
    const pdfStatus = document.getElementById("pdfStatus");
    const pdfZoomStatus = document.getElementById("pdfZoomStatus");
    const pdfZoomOut = document.getElementById("pdfZoomOut");
    const pdfZoomIn = document.getElementById("pdfZoomIn");
    const pdfDownload = document.getElementById("pdfDownload");

    if (!window.pdfjsLib) {
        pdfStatus.textContent = "Não foi possível carregar o visualizador PDF.";
        return;
    }

    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    let pdfDocument = null;
    let currentPage = 1;
    let zoom = 1;
    let selectedPdfUrl = "CV%20Rafael%20Nagem%20Volpini-5.pdf";

    function updateControls() {

        const totalPages = pdfDocument ? pdfDocument.numPages : 0;

        pdfZoomStatus.textContent = `${Math.round(zoom * 100)}%`;
        pdfZoomOut.disabled = zoom <= 0.6;
        pdfZoomIn.disabled = zoom >= 2.4;

    }

    async function renderPages() {

        if (!pdfDocument) {
            return;
        }

        pdfCanvasContainer.replaceChildren();
        const deviceScale = window.devicePixelRatio || 1;

        for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {

            const page = await pdfDocument.getPage(pageNumber);
            const baseViewport = page.getViewport({ scale: 1 });
            const availableWidth = Math.max(pdfCanvasContainer.clientWidth - 32, 280);
            const fitScale = availableWidth / baseViewport.width;
            const viewport = page.getViewport({ scale: fitScale * zoom });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            canvas.className = "pdf-page";
            canvas.setAttribute("aria-label", `Página ${pageNumber} do currículo`);
            canvas.width = Math.floor(viewport.width * deviceScale);
            canvas.height = Math.floor(viewport.height * deviceScale);
            canvas.style.width = `${viewport.width}px`;
            canvas.style.height = `${viewport.height}px`;
            context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
            pdfCanvasContainer.appendChild(canvas);

            await page.render({
                canvasContext: context,
                viewport
            }).promise;

        }

        updateControls();

    }

    async function openPdf(source) {

        try {

            pdfStatus.textContent = "Renderizando currículo...";
            pdfDocument = await window.pdfjsLib.getDocument(source).promise;
            currentPage = 1;
            zoom = 1;
            pdfStatus.textContent = "Currículo carregado.";
            pdfDownload.href = typeof source === "string" ? source : selectedPdfUrl;
            await renderPages();

        } catch (error) {

            pdfDocument = null;
            updateControls();
            pdfStatus.textContent =
                "Currículo não encontrado. Verifique o arquivo PDF ou abra um PDF local.";

        }

    }

    pdfZoomOut.addEventListener("click", () => {

        zoom = Math.max(0.6, zoom - 0.2);
        renderPages();

    });

    pdfZoomIn.addEventListener("click", () => {

        zoom = Math.min(2.4, zoom + 0.2);
        renderPages();

    });

    pdfFileInput.addEventListener("change", (event) => {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        selectedPdfUrl = URL.createObjectURL(file);
        openPdf(selectedPdfUrl);

    });

    window.addEventListener("resize", () => {

        if (pdfDocument) {
            renderPages();
        }

    });

    updateControls();
    openPdf(selectedPdfUrl);

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

        if (osScreen.classList.contains("hidden")) {
            return;
        }

        const navigationKey =
            ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key) ||
            ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.code);

        if (navigationKey) {
            event.preventDefault();
        }

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


        const pressedKey = event.key || event.code;

        switch (pressedKey) {

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

    const time = new Intl.DateTimeFormat(
        "pt-BR",
        {
            timeZone: "America/Sao_Paulo",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }
    ).format(new Date());


    osClock.textContent =
        time;

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

            button.setAttribute(
                "aria-pressed",
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

updateSelection();

