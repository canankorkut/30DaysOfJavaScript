const resultDiv = document.getElementById('result')
const inputtedNumber = document.getElementById('inputtedNumber')
const guessBtn = document.getElementById('guessBtn')

// Generates a random number between 1-10
const targetNumber = Math.floor(Math.random() * 10) + 1

// Array holding predicted numbers
let guesses = []

// Variable that holds the number of guesses
let attempts = 0

function showResult() {
    // Gets the input value entered by the user
    let inputtedNumberValue = inputtedNumber.value

    // Adds inputs to the guesses array
    guesses.push(inputtedNumberValue)

    // Increases the number of guesses
    attempts++

    const lastGuess = guesses[guesses.length - 1]
    let resultText = ''

    if(lastGuess < targetNumber) {
        resultText = 'Enter larger number.'
    } else if(lastGuess > targetNumber) {
        resultText = 'Enter smaller number.'
    } else {
        resultText = `Congratulations! You guessed correctly on the ${attempts}. try.`
        inputtedNumberValue.disabled = true
        guessBtn.disabled = true 
    }

    // Adds guess results to HTML
    resultDiv.innerHTML = resultText
}

// When the button is clicked, it runs the show Result function.
guessBtn.addEventListener('click', showResult)