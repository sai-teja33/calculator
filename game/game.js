let userscore = 0;
let compscore = 0;
const ans = document.querySelectorAll(".a");
const answer = document.querySelector("#msg");
let userscorePara = document.querySelector("#user-score");
let compscorePara = document.querySelector("#comp-score");
ans.forEach((a) => {
  a.addEventListener("click", () => {
    const userChoice = a.getAttribute("id");

    playGame(userChoice);
  });
});
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const winnerr = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userscore++;
    userscorePara.innerText = userscore;
    answer.innerText = `your ${userChoice} beats ${compChoice}`;
    answer.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorePara.innerText = compscore;
    answer.innerText = `${compChoice} beats your ${userChoice}`;
    answer.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("user choice is: ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice is: ", compChoice);
  if (userChoice === compChoice) {
    console.log("draw");
    answer.innerText = "match is draw!Play Again";
    answer.style.backgroundColor = "yellow";
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    winnerr(userWin, userChoice, compChoice);
  }
};
