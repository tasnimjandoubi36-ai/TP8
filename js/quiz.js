
const bonnesReponses = {
    q1: "b",
    q2: "c",
    q3: "prevent",
    q4: "value"
};

const resultats = [];

const formQuiz = document.getElementById("quiz");
const joueur = formQuiz.elements["joueur"];
const score = document.getElementById("score");
const palmares = document.getElementById("palmares");

joueur.addEventListener("focus", function() {
    joueur.classList.add("actif");
});

joueur.addEventListener("blur", function() {
    joueur.classList.remove("actif");
});

formQuiz.addEventListener("submit", function(e) {
    e.preventDefault();

    if (joueur.value.trim() === "") {
        score.textContent = "Erreur : prénom obligatoire";
        score.classList.add("erreur");
        return;
    }

    score.classList.remove("erreur");

    let s = 0;

    for (const q in bonnesReponses) {
        const reponse = formQuiz.elements[q].value;
        const bloc = document.getElementById("bloc-" + q);

        if (reponse.trim().toLowerCase() === bonnesReponses[q]) {
            s++;
            bloc.classList.add("juste");
            bloc.classList.remove("faux");
        }
        else {
            bloc.classList.add("faux");
            bloc.classList.remove("juste");
        }
    }

    score.textContent = joueur.value + " : " + s + " / 4";

    resultats.push({
        joueur: joueur.value.trim(),
        score: s
    });

    resultats.sort(function(a, b) {
        return b.score - a.score;
    });

    palmares.innerHTML = "";

    for (const r of resultats) {
        const li = document.createElement("li");
        li.textContent = r.joueur + " : " + r.score + " / 4";
        palmares.appendChild(li);
    }
});

formQuiz.addEventListener("reset", function() {
    score.textContent = "";

    const questions = document.querySelectorAll(".question");

    for (const q of questions) {
        q.classList.remove("juste", "faux");
    }
});
