let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector("#new-btn");
let resetGame = document.querySelector("#reset-btn");

// let smile = document.querySelector("#smile");
// smile.onclick = () => {
//   smile.classList.remove("bx-wink-smile");
//   smile.classList.add("bx-smile");
//   console.log("hello bacho");
// };

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// New Game

newGame.onclick = () => {
  msgContainer.classList.add("hide");
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

//  Reset Game

resetGame.onclick = () => {
  turnO = true;
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  msgContainer.classList.add("hide");
};

// Check Winner

let checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Congratulations  Winner is ", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
