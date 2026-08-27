/* =========================================================
   VOLPINI OS - BOOT
========================================================= */

const bootScreen =
    document.getElementById("bootScreen");

const osScreen =
    document.getElementById("osScreen");

const bootMessages =
    document.getElementById("bootMessages");

const bootProgress =
    document.getElementById("bootProgress");

const bootPercentage =
    document.getElementById("bootPercentage");

const bootContinue =
    document.getElementById("bootContinue");


const bootSteps = [

    "Initializing system...",

    "Checking memory ........ OK",

    "Loading portfolio data . OK",

    "Loading terminal ...... OK",

    "Loading applications .. OK",

    "Starting Volpini OS ... OK"

];


let bootFinished = false;


/* =========================================================
   BOOT
========================================================= */

function startBoot() {

    let progress = 0;

    let messageIndex = 0;


    const messageInterval = setInterval(() => {

        if (
            messageIndex <
            bootSteps.length
        ) {

            const paragraph =
                document.createElement("p");

            paragraph.textContent =
                bootSteps[messageIndex];

            if (
                bootSteps[messageIndex]
                    .includes("OK")
            ) {

                paragraph.classList.add(
                    "boot-ok"
                );

            }

            bootMessages.appendChild(
                paragraph
            );

            messageIndex++;

        }

    }, 350);


    const progressInterval = setInterval(() => {

        progress += 2;

        bootProgress.style.width =
            `${progress}%`;

        bootPercentage.textContent =
            `${progress}%`;


        if (progress >= 100) {

            clearInterval(
                progressInterval
            );

            clearInterval(
                messageInterval
            );


            bootFinished = true;

            bootContinue.classList.remove(
                "hidden"
            );

        }

    }, 40);

}


/* =========================================================
   CONTINUAR
========================================================= */

function enterSystem() {

    if (!bootFinished) {
        return;
    }


    bootScreen.classList.add(
        "hidden"
    );


    setTimeout(() => {

        osScreen.classList.remove(
            "hidden"
        );

    }, 400);

}


/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" &&
            bootFinished &&
            !osScreen.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        if (
            event.key === "Enter" &&
            bootFinished
        ) {

            enterSystem();

        }

    }
);


/* =========================================================
   INICIAR
========================================================= */

window.addEventListener(
    "load",
    () => {

        startBoot();

    }
);
