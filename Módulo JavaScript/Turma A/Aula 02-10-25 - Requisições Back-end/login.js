localStorage.clear();

const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = frm.inEmail.value;
    const senha = frm.inSenha.value;

    const url = "https://backend-todo-production-6d54.up.railway.app/login";

    frm.btnLogar.value = "Aguarde...";
    frm.btnLogar.disabled = true;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, senha })
    })
        .then(response => response.json())
        .then(data => {

            if (data.erro) {
                alert(data.erro);
                frm.btnLogar.value = "Login";
                frm.btnLogar.disabled = false;
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("nome", data.usuario.nome);
            localStorage.setItem("email", data.usuario.email);

            window.location.href = "home.html";

        });
});