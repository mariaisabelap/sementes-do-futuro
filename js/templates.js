export function mostrarInicio() {
    return `
        <section id="inicio">

            <h1>Sementes do Futuro</h1>

            <p>Plante hoje o futuro que queremos viver.</p>

            <p>
                A Sementes do Futuro promove ações sustentáveis para
                transformar comunidades e preservar o meio ambiente.
            </p>

        </section>


        <section id="nossa-historia">

            <h2>Nossa História</h2>

            <h3>Por que existimos?</h3>

            <p>
                Acreditamos que cuidar do planeta é uma responsabilidade de
                todos nós. A Sementes do Futuro nasceu para aproximar pessoas
                da natureza e mostrar que cada pequena atitude pode fazer a
                diferença. Juntos, podemos transformar o presente e cultivar
                um futuro mais verde e sustentável.
            </p>

            <h3>Quem somos?</h3>

            <p>
                Somos uma organização formada por pessoas que acreditam no
                poder da união para transformar o mundo. Reunimos voluntários,
                estudantes, educadores e membros da comunidade que compartilham
                o desejo de cuidar da natureza e deixar um futuro melhor para
                as próximas gerações.
            </p>

            <h3>Nossa Missão</h3>

            <p>
                Cuidar do meio ambiente e inspirar pessoas a fazerem parte
                dessa transformação, promovendo ações sustentáveis, educação
                ambiental e iniciativas que aproximem a comunidade da natureza.
            </p>

            <h3>Nossa Visão</h3>

            <p>
                Construir um futuro onde pessoas e natureza possam viver em
                harmonia, com comunidades mais conscientes, unidas e dispostas
                a cuidar do planeta.
            </p>

            <h3>Nossos Valores</h3>

            <ul>

                <li>
                    <strong>Sustentabilidade:</strong>
                    Cuidar dos recursos naturais hoje para que eles continuem
                    existindo amanhã.
                </li>

                <li>
                    <strong>Cooperação:</strong>
                    Acreditar que, quando unimos nossas mãos e nossas ideias,
                    conseguimos transformar muito mais.
                </li>

                <li>
                    <strong>Responsabilidade:</strong>
                    Fazer a nossa parte com carinho, consciência e compromisso
                    com o planeta e com as futuras gerações.
                </li>

            </ul>

        </section>


        <section id="nosso-impacto">

            <h2>Nosso impacto</h2>

            <p>
                Cada ação começa pequena, mas quando muitas pessoas se unem,
                os resultados podem transformar comunidades e ajudar a natureza.
            </p>

            <article>

                <h3>Árvores plantadas</h3>

                <p>
                    <strong>500+</strong>
                </p>

            </article>

            <article>

                <h3>Pessoas mobilizadas</h3>

                <p>
                    <strong>300+</strong>
                </p>

            </article>

            <article>

                <h3>Ações ambientais</h3>

                <p>
                    <strong>25</strong>
                </p>

            </article>

            <article>

                <h3>Espaços revitalizados</h3>

                <p>
                    <strong>10</strong>
                </p>

            </article>

        </section>


        <section id="nossos-projetos">

            <h2>Nossos projetos</h2>

            <p>
                Conheça algumas das iniciativas da Sementes do Futuro.
            </p>


            <article>

                <picture>

                    <source
                        srcset="../img/plantacao.webp"
                        type="image/webp"
                    >

                    <img
                        src="../img/plantacao.jpeg"
                        alt="Pessoa plantando uma árvore"
                    >

                </picture>


                <div class="projeto-conteudo">

                    <span class="badge badge-verde">
                        Projeto ativo
                    </span>

                    <h3>Raízes do Amanhã</h3>

                    <p>
                        Plantio de árvores e recuperação de áreas verdes.
                    </p>

                    <button
                        class="botao-secundario"
                        type="button"
                        popovertarget="modal-raizes"
                    >
                        Saiba mais
                    </button>

                </div>

            </article>


            <article>

                <picture>

                    <source
                        srcset="../img/reciclagem.webp"
                        type="image/webp"
                    >

                    <img
                        src="../img/reciclagem.jpeg"
                        alt="Pessoas realizando uma ação de reciclagem"
                    >

                </picture>


                <div class="projeto-conteudo">

                    <span class="badge badge-ocre">
                        Conscientização
                    </span>

                    <h3>Ciclo Consciente</h3>

                    <p>
                        Ações de reciclagem e conscientização sobre o descarte
                        correto de resíduos.
                    </p>

                    <button
                        class="botao-secundario"
                        type="button"
                        popovertarget="modal-ciclo"
                    >
                        Saiba mais
                    </button>

                </div>

            </article>


            <article>

                <picture>

                    <source
                        srcset="../img/rio.webp"
                        type="image/webp"
                    >

                    <img
                        src="../img/rio.jpeg"
                        alt="Pessoa participando da limpeza de um rio"
                    >

                </picture>


                <div class="projeto-conteudo">

                    <span class="badge badge-azul">
                        Preservação
                    </span>

                    <h3>Guardiões da Água</h3>

                    <p>
                        Ações de preservação de rios, nascentes e
                        conscientização sobre o uso responsável da água.
                    </p>

                    <button
                        class="botao-secundario"
                        type="button"
                        popovertarget="modal-agua"
                    >
                        Saiba mais
                    </button>

                </div>

            </article>


            <p>

                Para conhecer todos os nossos projetos,

                <a
                    href="#projetos"
                    data-rota="projetos"
                >
                    acesse a página de projetos
                </a>.

            </p>

        </section>


        <section id="faca-parte">

            <h2>Faça parte da transformação</h2>

            <p>
                Você também pode ajudar a transformar o futuro. Junte-se à
                Sementes do Futuro e participe de ações que contribuem para a
                preservação da natureza e para uma comunidade mais consciente.
            </p>

            <a
                class="botao-principal"
                href="#cadastro"
                data-rota="cadastro"
            >
                <strong>Quero ser voluntário</strong>
            </a>

        </section>


        <!-- Alertas -->

        <section id="feedback">

            <h2>Informações</h2>

            <div
                class="alerta alerta-info"
                role="status"
            >
                <strong>Informação:</strong>
                Novas ações ambientais serão divulgadas em breve.
            </div>


            <div
                class="alerta alerta-sucesso"
                role="status"
            >
                <strong>Sucesso:</strong>
                A comunidade já alcançou mais de 500 árvores plantadas.
            </div>


            <!-- Toast -->

            <div
                class="toast"
                role="status"
            >
                <strong>Atualização:</strong>
                Projeto atualizado com sucesso!
            </div>


            <!-- Exemplo de estado desabilitado -->

            <button
                class="botao-principal"
                type="button"
                disabled
            >
                Inscrições encerradas
            </button>

        </section>
    `;
}

export function mostrarProjetos() {
    return `
        <section id="apresentacao">

            <h1>
                Conheça as iniciativas da Sementes do Futuro e descubra
                como você pode fazer parte da transformação.
            </h1>

            <p>
                Nossos projetos unem voluntários e comunidade em ações
                voltadas para a preservação do meio ambiente.
            </p>

        </section>


        <section id="ferramentas">

            <h2>Nossas Ferramentas de Atuação</h2>

            <p>
                Conheça algumas das principais iniciativas desenvolvidas
                pela Sementes do Futuro.
            </p>


            <article>

                <picture>

                    <source
                        srcset="../img/plantacao.webp"
                        type="image/webp"
                    >

                    <img
                        src="../img/plantacao.jpeg"
                        alt="Pessoa plantando uma árvore"
                    >

                </picture>


                <div class="projeto-conteudo">

                    <span class="badge badge-verde">
                        Projeto ativo
                    </span>

                    <h3>Raízes do Amanhã</h3>

                    <ul>
                        <li>Plantio de árvores;</li>
                        <li>Recuperação de áreas verdes;</li>
                        <li>Mobilização de voluntários;</li>
                        <li>Educação ambiental.</li>
                    </ul>

                </div>

            </article>


            <article>

                <picture>

                    <source
                        srcset="../img/reciclagem.webp"
                        type="image/webp"
                    >

                    <img
                        src="../img/reciclagem.jpeg"
                        alt="Pessoas realizando uma ação de reciclagem"
                    >

                </picture>


                <div class="projeto-conteudo">

                    <span class="badge badge-ocre">
                        Conscientização
                    </span>

                    <h3>Ciclo Consciente</h3>

                    <ul>
                        <li>Coleta e separação de resíduos;</li>
                        <li>Reciclagem;</li>
                        <li>Conscientização;</li>
                        <li>Oficinas educativas.</li>
                    </ul>

                </div>

            </article>


            <article>

                <picture>

                    <source
                        srcset="../img/rio.webp"
                        type="image/webp"
                    >

                    <img
                        src="../img/rio.jpeg"
                        alt="Pessoa participando da limpeza de um rio"
                    >

                </picture>


                <div class="projeto-conteudo">

                    <span class="badge badge-azul">
                        Preservação
                    </span>

                    <h3>Guardiões da Água</h3>

                    <ul>
                        <li>Limpeza de rios;</li>
                        <li>Preservação de nascentes;</li>
                        <li>Conscientização sobre desperdício;</li>
                        <li>Ações comunitárias.</li>
                    </ul>

                </div>

            </article>

        </section>


        <section id="seja-voluntario">

            <h2>Seja voluntário</h2>

            <p>
                Faça parte da Sementes do Futuro e ajude a transformar
                o meio ambiente por meio de ações que fazem a diferença
                na comunidade.
            </p>


            <h3>Como participar?</h3>

            <ol>

                <li>
                    Preencha seu cadastro de voluntário.
                </li>

                <li>
                    Escolha uma das ações ambientais disponíveis.
                </li>

                <li>
                    Participe das atividades junto com nossa equipe.
                </li>

                <li>
                    Compartilhe seus conhecimentos e ajude a mobilizar
                    outras pessoas.
                </li>

            </ol>


            <h3>Como você pode ajudar?</h3>

            <ul>

                <li>
                    Participando de plantios de árvores;
                </li>

                <li>
                    Auxiliando em ações de reciclagem;
                </li>

                <li>
                    Participando da limpeza e preservação de rios;
                </li>

                <li>
                    Contribuindo com atividades de educação ambiental;
                </li>

                <li>
                    Divulgando as ações da ONG na comunidade.
                </li>

            </ul>


            <a
                class="botao-principal"
                href="#cadastro"
                data-rota="cadastro"
            >
                Quero ser voluntário
            </a>

        </section>


        <section id="faca-doacao">

            <h2>Faça uma Doação</h2>

            <p>
                Cada doação, independentemente do valor, ajuda a transformar
                pequenas ações em mudanças reais. Com o apoio da comunidade,
                conseguimos ampliar nossas iniciativas ambientais, adquirir
                materiais para as ações, recuperar áreas verdes e promover
                atividades de educação ambiental. Ao contribuir com a
                Sementes do Futuro, você também se torna parte dessa
                transformação e ajuda a construir um futuro mais verde e
                sustentável para todos.
            </p>


            <h3>Como contribuir?</h3>

            <ul>

                <li>
                    Contribuição financeira;
                </li>

                <li>
                    Doação de materiais.
                </li>

            </ul>


            <h3>Para onde vão as doações?</h3>

            <ul>

                <li>
                    Materiais para plantio;
                </li>

                <li>
                    Ferramentas para ações ambientais;
                </li>

                <li>
                    Materiais educativos;
                </li>

                <li>
                    Manutenção das atividades da ONG.
                </li>

            </ul>

        </section>


        <section class="feedback-projetos">

            <div
                class="alerta alerta-info"
                role="status"
            >
                <strong>Informação:</strong>
                Todas as ações são realizadas com a participação
                da comunidade e de voluntários.
            </div>


            <div
                class="alerta alerta-sucesso"
                role="status"
            >
                <strong>Impacto:</strong>
                Juntos, já alcançamos mais de 500 árvores plantadas.
            </div>

        </section>
    `;
}

export function mostrarCadastro() {
    return `
        <section id="cadastro">

            <h1>Seja um Voluntário</h1>

            <p>
                Preencha seus dados para fazer parte das ações
                da Sementes do Futuro.
            </p>

            <form novalidate>

                <fieldset>

                    <legend>Dados Pessoais</legend>

                    <label for="nome">
                        Nome completo:
                    </label>

                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        autocomplete="name"
                        aria-describedby="erro-nome"
                        required
                    >

                    <small class="mensagem-erro" id="erro-nome"></small>


                    <label for="nascimento">
                        Data de nascimento:
                    </label>

                    <input
                        type="date"
                        name="nascimento"
                        id="nascimento"
                        aria-describedby="erro-nascimento"
                        required
                    >

                    <small class="mensagem-erro" id="erro-nascimento"></small>


                    <label for="cpf">
                        CPF:
                    </label>

                    <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        inputmode="numeric"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        placeholder="000.000.000-00"
                        title="Digite o CPF no formato 000.000.000-00"
                        maxlength="14"
                        aria-describedby="erro-cpf"
                        required
                    >

                    <small class="mensagem-erro" id="erro-cpf"></small>

                </fieldset>


                <fieldset>

                    <legend>Contato</legend>

                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        aria-describedby="erro-email"
                        required
                    >

                    <small class="mensagem-erro" id="erro-email"></small>


                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        inputmode="tel"
                        pattern="[0-9]{10,11}"
                        placeholder="(83) 99999-9999"
                        title="Digite apenas os números do telefone"
                        maxlength="11"
                        autocomplete="tel"
                        aria-describedby="erro-telefone"
                        required
                    >

                    <small class="mensagem-erro" id="erro-telefone"></small>

                </fieldset>


                <fieldset>

                    <legend>Endereço</legend>

                    <label for="cep">
                        CEP:
                    </label>

                    <input
                        type="text"
                        name="cep"
                        id="cep"
                        inputmode="numeric"
                        pattern="[0-9]{5}-[0-9]{3}"
                        placeholder="00000-000"
                        title="Digite o CEP no formato 00000-000"
                        maxlength="9"
                        autocomplete="postal-code"
                        aria-describedby="erro-cep"
                        required
                    >

                    <small class="mensagem-erro" id="erro-cep"></small>


                    <label for="endereco">
                        Endereço:
                    </label>

                    <input
                        type="text"
                        name="endereco"
                        id="endereco"
                        autocomplete="street-address"
                        aria-describedby="erro-endereco"
                        required
                    >

                    <small class="mensagem-erro" id="erro-endereco"></small>


                    <label for="numero">
                        Número:
                    </label>

                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        aria-describedby="erro-numero"
                        required
                    >

                    <small class="mensagem-erro" id="erro-numero"></small>


                    <label for="complemento">
                        Complemento:
                    </label>

                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        autocomplete="address-line2"
                    >


                    <label for="cidade">
                        Cidade:
                    </label>

                    <input
                        type="text"
                        name="cidade"
                        id="cidade"
                        autocomplete="address-level2"
                        aria-describedby="erro-cidade"
                        required
                    >

                    <small class="mensagem-erro" id="erro-cidade"></small>


                    <label for="estado">
                        Estado:
                    </label>

                    <select
                        name="estado"
                        id="estado"
                        autocomplete="address-level1"
                        aria-describedby="erro-estado"
                        required
                    >
                        <option value="">
                            Selecione
                        </option>

                        <option value="PB">
                            Paraíba
                        </option>

                        <option value="PE">
                            Pernambuco
                        </option>

                        <option value="RN">
                            Rio Grande do Norte
                        </option>

                        <option value="CE">
                            Ceará
                        </option>
                    </select>

                    <small class="mensagem-erro" id="erro-estado"></small>

                </fieldset>


                <fieldset>

                    <legend>
                        Interesse em voluntariado
                    </legend>


                    <label for="area">
                        Área de interesse:
                    </label>

                    <select
                        name="area"
                        id="area"
                        aria-describedby="erro-area"
                        required
                    >

                        <option value="">
                            Selecione uma opção
                        </option>

                        <option value="plantio">
                            Plantio de árvores
                        </option>

                        <option value="reciclagem">
                            Reciclagem
                        </option>

                        <option value="agua">
                            Preservação da água
                        </option>

                        <option value="educacao">
                            Educação ambiental
                        </option>

                    </select>

                    <small class="mensagem-erro" id="erro-area"></small>


                    <fieldset class="grupo-disponibilidade">

                        <legend>Disponibilidade:</legend>

                        <div class="opcoes-radio">

                            <label>

                                <input
                                    type="radio"
                                    name="disponibilidade"
                                    value="semana"
                                    required
                                >

                                Durante a semana

                            </label>


                            <label>

                                <input
                                    type="radio"
                                    name="disponibilidade"
                                    value="fim-semana"
                                >

                                Finais de semana

                            </label>


                            <label>

                                <input
                                    type="radio"
                                    name="disponibilidade"
                                    value="ambos"
                                >

                                Ambos

                            </label>

                        </div>

                        <small
                            class="mensagem-erro"
                            id="erro-disponibilidade"
                        ></small>

                    </fieldset>


                    <label for="motivacao">
                        Por que deseja ser voluntário?
                    </label>


                    <textarea
                        id="motivacao"
                        name="motivacao"
                        rows="5"
                        maxlength="300"
                        aria-describedby="erro-motivacao contador-motivacao"
                        required
                    ></textarea>

                    <small
                        class="mensagem-erro"
                        id="erro-motivacao"
                    ></small>

                    <small id="contador-motivacao">
                        0/300 caracteres
                    </small>


                    <button type="submit">
                        Enviar cadastro
                    </button>

                    <div
                        id="mensagem-formulario"
                        role="status"
                        aria-live="polite"
                    ></div>

                </fieldset>

            </form>

        </section>
    `;
}
