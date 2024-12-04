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

// Credit: Mateusz Rybczonec
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 10;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);

  currentTurn++;

    if (currentTurn > pairsCountIndex) {
        currentTurn = 0;
    }

    localStorage.setItem('currentTurn', currentTurn);

    window.location.href = '../roll-dice/roll-dice.html';
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}