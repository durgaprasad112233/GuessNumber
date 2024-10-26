let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber)

function checkGuess() {
    let guessNumber = parseInt(userInput.value);
    if (guessNumber > randomNumber) {
        gameResult.textContent = "Too high! try again";
        gameResult.style.backgroundColor = "red";
    } else if (guessNumber < randomNumber) {
        gameResult.textContent = "Too low ! try again";
        gameResult.style.backgroundColor = "blue";
    } else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congratulations !! you are right";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "provide value";
        gameResult.style.backgroundColor = "black";
    }


}