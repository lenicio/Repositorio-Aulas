const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = frm.inEmail.value;
    let senha = frm.inSenha.value;

    let url = "https://backend-todo-production-6d54.up.railway.app/login";
    alert(url);
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ email, senha })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("nome", data.usuario.nome);
            } else {
                alert("Usuário e/ou senha incorretos!")
            }
        });

})