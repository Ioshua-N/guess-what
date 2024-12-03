let pairsCountIndex = Number(localStorage.getItem('pairsCountIndex'));

const pairs = [1, 2, 3, 4];
const duos = ['RED', 'GREEN', 'BLUE', 'YELLOW'];

// Mostrar apenas a "Team Blue" por padrão
document.getElementById('team-blue').style.display = 'block';

for (let i = 0; i <= pairsCountIndex; i++) {
    const teamId = `TEAM-${duos[i].toLowerCase()}`;
    document.getElementById(teamId).style.display = 'block';
}

const allTeams = document.querySelectorAll('.team');
allTeams.forEach((team) => {
    if (team.style.display !== 'block') {
        team.style.display = 'none';
    }
});