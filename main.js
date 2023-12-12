// let resultWinner = document.getElementById("result-winner");
// let select = document.querySelector("select");
// let option = document.querySelectorAll("option");
// let btn = document.querySelector("button");
// let images = document.querySelectorAll(".img");
// let myImg = document.querySelectorAll(".myImg");
// let phar = document.querySelector("p");
// let winnetCount = 0;
// let loserCount = 0;
// let randomImgByKomp = Math.floor(Math.random() * 3);
// btn.addEventListener("click", submitBtn);
// function submitBtn() {
//   if (select.selectedOptions[0].value == "Paper") {
//     images[0].classList.add("visible");
//     images[1].classList.remove("visible");
//     images[2].classList.remove("visible");
//   } else if (select.selectedOptions[0].value == "Rock") {
//     images[1].classList.add("visible");
//     images[0].classList.remove("visible");
//     images[2].classList.remove("visible");
//   } else if (select.selectedOptions[0].value == "Scissors") {
//     images[2].classList.add("visible");
//     images[0].classList.remove("visible");
//     images[1].classList.remove("visible");
//   } else {
//     console.log("False");
//   }

//   // Break

//   if (myImg[randomImgByKomp]) {
//     myImg[randomImgByKomp].classList.add("visible");
//     setTimeout(function () {
//       location.reload();
//     }, 1000);
//   } else if (myImg[randomImgByKomp]) {
//     myImg[randomImgByKomp].classList.add("visible");
//     setTimeout(function () {
//       location.reload();
//     }, 1000);
//   } else if (myImg[randomImgByKomp]) {
//     myImg[randomImgByKomp].classList.add("visible");
//     setTimeout(function () {
//       location.reload();
//     }, 1000);
//   } else {
//     console.log("False");
//   }
//   phar.style.top = "47%";
//   phar.style.left = "48%";

//   //   Break

//   if (select.selectedOptions[0].id == myImg[randomImgByKomp].id) {
//     console.log("Nichya");
//   } else if (
//     select.selectedOptions[0].id == "paper" &&
//     myImg[randomImgByKomp].id == "rock"
//   ) {
//     winnetCount++;
//   } else if (
//     select.selectedOptions[0].id == "rock" &&
//     myImg[randomImgByKomp].id == "scissors"
//   ) {
//     winnetCount++;
//   } else if (
//     select.selectedOptions[0].id == "rock" &&
//     myImg[randomImgByKomp].id == "scissors"
//   ) {
//     winnetCount++;
//   } else if (
//     select.selectedOptions[0].id == "scissors" &&
//     myImg[randomImgByKomp].id == "paper"
//   ) {
//     winnetCount++;
//   } else if (
//     select.selectedOptions[0].id == "scissors" &&
//     myImg[randomImgByKomp].id == "rock"
//   ) {
//     loserCount++;
//   } else if (
//     select.selectedOptions[0].id == "paper" &&
//     myImg[randomImgByKomp].id == "scissors"
//   ) {
//     loserCount++;
//   } else if (
//     select.selectedOptions[0].id == "rock" &&
//     myImg[randomImgByKomp].id == "paper"
//   ) {
//     loserCount++;
//   } else {
//     console.log("False");
//   }
//   console.log(winnetCount);
//   console.log(loserCount);
// }

let select = document.querySelector("select");
let btn = document.querySelector("button");
let images = document.querySelectorAll(".img");
let myImg = document.querySelectorAll(".myImg");
let phar = document.querySelector("p");
let phah2 = document.querySelector(".phar2");
let winnerCount = 0;
let loserCount = 0;

btn.addEventListener("click", submitBtn);

function submitBtn() {
  let userChoice = select.value;
  let computerChoice = Math.floor(Math.random() * 3);

  displayUserChoice(userChoice);
  displayComputerChoice(computerChoice);

  let result = determineWinner(userChoice, computerChoice);
  updateResult(result);
}

function displayUserChoice(choice) {
  images.forEach((img) => img.classList.remove("visible"));
  images[choice === "Rock" ? 1 : choice === "Paper" ? 0 : 2].classList.add(
    "visible"
  );
}

function displayComputerChoice(choice) {
  myImg.forEach((img) => img.classList.remove("visible"));
  myImg[choice].classList.add("visible");
}

function determineWinner(user, computer) {
  if (
    (user === "Rock" && computer === 2) ||
    (user === "Paper" && computer === 0) ||
    (user === "Scissors" && computer === 1)
  ) {
    winnerCount++;
    return "You win!";
  } else if (
    (user === "Rock" && computer === 1) ||
    (user === "Paper" && computer === 2) ||
    (user === "Scissors" && computer === 0)
  ) {
    loserCount++;
    return "You lose!";
  } else {
    return "It's a tie!";
  }
}

function updateResult(result) {
  phah2.innerText =
    result + " Total Wins: " + winnerCount + " Total Losses: " + loserCount;
}
