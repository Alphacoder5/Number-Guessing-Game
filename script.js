const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
            disableInputAndButton();
        } else {
            message.textContent = userGuess > randomNumber ? 'Too high! Try again.' : 'Too low! Try again.';
        }
    }
}

function disableInputAndButton() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
