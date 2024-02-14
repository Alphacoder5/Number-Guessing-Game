let randomNumber;
let attempts = 0;

function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('message').textContent = '';
}

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
            setTimeout(startNewGame, 2000); // Reset the game after 2 seconds
        } else {
            message.textContent = userGuess > randomNumber ? 'Too high! Try again.' : 'Too low! Try again.';
            guessInput.value = ''; // Clear the input for the new guess
        }
    }
}

function disableInputAndButton() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
}

// Start a new game when the page loads
window.onload = startNewGame;
