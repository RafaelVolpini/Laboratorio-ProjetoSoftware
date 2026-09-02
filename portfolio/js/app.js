let currentLanguage =
    localStorage.getItem("volpini-language") || "pt";

const commandInput = document.getElementById("commandInput");
const terminalOutput = document.getElementById("terminalOutput");

const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");

const systemLanguage =
    localStorage.getItem(
        "volpini-language"
    ) || "pt";


function applyTerminalLanguage() {

    const data = portfolioData[currentLanguage];
    const home = data.home;
    const welcomeText = document.getElementById("welcomeText");
    const homeSubtitle = document.getElementById("homeSubtitle");
    const commandPlaceholder = document.getElementById("commandInput");
    const homeDescription = document.querySelector(".home-description");

    if (welcomeText) {
        welcomeText.textContent = home.welcome;
    }

    if (homeSubtitle) {
        homeSubtitle.textContent = home.subtitle;
    }

    if (commandPlaceholder) {
        commandPlaceholder.placeholder =
            currentLanguage === "pt"
                ? "Digite um comando..."
                : "Type a command...";
    }

    if (homeDescription) {
        homeDescription.innerHTML =
            currentLanguage === "pt"
                ? "Digite <span>`ajuda`</span> para conhecer os comandos disponíveis."
                : "Type <span>`help`</span> to see the available commands.";
    }

}

applyTerminalLanguage();


window.addEventListener("storage", (event) => {

    if (event.key !== "volpini-language") {
        return;
    }

    currentLanguage = event.newValue || "pt";
    applyTerminalLanguage();

});


/* =========================
   COMANDOS
========================= */

const commandAliases = {

    pt: {

        sobre: "about",
        about: "about",

        ajuda: "help",
        help: "help",

        experiencias: "experience",
        experiencia: "experience",
        experience: "experience",
        xp: "experience",

        projetos: "projects",
        projeto: "projects",
        projects: "projects",

        habilidades: "skills",
        habilidade: "skills",
        skills: "skills",

        curriculo: "resume",
        curriculum: "resume",
        resume: "resume",

        contato: "contact",
        contact: "contact",

        limpar: "clear",
        clear: "clear"
    },

    en: {

        about: "about",
        sobre: "about",

        help: "help",
        ajuda: "help",

        experience: "experience",
        experiencias: "experience",
        xp: "experience",

        projects: "projects",
        projetos: "projects",

        skills: "skills",
        habilidades: "skills",

        resume: "resume",
        curriculo: "resume",
        curriculum: "resume",

        contact: "contact",
        contato: "contact",

        clear: "clear",
        limpar: "clear"
    }
};


/* =========================
   EXECUTAR COMANDO
========================= */

function executeCommand(command) {

    const cleanCommand = command
        .toLowerCase()
        .trim();

    if (!cleanCommand) {
        return;
    }

    addCommandToTerminal(cleanCommand);

    const normalizedCommand =
        commandAliases[currentLanguage][cleanCommand];

    if (!normalizedCommand) {

        printError(cleanCommand);

        return;
    }

    switch (normalizedCommand) {

        case "about":
            showAbout();
            break;

        case "help":
            showHelp();
            break;

        case "experience":
            showExperience();
            break;

        case "projects":
            showProjects();
            break;

        case "skills":
            showSkills();
            break;

        case "resume":
            openResumePdf();
            break;

        case "contact":
            showContact();
            break;

        case "clear":
            clearTerminal();
            break;
    }
}


/* =========================
   ADICIONAR COMANDO
========================= */

function addCommandToTerminal(command) {

    const commandLine = document.createElement("div");

    commandLine.className = "executed-command";

    commandLine.innerHTML = `
        <span class="prompt">$</span>
        <span>${escapeHTML(command)}</span>
    `;

    terminalOutput.appendChild(commandLine);
}


/* =========================
   SOBRE
========================= */

function showAbout() {

    const data = portfolioData[currentLanguage].about;

    const section = document.createElement("section");

    section.className = "content-section";

    section.innerHTML = `

        <h2>
            <i class="fa-solid fa-user"></i>
            ${data.title}
        </h2>

        <div class="about-card">

            ${formatText(data.text)}

        </div>
    `;

    terminalOutput.appendChild(section);

    scrollToBottom();
}


/* =========================
   AJUDA
========================= */

function showHelp() {

    const data = portfolioData[currentLanguage].commands;

    const section = document.createElement("section");

    section.className = "content-section";

    let commandsHTML = "";

    Object.entries(data).forEach(([command, description]) => {

        commandsHTML += `

            <div class="command-help">

                <span class="command-symbol">></span>

                <strong>${command}</strong>

                <span class="separator">-</span>

                <span>${description}</span>

            </div>

        `;
    });

    section.innerHTML = `

        <h2>
            <i class="fa-solid fa-terminal"></i>
            Comandos disponíveis
        </h2>

        ${commandsHTML}

    `;

    terminalOutput.appendChild(section);

    scrollToBottom();
}


/* =========================
   CURRICULO PDF
========================= */

function openResumePdf() {

    const resumePdfPath = "CV%20Rafael%20Nagem%20Volpini-5.pdf";

    if (window.parent !== window) {
        window.parent.postMessage({ type: "open-resume" }, window.location.origin);
        return;
    }

    const resumeWindow = window.open(resumePdfPath, "_blank");
    const section = document.createElement("div");

    section.className = "command-notice";
    section.textContent = resumeWindow
        ? "Currículo PDF aberto em uma nova aba."
        : "Não foi possível abrir o currículo. Permita pop-ups para este site.";

    terminalOutput.appendChild(section);
    scrollToBottom();
}


/* =========================
   HABILIDADES
========================= */

function showSkills() {

    const data = portfolioData[currentLanguage].skills;
    const mainSkills = data.items.filter((skill) => !skill.additional);
    const additionalSkills = data.items.filter((skill) => skill.additional);
    const section = document.createElement("section");

    section.className = "content-section";

    function renderSkills(skills) {

        return skills.map((skill) => `
            <div class="skill-item">
                <div class="skill-label">
                    <span><i class="fa-brands fa-github"></i> ${skill.name}</span>
                    <strong>${skill.level}%</strong>
                </div>
                <div class="skill-bar" role="progressbar" aria-label="${skill.name}" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
                    <span style="width: ${skill.level}%"></span>
                </div>
            </div>
        `).join("");
    }

    section.innerHTML = `
        <h2>
            <i class="fa-solid fa-chart-simple"></i>
            ${data.title}
        </h2>
        <div class="skills-group">
            <h3>${data.mainTitle}</h3>
            ${renderSkills(mainSkills)}
        </div>
        <div class="skills-group">
            <h3>${data.additionalTitle}</h3>
            ${renderSkills(additionalSkills)}
        </div>
    `;

    terminalOutput.appendChild(section);
    scrollToBottom();
}


/* =========================
   PROJETOS
========================= */

function showProjects() {

    const projects =
        portfolioData[currentLanguage].projects;

    const section = document.createElement("section");

    section.className = "content-section";

    let projectsHTML = "";

    projects.forEach((project, index) => {

        projectsHTML += `

            <div class="timeline-item">

                <div class="timeline-dot"></div>

                <div class="timeline-content">

                    <span class="timeline-year">
                        ${project.year}
                    </span>

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.description}
                    </p>

                    <p class="project-details">
                        ${project.details}
                    </p>

                </div>

            </div>

        `;
    });

    section.innerHTML = `

        <h2>
            <i class="fa-solid fa-code"></i>
            Projetos
        </h2>

        <div class="timeline">

            ${projectsHTML}

        </div>
    `;

    terminalOutput.appendChild(section);

    scrollToBottom();
}


/* =========================
   EXPERIÊNCIAS
========================= */

function showExperience() {

    const experiences =
        portfolioData[currentLanguage].experiences;

    const section = document.createElement("section");

    section.className = "content-section";

    let experienceHTML = "";

    experiences.forEach((experience) => {

        experienceHTML += `

            <article class="experience-card">

                <div class="experience-icon">

                    <i class="fa-solid fa-briefcase"></i>

                </div>

                <div class="experience-info">

                    <div class="experience-header">

                        <h3>
                            ${experience.company}
                        </h3>

                        <span class="experience-period">
                            ${experience.period}
                        </span>

                    </div>

                    <h4>
                        ${experience.role}
                    </h4>

                    <p>
                        ${experience.description}
                    </p>

                </div>

            </article>

        `;
    });

    section.innerHTML = `

        <h2>
            <i class="fa-solid fa-briefcase"></i>
            Experiências
        </h2>

        <div class="experience-list">

            ${experienceHTML}

        </div>
    `;

    terminalOutput.appendChild(section);

    scrollToBottom();
}


/* =========================
   CONTATO
========================= */

function showContact() {

    const data =
        portfolioData[currentLanguage].contact;

    const section = document.createElement("section");

    section.className = "content-section";

    section.innerHTML = `

        <h2>
            <i class="fa-solid fa-address-card"></i>
            ${data.title}
        </h2>

        <div class="contact-container">

            <div class="contact-info">

                <a
                    href="mailto:${data.email}"
                    class="contact-item"
                >
                    <i class="fa-solid fa-envelope"></i>

                    <span>
                        ${data.email}
                    </span>
                </a>


                <a
                    href="tel:+5531992578699"
                    class="contact-item"
                >
                    <i class="fa-solid fa-phone"></i>

                    <span>
                        ${data.phone}
                    </span>
                </a>


                <a
                    href="${data.github}"
                    class="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa-brands fa-github"></i>

                    <span>
                        GitHub
                    </span>
                </a>


                <a
                    href="${data.linkedin}"
                    class="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa-brands fa-linkedin"></i>

                    <span>
                        LinkedIn
                    </span>
                </a>

            </div>


            <form id="contactForm" class="contact-form" novalidate>

                <div class="form-group">

                    <label for="name">
                        Nome
                    </label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        autocomplete="name"
                        required
                    >

                </div>


                <div class="form-group">

                    <label for="email">
                        E-mail
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="seu@email.com"
                        autocomplete="email"
                        required
                    >

                </div>


                <div class="form-group">

                    <label for="message">
                        Mensagem
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Digite sua mensagem..."
                        aria-describedby="formMessage"
                        required
                    ></textarea>

                </div>


                <button type="submit" class="submit-btn">

                    <i class="fa-solid fa-paper-plane"></i>

                    Enviar mensagem

                </button>

                <div id="formMessage" class="form-message" role="status" aria-live="polite"></div>

            </form>

        </div>

    `;

    terminalOutput.appendChild(section);

    setupContactForm();

    scrollToBottom();
}


/* =========================
   FORMULÁRIO
========================= */

function setupContactForm() {

    const form =
        document.getElementById("contactForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const formMessage =
            document.getElementById("formMessage");


        if (!name || !email || !message) {

            formMessage.textContent =
                "Preencha todos os campos.";

            formMessage.className =
                "form-error";

            return;
        }


        if (!validateEmail(email)) {

            formMessage.textContent =
                "Digite um e-mail válido.";

            formMessage.className =
                "form-error";

            return;
        }


        /*
         * Envio utilizando o aplicativo
         * de e-mail instalado no computador.
         */

        const subject =
            encodeURIComponent(
                `Contato do Portfólio - ${name}`
            );

        const body =
            encodeURIComponent(
                `Nome: ${name}\n\nE-mail: ${email}\n\nMensagem:\n${message}`
            );


        window.location.href =
            `mailto:volpini767@gmail.com?subject=${subject}&body=${body}`;


        formMessage.textContent =
            "Abrindo seu aplicativo de e-mail...";

        formMessage.className =
            "form-success";

    });
}


/* =========================
   VALIDAÇÃO
========================= */

function validateEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}


/* =========================
   LIMPAR TERMINAL
========================= */

function clearTerminal() {

    terminalOutput.innerHTML = "";

    commandInput.value = "";

    commandInput.focus();
}


/* =========================
   ERRO
========================= */

function printError(command) {

    const error = document.createElement("div");

    error.className = "error-message";

    error.innerHTML = `

        <span class="error-icon">✖</span>

        Comando não encontrado:
        <strong>${escapeHTML(command)}</strong>

        <br>

        Digite
        <strong>ajuda</strong>
        para ver os comandos disponíveis.

    `;

    terminalOutput.appendChild(error);

    scrollToBottom();
}


/* =========================
   TROCA DE IDIOMA
========================= */

function changeLanguage(language) {

    currentLanguage = language;

    ptBtn.classList.toggle(
        "active",
        language === "pt"
    );

    enBtn.classList.toggle(
        "active",
        language === "en"
    );

    updateHome();

    clearTerminal();
}


/* =========================
   ATUALIZAR HOME
========================= */

function updateHome() {

    const data =
        portfolioData[currentLanguage].home;

    document.getElementById("homeSubtitle")
        .textContent = data.subtitle;

    document.getElementById("welcomeText")
        .textContent = data.welcome;

}


/* =========================
   FORMATAÇÃO
========================= */

function formatText(text) {

    return text
        .trim()
        .split("\n\n")
        .map(paragraph => `<p>${paragraph.trim()}</p>`)
        .join("");
}


/* =========================
   SEGURANÇA
========================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* =========================
   SCROLL
========================= */

function scrollToBottom() {

    setTimeout(() => {

        terminalOutput.scrollTop =
            terminalOutput.scrollHeight;

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    }, 100);
}


/* =========================
   INPUT
========================= */

if (commandInput) {

    commandInput.addEventListener(
        "keydown",
        function(event) {

        if (event.key === "Enter") {

            executeCommand(
                commandInput.value
            );

            commandInput.value = "";

        }

        }
    );

}


/* =========================
   IDIOMA
========================= */

if (ptBtn && enBtn) {

    ptBtn.addEventListener(
        "click",
        () => changeLanguage("pt")
    );

    enBtn.addEventListener(
        "click",
        () => changeLanguage("en")
    );

}


/* =========================
   CLIQUE NO TERMINAL
========================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            !event.target.closest("a") &&
            !event.target.closest("button") &&
            !event.target.closest("input") &&
            !event.target.closest("textarea")
        ) {

            if (commandInput) {
                commandInput.focus();
            }

        }

    }


);

window.addEventListener("load", () => {

    if (commandInput) {
        commandInput.focus();
    }

});
