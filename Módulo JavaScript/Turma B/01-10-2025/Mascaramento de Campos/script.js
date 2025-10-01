const outEndereco = document.querySelector("#outEndereco");
const inCnpj = document.querySelector("#inCnpj");

inCnpj.addEventListener("input", () => {

    let cnpj = inCnpj.value.replace(/\D/g, "");

    if (cnpj.length != 14) {
        return;
    }

    let url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let endereco = `${data.descricao_tipo_de_logradouro}
             ${data.logradouro}, 
             ${data.numero}.
             ${data.bairro}`
            outEndereco.textContent = endereco;
        });
})