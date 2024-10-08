const guessedNumberInput = document.getElementById("guessedNumber");
const messageElement = document.getElementById("message");
const winMessageElement = document.getElementById("win_message");

const THE_NUMBER = Math.floor(Math.random() * 100);
let tries = 0;

// Arrays of responses
const tooFarResponses = [
    "You're way off! Try something much closer.",
    "That guess is way out there. Adjust your guess significantly.",
    "Way too far! You're not close at all."
];

const farResponses = [
    "You're still far off, but getting warmer.",
    "Not quite there. You’re still a bit far.",
    "You're far from the target. Keep guessing!"
];

const closeResponses = [
    "You're getting close! Almost there.",
    "Nice try! You’re close, but not quite.",
    "You're close to the number. Just a little more!"
];

const tooCloseResponses = [
    "You're really close! Just a tiny adjustment needed.",
    "So close! You almost have it!",
    "You're too close to stop now. Just a slight change!"
];

function getRandomResponse(responseCategory) {
    return responseCategory[Math.floor(Math.random() * responseCategory.length)];
}



function tryGuess() {
    if (winMessageElement.style.display == 'block') return;
    const num = Number(guessedNumberInput.value);
    if (isNaN(num) || num > 100 || num < 0) return displayMessage("Your number must be between 0 and 100!", 1);
    tries++;
    console.log(num, THE_NUMBER);
    const diff = Math.abs(THE_NUMBER - num)

    if (diff > 50) return displayMessage(getRandomResponse(tooFarResponses), 1);
    if (diff <= 50 && diff > 20) return displayMessage(getRandomResponse(farResponses), 2);
    if (diff <= 20 && diff > 3) return displayMessage(getRandomResponse(closeResponses), 3);
    if (diff <= 3 && diff > 0) return displayMessage(getRandomResponse(tooCloseResponses), 4);
    if (diff === 0) {
        displayMessage("YOU GOT IT!", 4);
        winMessageElement.style.display = 'block';
        winMessageElement.innerHTML = `The Number: <span>${THE_NUMBER}</span><br>Tries: <span>${tries}</span>`;
    }

}

function displayMessage(message, type) {
    if (!message) messageElement.style.display = 'none';
    messageElement.style.display = 'block';
    messageElement.innerText = message;
    if (type && type === 1) {
        messageElement.style.color = "red";
    } else if (type && type === 2) {
        messageElement.style.color = "pink";
    } else if (type && type === 3) {
        messageElement.style.color = "green";
    } else if (type && type === 4) {
        messageElement.style.color = "lime";
    } else {
        messageElement.style.color = "white";
    }
}