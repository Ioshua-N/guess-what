// document.addEventListener("DOMContentLoaded", () => {
//   const duos = ['RED', 'GREEN', 'BLUE', 'YELLOW'];
//   let winner = null;

//   duos.forEach(duo => {
//     const score = Number(localStorage.getItem(`team-${duo.toLowerCase()}`));
//     if (score === 5) {
//       winner = duo;
//     }
//   });

//   if (winner) {
//     alert(`${winner} TEAM venceu com 5 pontos!`);
//     localStorage.setItem('pairCountIndex', 0);
//     window.location.href = '../index.html';
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
    const duos = ['RED', 'GREEN', 'BLUE', 'YELLOW'];
    let winner = null;
  
    duos.forEach(duo => {
      const score = Number(localStorage.getItem(`team-${duo.toLowerCase()}`));
      if (score === 5) {
        winner = duo;
      }
    });
  
    if (winner) {
      localStorage.setItem('winner', winner); 
      localStorage.setItem('pairCountIndex', 0);
      window.location.href = '../winner/winner.html'; 
    }
  });

if (!localStorage.getItem('team-red')) {
  localStorage.setItem('team-red', '0');
  localStorage.setItem('team-green', '0');
  localStorage.setItem('team-blue', '0');
  localStorage.setItem('team-yellow', '0');
  localStorage.setItem('currentTurn', 0); // 0 = Red Team, 1 = Green Team, etc.
}

let pairsCountIndex = Number(localStorage.getItem('pairsCountIndex'));

const pairs = [1, 2, 3, 4];
const duos = ['RED', 'GREEN', 'BLUE', 'YELLOW'];
const colors = ["#d42c15", "#7cbc1c", "#1565ac", "#f8cc3a"];

const currentTurn = localStorage.getItem('currentTurn');

const fundo = document.getElementById('rd-main');
fundo.style.backgroundColor = colors[currentTurn];

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

// rolar dado
const dice = document.querySelector(".dice"); // dice ibject
const cube = document.querySelector(".cube"); // dice body
const btn = document.querySelector(".role"); // button of rolling

let animationCount = 12;

document.onkeyup = function (e) {
  if (e.key === "Enter") btn.click();
}
btn.addEventListener('click', function () {
  gameStart();
});

function gamePreparation() {
  btn.setAttribute("disabled", "disabled");
}
function gameStart() {

  gamePreparation();

  // making random numbers in rotational directions
  let randDegX = Math.trunc(Math.random() * 4 + 1);
  let randDegY = Math.trunc(Math.random() * 4 + 1);
  let randDegZ = Math.trunc(Math.random() * 4 + 1);
  cube.style = `transform: rotateX(${animationCount * 90 + randDegX * 90}deg) rotateY(${animationCount * 90 + randDegY * 90}deg) rotateZ(${animationCount * 90 + randDegZ * 90}deg);`;

  // All Values predicted to get
  let rollingValues = [
    [
      [3, 6, 4, 5],
      [3, 6, 4, 5],
      [3, 6, 4, 5],
      [3, 6, 4, 5]
    ],
    [
      [6, 4, 5, 3],
      [1, 1, 1, 1],
      [5, 3, 6, 4],
      [2, 2, 2, 2]
    ],
    [
      [4, 5, 3, 6],
      [4, 5, 3, 6],
      [4, 5, 3, 6],
      [4, 5, 3, 6]
    ],
    [
      [5, 3, 6, 4],
      [2, 2, 2, 2],
      [6, 4, 5, 3],
      [1, 1, 1, 1]
    ],
  ];

  // Getting the real value
  let degX = ((randDegX * 90) / 90) - 1;
  let degY = ((randDegY * 90) / 90) - 1;
  let degZ = ((randDegZ * 90) / 90) - 1;
  let rollingResult = rollingValues[degX][degY][degZ];
  console.log(rollingResult);

  // increment the rolling for the next press
  animationCount += 12;

  localStorage.setItem('rolledValue', rollingResult);

  setTimeout(() => {
    window.location.href = '../card-page/card-page.html';
  }, 3000);
}