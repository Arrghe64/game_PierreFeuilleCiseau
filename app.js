let wins = 0; let loses = 0;
const choices = ["pierre", "feuille", "ciseaux"];
// const choices = ["papier", "caillou", "ciseaux"];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");

/** fonction du jeu avec choix utilisateur en paramètre
 * tirage random de l'ordinateur dans choises[]
 * utilisation d'un switch pour parcourir tous les cas de victoire, de perte et d'égalité
*/ 
function runGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    switch(`${userChoice}_${computerChoice}`){
        case 'feuille_sciseaux':
        case 'pierre_feuille':
        case 'ciseaux_pierre':
            loses += 1;
            gameStatus.innerHTML = `😣 : ${userChoice} | 💻 : ${computerChoice} 👉 ordi gagne !`
            break;
        case 'feuille_pierre':
        case 'pierre_ciseaux':
        case 'ciseaux_feuille':
            wins += 1;
            gameStatus.innerHTML = `😁 : ${userChoice} | 💻 : ${computerChoice} 👉 je gagne !`
            break;
        case 'feuille_feuille':
        case 'pierre_pierre':
        case 'ciseaux_ciseaux':
            gameStatus.innerHTML = `🤔 : ${userChoice} | 💻 : ${computerChoice} 👉 égalité.`
            break;
    }
    // console.log(`Moi: ${userChoice} | Ordi: ${computerChoice}`);

    // mise à jour du score
    gameScore.innerHTML = `😎 : ${wins} | 💻 : ${loses}`;
}


paper.addEventListener('click', () => runGame("feuille"));
rock.addEventListener('click', () => runGame("pierre"));
scissors.addEventListener('click', () => runGame("ciseaux"));

//TODO : un bouton pour reset
//TODO : un délai pour l'affichage de la battle puis reset du <h2>