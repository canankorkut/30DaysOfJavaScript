const generateBtn = document.getElementById('generateBtn')
const errorMessage = document.getElementById('error-message')
const inputElement = document.getElementById('input')

generateBtn.addEventListener('click', generateQRCode)

function generateQRCode() {
    // Receives user input
    const inputValue = inputElement.value

    // Gets the div that will display the QR code
    const qrCodeDiv = document.getElementById('qr-code')

    // If the entered value is empty, it shows an error message
    if(inputValue.trim() === "") {
        errorMessage.textContent = "Please enter a valid text or URL."
        errorMessage.style.color = "red"
        inputElement.style.borderColor = "red"
        return
    }

    // Clears the QR code
    qrCodeDiv.innerHTML = '' 

    // Generates the QR code using the QRCode.js library
    const qrcode = new QRCode(qrCodeDiv, {
        text: inputValue,
        width: 200,
        height: 200
    })
}