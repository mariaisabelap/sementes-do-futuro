import { mostrarInicio, mostrarProjetos, mostrarCadastro } from "./templates.js";
import { configurarFormulario } from "./formulario.js";

const app = document.getElementById("app");

function renderizarPagina(pagina) {

    if (pagina === "inicio") {
        app.innerHTML = mostrarInicio();
    }

    if (pagina === "projetos") {
        app.innerHTML = mostrarProjetos();
    }

    if (pagina === "cadastro") {
        app.innerHTML = mostrarCadastro();
        configurarFormulario();
    }
}

document.addEventListener("click", function (evento) {

    const link = evento.target.closest("[data-rota]");

    if (!link) {
        return;
    }

    evento.preventDefault();

    const pagina = link.dataset.rota;

    renderizarPagina(pagina);

    window.location.hash = pagina;
});

const rotaInicial = window.location.hash.replace("#", "") || "inicio";

renderizarPagina(rotaInicial);
