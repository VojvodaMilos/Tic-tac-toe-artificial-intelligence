let game = document.querySelector(".game");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let btn = document.getElementById("btn");
let playerX = true;
let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

btn.addEventListener("click", () => {
  matrix[0][0] = 0;
  matrix[0][1] = 0;
  matrix[0][2] = 0;
  matrix[1][0] = 0;
  matrix[1][1] = 0;
  matrix[1][2] = 0;
  matrix[2][0] = 0;
  matrix[2][1] = 0;
  matrix[2][2] = 0;
  playerX = true;
  render();
  text1.innerText = "";
});

function render() {
  game.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    game.appendChild(row);
    for (let j = 0; j < 3; j++) {
      let field = document.createElement("div");
      field.classList.add("row");
      row.appendChild(field);
      let text = "";
      if (matrix[i][j] === 1) {
        text = "X";
      }
      if (matrix[i][j] === 2) text = "O";
      field.innerText = text;
      if (playerX === true) {
        field.addEventListener("click", () => valueEntries(i, j));
      } else {
        field.addEventListener("click", () => stop());
      }
    }
  }
}
function end() {
  playerX = false;
}
function valueEntries(i, j) {
  if (matrix[i][j] === 0) {
    matrix[i][j] = 1;
    console.log(matrix[i][j]);
  }
  playerX = false;
  setTimeout(valueMatrix, 500);

  render();
}
function stop() {}

function valueMatrix() {
  playerX = true;
  //kombinacija 1
  if (
    matrix[0][0] === 1 ||
    matrix[0][2] === 1 ||
    matrix[2][0] === 1 ||
    matrix[2][2] === 1 ||
    matrix[0][1] === 1 ||
    matrix[1][0] === 1 ||
    matrix[1][2] === 1 ||
    matrix[2][1] === 1
  ) {
    if (matrix[1][1] === 0) matrix[1][1] = 2;
  }
  if (matrix[1][1] === 1) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 0 &&
      matrix[0][1] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }

  if (
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  //kombinacija 2
  if (
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  //kombinacija 3
  if (
    matrix[0][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  //kombinacija 4
  if (
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0 &&
      matrix[0][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  //kombinacija 5
  if (
    matrix[0][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[1][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // kombinacija 6
  if (
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][0] === 0 &&
    matrix[0][0] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // kombinacija 7
  if (
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  //kombinacija 8
  if (
    matrix[2][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  //kombinacija 9
  if (
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  //kombinacija 10
  if (
    matrix[0][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[0][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[0][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // kombinacija 11
  if (
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // kombinacija 12
  if (
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // kombinacija 13
  if (
    matrix[0][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 2 &&
    matrix[1][0] === 2 &&
    matrix[1][1] === 2 &&
    matrix[2][0] === 2
  ) {
    if (matrix[1][2] === 1) matrix[1][2] = 0;
  }
  // kombinacija 14
  if (
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // kombinacija 15
  if (
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // kombinacija 16
  if (
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  // kombinacija 17
  if (
    matrix[2][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[0][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[0][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  // kombinacija 18
  if (
    matrix[2][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // kombinacija 19
  if (
    matrix[2][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 0 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // kombinacija 20
  if (
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // kombinacija 21
  if (
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  // kombinacija 22
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    // matrix[2][1] === 1 &&
    matrix[0][0] === 2 &&
    matrix[0][1] === 2 &&
    matrix[0][2] === 2 &&
    matrix[1][1] === 2
  ) {
    if (matrix[2][1] === 1) matrix[2][1] = 0;
  }
  // kombinacija 23
  if (
    matrix[1][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  // kombinacija 24
  if (
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  // kombinacija 25
  if (
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  // kombinacija 26
  if (
    matrix[1][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // kombinacija 27
  if (
    matrix[0][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }

  if (
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // kombinacija 28
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[0][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  // kombinacija 29
  if (
    matrix[1][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[0][0] === 2 &&
    matrix[2][1] === 2 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // kombinacija 30
  if (
    matrix[1][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 2 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  // kombinacija 31
  if (
    matrix[1][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // kombinacija 32
  if (
    matrix[1][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // kombinacija 33
  if (
    matrix[1][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // kombinacija 34
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][2] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }

  // kombinacija 35
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  // kombinacija 36
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  // kombinacija 37
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  // kombinacija 37
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  //kombinacija 38
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // kombinacija 39
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  // kombinacija 39
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  //Game over
  // if (
  //   matrix[0][0] !== 0 &&
  //   matrix[0][1] !== 0 &&
  //   matrix[0][2] !== 0 &&
  //   matrix[1][0] !== 0 &&
  //   matrix[1][1] !== 0 &&
  //   matrix[1][2] !== 0 &&
  //   matrix[2][0] !== 0 &&
  //   matrix[2][1] !== 0 &&
  //   matrix[2][2] !== 0
  // ) {
  //   text2.innerText = "GAME OVER";
  // }
  if (
    (matrix[0][0] === 1 && matrix[0][1] === 1 && matrix[0][2] === 1) ||
    (matrix[1][0] === 1 && matrix[1][1] === 1 && matrix[1][2] === 1) ||
    (matrix[2][0] === 1 && matrix[2][1] === 1 && matrix[2][2] === 1) ||
    (matrix[0][0] === 1 && matrix[1][0] === 1 && matrix[2][0] === 1) ||
    (matrix[0][1] === 1 && matrix[1][1] === 1 && matrix[2][1] === 1) ||
    (matrix[0][2] === 1 && matrix[1][2] === 1 && matrix[2][2] === 1) ||
    (matrix[0][0] === 1 && matrix[1][1] === 1 && matrix[2][2] === 1) ||
    (matrix[2][0] === 1 && matrix[1][1] === 1 && matrix[0][2] === 1)
  ) {
    text1.innerText = "YOU WON!!!";
  }
  if (
    (matrix[0][0] === 2 && matrix[0][1] === 2 && matrix[0][2] === 2) ||
    (matrix[1][0] === 2 && matrix[1][1] === 2 && matrix[1][2] === 2) ||
    (matrix[2][0] === 2 && matrix[2][1] === 2 && matrix[2][2] === 2) ||
    (matrix[0][0] === 2 && matrix[1][0] === 2 && matrix[2][0] === 2) ||
    (matrix[0][1] === 2 && matrix[1][1] === 2 && matrix[2][1] === 2) ||
    (matrix[0][2] === 2 && matrix[1][2] === 2 && matrix[2][2] === 2) ||
    (matrix[0][0] === 2 && matrix[1][1] === 2 && matrix[2][2] === 2) ||
    (matrix[2][0] === 2 && matrix[1][1] === 2 && matrix[0][2] === 2)
  ) {
    text1.innerText = "YOU LOST!!!";
    end();
  }
  render();
}
render();
