const form = document.forms["inscription"];
const message = document.getElementById("message");

console.log(form.elements.length);

form.elements["niveau"].addEventListener("change", function() {
    message.textContent = "Niveau choisi : " + this.options[this.selectedIndex].text;
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const prenom = form.elements["prenom"];
    const charte = form.elements["charte"];

    if (prenom.value.trim() === "") {
        message.textContent = "Le prénom est obligatoire.";
        message.className = "erreur";
    }
    else if (!charte.checked) {
        message.textContent = "Vous devez accepter la charte.";
        message.className = "erreur";
    }
    else {
        message.textContent = "Bonjour " + prenom.value + " !";
        message.className = "succes";
    }
});
