const portfolioData = {

    pt: {

        home: {
            subtitle:
                "Técnico em Eletrônica e cursando Bacharel em Engenharia de Software",

            welcome:
                "Bem-vindo ao meu Portfólio",

            instruction:
                "Digite `ajuda` para conhecer os comandos disponíveis."
        },

        commands: {

            sobre:
                "Mostra uma breve descrição sobre mim.",

            ajuda:
                "Mostra esta lista de comandos disponíveis.",

            experiencias:
                "Mostra minha trajetória profissional e experiências.",

            contato:
                "Exibe minhas informações de contato.",

            projetos:
                "Exibe meus projetos desenvolvidos.",

            habilidades:
                "Mostra minhas principais habilidades técnicas.",

            curriculo:
                "Abre meu currículo em PDF.",

            limpar:
                "Limpa o histórico do terminal."
        },

        skills: {
            title: "Habilidades",
            mainTitle: "Principais conhecimentos",
            additionalTitle: "Conhecimentos adicionais",
            items: [
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "JavaScript", level: 90 },
                { name: "HTML", level: 85 },
                { name: "CSS", level: 85 },
                { name: "Python", level: 55, additional: true },
                { name: "Java", level: 50, additional: true },
                { name: "Node.js", level: 50, additional: true }
            ]
        },

        about: {

            title: "Sobre Mim",

            text: `
                Olá! Sou o Volpini, técnico em Eletrônica e atualmente
                cursando Bacharelado em Engenharia de Software.

                Tenho interesse principalmente em desenvolvimento de software,
                desenvolvimento web e integração entre hardware e software.

                Durante minha formação profissional, realizei um estágio de
                1 ano e 5 meses na TSA, atuando com foco em desenvolvimento
                Front-End.

                Essa experiência me permitiu desenvolver conhecimentos em
                desenvolvimento de interfaces, lógica de programação,
                organização de projetos e trabalho em equipe.
            `
        },

        projects: [

            {
                year: "Projeto",

                title: "Display de 7 Segmentos com Servo Motores",

                description:
                    "Projeto de um relógio digital utilizando displays de 7 segmentos movimentados por servo motores.",

                details:
                    "O projeto utiliza 24 servo motores para controlar os segmentos do relógio, criando uma representação visual das horas."
            }

        ],

        experiences: [

            {
                company: "TSA",

                role: "Estágio em Desenvolvimento Front-End",

                period: "1 ano e 5 meses",

                description:
                    "Atuação durante estágio com foco em desenvolvimento Front-End, contribuindo para criação e manutenção de interfaces e aplicações."
            },

            {
                company: "Matter&Co",

                role: "Desenvolvimento de Software",

                period: "Agosto de 2026 - Atual",

                description:
                    "Atuação em desenvolvimento de software, participando das atividades e projetos da empresa."
            }

        ],

        contact: {

            title: "Contato",

            email: "volpini767@gmail.com",

            phone: "31 99257-8699",

            github: "#",

            linkedin: "#"
        }
    },


    en: {

        home: {

            subtitle:
                "Electronics Technician and Software Engineering Bachelor's Student",

            welcome:
                "Welcome to my Portfolio",

            instruction:
                "Type `help` to see the available commands."
        },

        commands: {

            about:
                "Shows a brief description about me.",

            help:
                "Shows this list of available commands.",

            experience:
                "Shows my professional experience.",

            contact:
                "Shows my contact information.",

            projects:
                "Shows my developed projects.",

            skills:
                "Shows my main technical skills.",

            resume:
                "Opens my resume as a PDF.",

            clear:
                "Clears the terminal history."
        },

        skills: {
            title: "Skills",
            mainTitle: "Main skills",
            additionalTitle: "Additional skills",
            items: [
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "JavaScript", level: 90 },
                { name: "HTML", level: 85 },
                { name: "CSS", level: 85 },
                { name: "Python", level: 55, additional: true },
                { name: "Java", level: 50, additional: true },
                { name: "Node.js", level: 50, additional: true }
            ]
        },

        about: {

            title: "About Me",

            text: `
                Hello! I'm Volpini, an Electronics Technician currently
                pursuing a Bachelor's degree in Software Engineering.

                I am interested mainly in software development, web development
                and the integration between hardware and software.

                During my professional training, I completed a 1 year and
                5 month internship at TSA, focusing on Front-End development.

                This experience allowed me to develop skills in interface
                development, programming logic, project organization
                and teamwork.
            `
        },

        projects: [

            {

                year: "Project",

                title: "7-Segment Display with Servo Motors",

                description:
                    "A digital clock project using 7-segment displays controlled by servo motors.",

                details:
                    "The project uses 24 servo motors to control the clock segments and visually represent the time."
            }

        ],

        experiences: [

            {

                company: "TSA",

                role: "Front-End Development Intern",

                period: "1 year and 5 months",

                description:
                    "Internship focused on Front-End development, contributing to the creation and maintenance of interfaces and applications."
            },

            {

                company: "Matter&Co",

                role: "Software Development",

                period: "August 2026 - Present",

                description:
                    "Working with software development and participating in company projects and activities."
            }

        ],

        contact: {

            title: "Contact",

            email: "volpini767@gmail.com",

            phone: "31 99257-8699",

            github: "Rafael Volpini",

            linkedin: "#"
        }
    }

};
