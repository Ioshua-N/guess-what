const players = [2, 4, 6, 8];
const playersCountIndex = 0;

const playersCount = document.getElementById('mbp-count-btn');
playersCount.addEventListener('click', () => {
    playersCountIndex++;

    if (playersCountIndex > 3) {
        playersCountIndex = 0;
    }

    rulesButton.innerHTML = players[playersCountIndex];
});