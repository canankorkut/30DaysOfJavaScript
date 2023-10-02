let password = document.getElementById('password')
let copyIcon = document.getElementById('copyIcon')
let passwordLength = document.getElementById('passwordLength')
let includeSymbol = document.getElementById('includeSymbol')
let includeNumber = document.getElementById('includeNumber')
let includeLowerCase = document.getElementById('includeLowerCase')
let includeUpperCase = document.getElementById('includeUpperCase')
let btn = document.querySelector('.btn')

// Listen for the create password button click event
btn.addEventListener('click', generatePassword)

// generatePassword function that performs password generation
function generatePassword() {
    // Identifies strings of symbols, numbers and letters
    const symbols = '!@#$%^&*()_-+=<>?'
    const numbers = '0123456789'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let validChars = ''

    // Combines valid characters based on selected options
    if(includeSymbol.checked) {
        validChars += symbols
    }

    if(includeNumber.checked) {
        validChars += numbers
    }

    if(includeLowerCase.checked) {
        validChars += lowercase
    }

    if(includeUpperCase.checked) {
        validChars += uppercase
    }

    // Creates new password
    let newPassword = ''
    const length = parseInt(passwordLength.value)

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length)
        newPassword += validChars.charAt(randomIndex)
    }

    // Places the generated password in the password input box
    password.value = newPassword

}

// copyPassword function that copies the password
copyIcon.addEventListener('click', copyPassword)

function copyPassword() {
    // Chooses password
    password.select()
    
    try {
        // Copy process
        document.execCommand('copy')
        alert('Password copied.')
    } catch (err) {
        // Error trapping
        alert('Copy failed.')
    }
}



