function satinizaCep(cep) {
    return cep.replace(/\D/g, "");
}

function limparFormulario() {
    outRua.value = "";
    outBairro.value = "";
    outEstado.value = "";
    outCidade.value = "";
}

const outRua = document.querySelector("#rua");
const outBairro = document.querySelector("#bairro");
const outCidade = document.querySelector("#cidade");
const outEstado = document.querySelector("#estado");
const inCep = document.querySelector("#inCep");


inCep.addEventListener("blur", () => {
    let cep = satinizaCep(inCep.value)

    if (cep.length != 8) {
        limparFormulario();
    }
})


inCep.addEventListener("input", () => {
    let cep = satinizaCep(inCep.value);

    if (cep.length != 8) {
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.erro) {
                alert("CEP Inválido!");
                limparFormulario();
                return;
            }

            outRua.value = data.logradouro;
            outBairro.value = data.bairro;
            outEstado.value = data.estado;
            outCidade.value = data.localidade;
        })
        .catch(error => {
            alert("Serviço indisponível no momento. Tente novamente mais tarde!")
        });
});



