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

// const rollDiceButton = document.getElementById('roll-dice-btn');
// rollDiceButton.addEventListener('click', () => {
    
// });








const dice = document.querySelector(".dice"); // dice ibject
const cube = document.querySelector(".cube"); // dice body
const btn = document.querySelector(".role"); // button of rolling

let animationCount = 12;


document.onkeyup = function(e) {
  if (e.key === "Enter") btn.click();
}
btn.addEventListener('click', function() {
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

}