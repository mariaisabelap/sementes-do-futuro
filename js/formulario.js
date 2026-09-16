export function configurarFormulario() {

    const formulario = document.querySelector("#cadastro form");

    if (!formulario) {
        return;
    }

    const motivacao = formulario.querySelector("#motivacao");
    const contador = formulario.querySelector("#contador-motivacao");

    motivacao.addEventListener("input", function () {

        contador.textContent =
            `${motivacao.value.length}/300 caracteres`;

    });


    const nome = formulario.nome;
    const nascimento = formulario.nascimento;
    const cpf = formulario.cpf;
    const email = formulario.email;
    const telefone = formulario.telefone;
    const cep = formulario.cep;
    const endereco = formulario.endereco;
    const numero = formulario.numero;
    const cidade = formulario.cidade;
    const estado = formulario.estado;
    const area = formulario.area;


    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        console.log("O submit foi executado!");


        const nomeValido = validarCampo(
            nome,
            "Digite seu nome.",
            "#erro-nome"
        );

        const nascimentoValido = validarCampo(
            nascimento,
            "Informe sua data de nascimento.",
            "#erro-nascimento"
        );

        const cpfValido = validarCampo(
            cpf,
            "Digite o CPF no formato 000.000.000-00.",
            "#erro-cpf"
        );

        const emailValido = validarCampo(
            email,
            "Digite um e-mail válido.",
            "#erro-email"
        );

        const telefoneValido = validarCampo(
            telefone,
            "Digite um telefone válido.",
            "#erro-telefone"
        );

        const cepValido = validarCampo(
            cep,
            "Digite o CEP no formato 00000-000.",
            "#erro-cep"
        );

        const enderecoValido = validarCampo(
            endereco,
            "Digite seu endereço.",
            "#erro-endereco"
        );

        const numeroValido = validarCampo(
            numero,
            "Digite o número.",
            "#erro-numero"
        );

        const cidadeValida = validarCampo(
            cidade,
            "Digite sua cidade.",
            "#erro-cidade"
        );

        const estadoValido = validarCampo(
            estado,
            "Selecione seu estado.",
            "#erro-estado"
        );

        const areaValida = validarCampo(
            area,
            "Selecione uma área de interesse.",
            "#erro-area"
        );

        const disponibilidadeValida = validarRadio(
            "disponibilidade",
            "#erro-disponibilidade"
        );

        const motivacaoValida = validarCampo(
            motivacao,
            "Informe por que deseja ser voluntário.",
            "#erro-motivacao"
        );


        if (
            !nomeValido ||
            !nascimentoValido ||
            !cpfValido ||
            !emailValido ||
            !telefoneValido ||
            !cepValido ||
            !enderecoValido ||
            !numeroValido ||
            !cidadeValida ||
            !estadoValido ||
            !areaValida ||
            !disponibilidadeValida ||
            !motivacaoValida
        ) {
            return;
        }


        const cadastro = {

            nome: nome.value,
            nascimento: nascimento.value,
            cpf: cpf.value,
            email: email.value,
            telefone: telefone.value,
            cep: cep.value,
            endereco: endereco.value,
            numero: numero.value,
            cidade: cidade.value,
            estado: estado.value,
            area: area.value,
            disponibilidade: formulario.disponibilidade.value,
            motivacao: motivacao.value

        };


        const cadastroTexto = JSON.stringify(cadastro);

        localStorage.setItem("cadastro", cadastroTexto);


        const cadastroSalvo = localStorage.getItem("cadastro");

        const cadastroRecuperado = JSON.parse(cadastroSalvo);

        console.log("Cadastro salvo:", cadastroRecuperado);


        const mensagem = formulario.querySelector(
            "#mensagem-formulario"
        );

        mensagem.textContent =
            "Cadastro realizado com sucesso!";


        formulario.reset();

        contador.textContent = "0/300 caracteres";

    });


    function validarCampo(campo, mensagem, idMensagem) {

        const elementoMensagem =
            formulario.querySelector(idMensagem);


        if (!campo.value.trim()) {

            campo.classList.add("campo-erro");

            elementoMensagem.textContent = mensagem;

            return false;

        }


        if (!campo.validity.valid) {

            campo.classList.add("campo-erro");

            elementoMensagem.textContent = mensagem;

            return false;

        }


        campo.classList.remove("campo-erro");

        elementoMensagem.textContent = "";


        return true;

    }


    function validarRadio(nome, idMensagem) {

        const opcoes = formulario.querySelectorAll(
            `input[name="${nome}"]`
        );

        const elementoMensagem =
            formulario.querySelector(idMensagem);


        let selecionado = false;


        opcoes.forEach(function (opcao) {

            if (opcao.checked) {

                selecionado = true;

            }

        });


        if (!selecionado) {

            elementoMensagem.textContent =
                "Selecione uma opção.";

            return false;

        }


        elementoMensagem.textContent = "";

        return true;

    }

    function carregarCadastro() {

        const cadastroSalvo = localStorage.getItem("cadastro");
    
        if (!cadastroSalvo) {
            return;
        }
    
        const cadastro = JSON.parse(cadastroSalvo);
    
        nome.value = cadastro.nome;
        nascimento.value = cadastro.nascimento;
        cpf.value = cadastro.cpf;
        email.value = cadastro.email;
        telefone.value = cadastro.telefone;
        cep.value = cadastro.cep;
        endereco.value = cadastro.endereco;
        numero.value = cadastro.numero;
        cidade.value = cadastro.cidade;
        estado.value = cadastro.estado;
        area.value = cadastro.area;
        motivacao.value = cadastro.motivacao;
    
        const disponibilidade =
            formulario.querySelector(
                `input[name="disponibilidade"][value="${cadastro.disponibilidade}"]`
            );
    
        if (disponibilidade) {
            disponibilidade.checked = true;
        }
    
        contador.textContent =
            `${motivacao.value.length}/300 caracteres`;
    }

    carregarCadastro();

}

