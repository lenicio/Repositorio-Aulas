const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const email = frm.inEmail.value;
    const senha = frm.inSenha.value;

    const url = "https://backend-todo-production-6d54.up.railway.app/registro";
    alert(url);
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nome, email, senha })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });

});