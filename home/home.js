const players = [2, 4, 6, 8];
let playersCountIndex = 0;

const playersCount = document.getElementById('mbp-count-btn');
playersCount.addEventListener('click', () => {
    playersCountIndex++;

    if (playersCountIndex > 3) {
        playersCountIndex = 0;
    }

    const innerDiv = playersCount.querySelector('div');
    innerDiv.textContent = players[playersCountIndex];
});

const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', () => {
    window.location.href = '../roll-dice/roll-dice.html'
});

const rulesButton = document.getElementById('rules-btn');
rulesButton.addEventListener('click', () => {
    window.location.href = '../rules/rules.html'
});