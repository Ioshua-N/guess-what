const pairs = [1, 2, 3, 4];
let pairsCountIndex = 0;
localStorage.setItem('pairCountIndex', 0);

const pairsCount = document.getElementById('mbp-count-btn');
pairsCount.addEventListener('click', async () => {
    pairsCountIndex++;

    if (pairsCountIndex > 3) {
        pairsCountIndex = 0;
    }

    localStorage.setItem('pairsCountIndex', pairsCountIndex);

    /*let teste = localStorage.getItem('pairsCountIndex');
    console.log(teste)*/

    const innerDiv = pairsCount.querySelector('div');
    innerDiv.textContent = pairs[pairsCountIndex];
});

const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', async () => {
    localStorage.setItem('team-red', '0');
    localStorage.setItem('team-green', '0');
    localStorage.setItem('team-blue', '0');
    localStorage.setItem('team-yellow', '0');
    localStorage.setItem('currentTurn', 0);
    window.location.href = './roll-dice/roll-dice.html'
});

const rulesButton = document.getElementById('rules-btn');
rulesButton.addEventListener('click', () => {
    window.location.href = './rules/rules.html'
});