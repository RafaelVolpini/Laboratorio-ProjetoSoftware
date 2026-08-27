/* =========================================================
   VOLPINI OS - SISTEMA DE IDIOMAS
========================================================= */

const translations = {

    pt: {
        // OS
        systemMessage: "MENSAGEM DO SISTEMA",
        welcome: "Bem-vindo ao",
        selectApplication: "Selecione uma aplicação para continuar.",

        terminal: "Terminal",
        terminalDescription: "Portfólio interativo",

        portfolio: "Portfólio",
        portfolioDescription: "Currículo / Documento",

        systemInfo: "Informações do sistema",
        systemInfoDescription: "Informações do sistema",

        select: "Selecionar",
        open: "Abrir",
        system: "Sistema",

        online: "ONLINE",

        // Terminal
        terminalWelcome: "Bem-vindo ao meu Portfólio",
        terminalHelp: "Digite 'ajuda' para conhecer os comandos disponíveis.",
        commandPlaceholder: "Digite um comando...",

        // Portfolio
        about: "Sobre Mim",
        experience: "Experiência",
        projects: "Projetos",
        education: "Formação",
        contact: "Contato",

        // System
        systemStatus: "Todos os sistemas operacionais."
    },


    en: {
        // OS
        systemMessage: "SYSTEM MESSAGE",
        welcome: "Welcome to",
        selectApplication: "Select an application to continue.",

        terminal: "Terminal",
        terminalDescription: "Interactive portfolio",

        portfolio: "Portfolio",
        portfolioDescription: "Resume / Document",

        systemInfo: "System Information",
        systemInfoDescription: "System information",

        select: "Select",
        open: "Open",
        system: "System",

        online: "ONLINE",

        // Terminal
        terminalWelcome: "Welcome to my Portfolio",
        terminalHelp: "Type 'help' to see the available commands.",
        commandPlaceholder: "Type a command...",

        // Portfolio
        about: "About Me",
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        contact: "Contact",

        // System
        systemStatus: "All systems operational."
    }

};


/* =========================================================
   IDIOMA ATUAL
========================================================= */

function getLanguage() {

    return localStorage.getItem(
        "volpini-language"
    ) || "pt";

}


/* =========================================================
   ALTERAR IDIOMA
========================================================= */

function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    localStorage.setItem(
        "volpini-language",
        language
    );

    applyLanguage();

}


/* =========================================================
   TRADUÇÃO
========================================================= */

function t(key) {

    const language =
        getLanguage();

    return (
        translations[language]?.[key] ||
        translations.pt[key] ||
        key
    );

}


/* =========================================================
   APLICAR IDIOMA NO OS
========================================================= */

function applyLanguage() {

    const language =
        getLanguage();


    document.documentElement.lang =
        language === "pt"
            ? "pt-BR"
            : "en";


    /*
     * Elementos que possuem
     * data-i18n serão traduzidos
     */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            element.textContent =
                t(key);

        });


    /*
     * Placeholders
     */

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;

            element.placeholder =
                t(key);

        });


    /*
     * Atualiza indicador do idioma
     */

    const languageIndicator =
        document.getElementById(
            "languageIndicator"
        );


    if (languageIndicator) {

        languageIndicator.textContent =
            language === "pt"
                ? "PT-BR"
                : "EN-US";

    }

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    applyLanguage
);
