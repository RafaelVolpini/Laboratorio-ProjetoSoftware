# Terminal Portfolio — Volpini OS

Portfolio pessoal desenvolvido com uma interface inspirada em um terminal de computador.

A proposta é apresentar informações profissionais de forma interativa, permitindo que o visitante navegue pelo conteúdo utilizando comandos digitados diretamente no terminal. O conteúdo é individual e pode ser personalizado em `portfolio/js/data.js`.

## Site publicado

Ainda não há uma URL de produção configurada. Após publicar a pasta `portfolio/` em um serviço estático, substitua este texto pelo endereço final, por exemplo: `https://seu-projeto.vercel.app`.

## Tecnologias utilizadas

- HTML5 semântico e acessível.
- CSS3, com layout responsivo, foco visível e suporte a `prefers-reduced-motion`.
- JavaScript puro para o terminal, navegação, idiomas e formulário de contato.
- Font Awesome 6 para os ícones.

## Uso e desenvolvimento

1. Entre na pasta `portfolio/`.
2. Instale as dependências com `npm install`.
3. Inicie o servidor local com `npm run dev`.
4. Abra o endereço exibido pelo `live-server`.

O formulário valida nome, e-mail e mensagem e abre o aplicativo de e-mail padrão usando `mailto:volpini767@gmail.com`. Para receber envios diretamente no servidor, substitua esse fluxo por um serviço como Formspree ou por uma API própria.

O currículo usado pelo sistema é `portfolio/CV Rafael Nagem Volpini-5.pdf`. No OS, selecione **Currículo PDF** e pressione `Enter`. O visualizador PDF.js permite navegar pelas páginas, ajustar o zoom, baixar o arquivo e abrir outro PDF local pelo botão **Abrir PDF**.

Para publicar, conecte o repositório ao Vercel, Render ou GitHub Pages e defina `portfolio/` como diretório raiz de publicação. Depois atualize a seção **Site publicado** com a URL real.

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
├── CV Rafael Nagem Volpini-5.pdf
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
