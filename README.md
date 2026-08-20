# Terminal Portfolio — TESTE

Portfolio pessoal desenvolvido com uma interface inspirada em um terminal de computador.

A proposta é apresentar informações profissionais de forma interativa, permitindo que o visitante navegue pelo conteúdo utilizando comandos digitados diretamente no terminal.

## Preview

### Protótipo da interface

Abaixo está o protótipo inicial da página:

![Protótipo da interface inicial](assets/images/prototipo-inicial.png)

> **Observação:** substituir `assets/images/prototipo-inicial.png` pela imagem real do protótipo.

A tela inicial apresenta uma identidade visual baseada em terminal:

```text
rafael@portfolio:~$ whoami

_______
|__   __|       _
   | | ___  ___| |_
   | |/ _ \/ __| __||/ _ \
   | |  __/\__ \ |_||  __/
   |_|\___||___/\__| \___|

TESTE
```

Abaixo da apresentação existe um terminal interativo onde o visitante poderá digitar comandos para acessar as diferentes seções do portfolio.

### Protótipos das seções

#### Seção `/sobre`

![Protótipo da seção Sobre](assets/images/prototipo-sobre.png)

Apresentará informações sobre o desenvolvedor, sua trajetória, formação e principais características profissionais.

#### Seção `/habilidades`

![Protótipo da seção Habilidades](assets/images/prototipo-habilidades.png)

Apresentará as principais tecnologias, ferramentas e habilidades utilizadas no desenvolvimento dos projetos.

#### Seção `/projetos`

![Protótipo da seção Projetos](assets/images/prototipo-projetos.png)

Apresentará os projetos desenvolvidos, com suas respectivas descrições, tecnologias utilizadas e links.

#### Seção `/curriculo`

![Protótipo da seção Currículo](assets/images/prototipo-curriculo.png)

Apresentará experiências profissionais, formação acadêmica e outras informações relevantes.

#### Seção `/contato`

![Protótipo da seção Contato](assets/images/prototipo-contato.png)

Apresentará as formas de contato e links para redes profissionais.

> **Observação:** as imagens acima representam os locais previstos para os protótipos. Os arquivos podem ser adicionados posteriormente na pasta `assets/images/`.

## Comandos disponíveis

```text
/sobre
```

Exibe informações sobre o desenvolvedor.

```text
/habilidades
```

Exibe as tecnologias e habilidades.

```text
/projetos
```

Lista os projetos desenvolvidos.

```text
/curriculo
```

Exibe experiências profissionais e formação.

```text
/contato
```

Exibe formas de contato e redes sociais.

```text
/ajuda
```

Mostra todos os comandos disponíveis.

```text
clear
```

Limpa o conteúdo exibido e retorna ao estado inicial.

## Estrutura inicial do site

A estrutura inicial do projeto será organizada da seguinte forma:

```text
portfolio/
│
├── index.html
├── README.md
│
├── assets/
│   ├── images/
│   │   ├── prototipo-inicial.png
│   │   ├── prototipo-sobre.png
│   │   ├── prototipo-habilidades.png
│   │   ├── prototipo-projetos.png
│   │   ├── prototipo-curriculo.png
│   │   └── prototipo-contato.png
│   │
│   └── gifs/
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

A estrutura poderá ser modificada conforme o desenvolvimento do projeto evoluir.

## Tecnologias previstas

O projeto será desenvolvido inicialmente utilizando tecnologias web fundamentais:

* **HTML5** — estrutura e organização do conteúdo.
* **CSS3** — estilização, layout, responsividade e efeitos visuais.
* **JavaScript** — implementação da interação com o terminal, comandos e navegação.

A interface principal não dependerá de frameworks, mantendo a implementação simples e utilizando tecnologias nativas da web.

## Funcionalidades previstas

* Interface inspirada em terminal.
* Navegação através de comandos.
* Exibição dinâmica das seções.
* Comando de ajuda com os comandos disponíveis.
* Comando `clear` para limpar o terminal.
* Animações e efeitos visuais.
* Design responsivo para dispositivos móveis.
* Exibição de imagens e GIFs dos projetos.
* Links para GitHub, LinkedIn e WhatsApp.
* Apresentação de informações profissionais e projetos.

## Objetivo

Criar um portfolio profissional com uma experiência diferente dos portfolios tradicionais.

A interface utilizará elementos visuais de terminal, comandos, texto monoespaçado, animações e navegação interativa.

A ideia é proporcionar ao visitante a sensação de estar explorando um terminal pessoal, enquanto acessa informações profissionais de forma simples e intuitiva.

## Próximas etapas

* [ ] Implementar a tela inicial com `TESTE`
* [ ] Implementar a estrutura visual do terminal
* [ ] Implementar o sistema de comandos
* [ ] Criar a seção `/sobre`
* [ ] Criar a seção `/habilidades`
* [ ] Criar a seção `/projetos`
* [ ] Criar a seção `/curriculo`
* [ ] Criar a seção `/contato`
* [ ] Adicionar GitHub
* [ ] Adicionar LinkedIn
* [ ] Adicionar WhatsApp
* [ ] Adicionar imagens dos protótipos
* [ ] Adicionar GIFs dos projetos
* [ ] Substituir os textos fictícios pelas informações reais
* [ ] Implementar responsividade para celular
* [ ] Realizar testes de usabilidade e navegação
