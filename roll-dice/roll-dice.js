let pairsCountIndex = Number(localStorage.getItem('pairsCountIndex'));

const pairs = [1, 2, 3, 4];
const duos = ['Red', 'Green', 'Blue', 'Yellow'];

// Mostrar apenas a "Team Blue" por padrão
document.getElementById('team-red').style.display = 'block';

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

const rollDiceButton = document.getElementById('roll-dice-btn');
rollDiceButton.addEventListener('click', () => {
    
});