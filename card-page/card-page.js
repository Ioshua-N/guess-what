let pairsCountIndex = Number(localStorage.getItem('pairsCountIndex'));

const pairs = [1, 2, 3, 4];
const duos = ['RED', 'GREEN', 'BLUE', 'YELLOW'];

let currentTurn = localStorage.getItem('currentTurn');

let duoName = document.getElementById('duo-name');
document.getElementById('duo-name').textContent = `${duos[currentTurn]} TEAM`;

function updateScore() {
  const scoreElements = document.querySelectorAll('.team div:nth-child(2)');
  scoreElements.forEach((scoreElement, index) => {
    scoreElement.textContent = localStorage.getItem(`team-${duos[index].toLowerCase()}`);
  });
}
updateScore();

document.getElementById('team-red').style.display = 'flex';

for (let i = 0; i <= pairsCountIndex; i++) {
    const teamId = `team-${duos[i].toLowerCase()}`;
    document.getElementById(teamId).style.display = 'flex';
}

const allTeams = document.querySelectorAll('.team');
allTeams.forEach((team) => {
    if (team.style.display !== 'flex') {
        team.style.display = 'none';
    }
});

const correctButton = document.getElementById('btn-right');
correctButton.addEventListener('click', () => {
    let equipe = duos[currentTurn].toLowerCase();

    let pontos = localStorage.getItem(`team-${equipe}`)
    pontos++;

    localStorage.setItem(`team-${equipe}`, pontos)

    currentTurn++;

    if (currentTurn > pairsCountIndex) {
        currentTurn = 0;
    }

    localStorage.setItem('currentTurn', currentTurn);
    
    window.location.href = '../roll-dice/roll-dice.html'
});

const wrongButton = document.getElementById('btn-wrong');
wrongButton.addEventListener('click', () => {
    currentTurn++;

    if (currentTurn > pairsCountIndex) {
        currentTurn = 0;
    }

    localStorage.setItem('currentTurn', currentTurn);

    window.location.href = '../roll-dice/roll-dice.html';
});