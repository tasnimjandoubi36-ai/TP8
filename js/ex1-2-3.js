const titre = document.getElementById("titre");
const infos = document.getElementsByClassName("info");
const ateliers = document.querySelectorAll(".atelier");

console.log(titre.textContent);
console.log(infos.length);
console.log(ateliers.length);

console.log(document.images.length);
console.log(document.links.length);
console.log(document.forms.length);

titre.textContent = "Le club informatique – Inscriptions 2026";

infos[1].innerHTML = "Salle <b>B12</b>, bâtiment A";

for (const p of infos) {
    p.classList.add("important");
}

console.log(infos[0].className);

const boutons = document.querySelectorAll(".atelier");
const choix = document.getElementById("choix");

for (const bouton of boutons) {

    bouton.addEventListener("click", function(e) {

        e.target.classList.add("choisi");

        choix.textContent = "Atelier choisi : " + e.target.textContent;

    });

}

document.addEventListener("keydown", function(e) {

    console.log(e.key);

    if (e.key === "Escape") {
        choix.textContent = "Aucun atelier choisi";
    }

});
