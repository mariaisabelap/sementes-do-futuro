# 🌱 Sementes do Futuro

> **Plante hoje o futuro que queremos viver.**

## 📌 Sobre o projeto

O **Sementes do Futuro** é uma aplicação web desenvolvida para uma Organização Não Governamental (ONG) voltada à conscientização e preservação ambiental.

O projeto tem como objetivo apresentar a organização, divulgar seus projetos e possibilitar o cadastro de pessoas interessadas em participar de suas ações.

A aplicação foi desenvolvida utilizando **HTML5, CSS3 e JavaScript**, com navegação dinâmica entre as principais seções do site.

---

## ✨ Funcionalidades

* Apresentação da ONG;
* Divulgação de projetos ambientais;
* Cadastro de voluntários;
* Navegação entre as seções da aplicação;
* Validação dos campos do formulário;
* Mensagens de erro para campos inválidos;
* Contador de caracteres no campo de motivação;
* Armazenamento dos dados no `localStorage`;
* Recursos de acessibilidade;
* Interface responsiva.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia       | Utilização                                          |
| ---------------- | --------------------------------------------------- |
| **HTML5**        | Estrutura e organização semântica das páginas       |
| **CSS3**         | Estilização, layout e responsividade                |
| **JavaScript**   | Navegação, interatividade e validação do formulário |
| **LocalStorage** | Armazenamento dos dados do formulário no navegador  |
| **Git**          | Controle de versão                                  |
| **GitHub**       | Hospedagem e organização do repositório             |

---

## 📂 Estrutura do projeto

```text
sementes-do-futuro/
│
├── html/
│   ├── index.html
│   ├── cadastro.html
│   └── projetos.html
│
├── css/
│   └── style.css
|   └── cadastro.css
|   └── projetos.css
│
│
│
├── js/
│   ├── app.js
│   ├── templates.js
│   └── formulario.js
│
├── assets/
│   └── imagens/
│
└── README.md
```

### Principais arquivos

* **`html/index.html`** — página inicial da aplicação.
* **`js/app.js`** — controle da aplicação e da navegação.
* **`js/templates.js`** — organização dos templates utilizados na aplicação.
* **`js/formulario.js`** — configuração e validação do formulário.
* **`css/style.css`** — estilos e identidade visual do projeto.

---

## 🧭 Navegação

A aplicação utiliza JavaScript para controlar a navegação e carregar os conteúdos das diferentes seções.

As principais áreas da aplicação são:

* **Início** — apresentação da ONG;
* **Projetos** — divulgação das iniciativas ambientais;
* **Cadastro** — formulário para pessoas interessadas em participar da ONG.

---

## 📝 Formulário de cadastro

O formulário permite o cadastro de pessoas interessadas em participar das ações da ONG.

Entre os dados solicitados estão:

* Nome;
* Data de nascimento;
* CPF;
* E-mail;
* Telefone;
* CEP;
* Endereço;
* Número;
* Cidade;
* Estado;
* Área de interesse;
* Motivação.

O formulário possui validações para auxiliar o preenchimento correto dos campos, mensagens de erro e contador de caracteres no campo de motivação.

Os dados preenchidos são armazenados no **LocalStorage** do navegador para fins acadêmicos.

---

## ♿ Acessibilidade

O projeto utiliza práticas de acessibilidade para tornar a interação com o formulário mais clara e acessível.

Entre os recursos utilizados estão:

* Elementos HTML semânticos;
* `aria-describedby`;
* `aria-live`;
* `fieldset` e `legend`;
* Associação entre campos e mensagens de erro;
* Associação do contador de caracteres ao campo de motivação.

---

## 🌿 Identidade visual

A identidade visual foi desenvolvida de acordo com a temática ambiental do projeto.

A interface utiliza a fonte **Nunito Sans** e uma paleta de cores inspirada na natureza, composta por tons de verde, marrom e bege.

---

## 🌳 Organização do desenvolvimento

O projeto utiliza **Git e GitHub** para controle de versão e organização das atividades.

A estrutura de branches segue uma abordagem baseada em **GitFlow**:

* `main` — versão principal do projeto;
* `develop` — desenvolvimento;
* `feature/` — desenvolvimento de funcionalidades;
* `hotfix/` — correções.

O repositório também utiliza **Issues, Milestones e Pull Requests** para acompanhar e organizar as atividades do projeto.

---

## 🚀 Como executar o projeto

### Pré-requisitos

* Navegador atualizado;
* Git;
* Visual Studio Code ou outro editor de código.

### 1. Clone o repositório

```bash
git clone https://github.com/mariaisabelap/sementes-do-futuro.git
```

### 2. Acesse a pasta do projeto

```bash
cd sementes-do-futuro
```

### 3. Execute a aplicação

Abra o projeto no Visual Studio Code e execute o arquivo:

```text
html/index.html
```

Durante o desenvolvimento, pode ser utilizado o **Live Server** para executar a aplicação localmente.

---

## 🧪 Testes

Os testes são realizados manualmente no navegador, verificando:

* Navegação entre as páginas;
* Carregamento dos conteúdos;
* Validação do formulário;
* Mensagens de erro;
* Contador de caracteres;
* Armazenamento no LocalStorage;
* Recursos de acessibilidade;
* Responsividade da interface.

---

## 👩‍💻 Autoria

**Isabela Pinheiro**

Projeto desenvolvido para fins acadêmicos no curso de **Engenharia de Software**.

---

## 🔗 Repositório

[GitHub — Sementes do Futuro](https://github.com/mariaisabelap/sementes-do-futuro)

---

> 🌱 **Plante hoje o futuro que queremos viver.**
