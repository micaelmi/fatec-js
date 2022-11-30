function cleanForm() {
    //Limpa valores do formulário de cep.
    logradouro.value = ("");
    bairro.value = ("");
    cidade.value = ("");
    uf.value = ("");
}

function ApiResponse(content) {
    if (!("erro" in content)) {
        //Atualiza os campos com os valores.
        logradouro.value = (content.logradouro);
        bairro.value = (content.bairro);
        cidade.value = (content.localidade);
        uf.value = (content.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        cleanForm();
        iziToast.show({
            title: 'CEP não encontrado',
            timeout: 2000,
            color: 'red',
        });
    }
}

function searchCEP(content) {
    //Nova variável "cep" somente com dígitos.
    let cep = content.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validateCEP = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validateCEP.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            logradouro.value = ("...");
            bairro.value = ("...");
            cidade.value = ("...");
            uf.value = ("...");

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=ApiResponse';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            cleanForm();
            iziToast.show({
                title: 'Este CEP não existe',
                timeout: 2000,
                color: 'red',
            });
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        cleanForm();
    }
};
