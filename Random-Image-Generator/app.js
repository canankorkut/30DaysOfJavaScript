let randomImg = document.querySelector('.randomImg') // Random image display
let generateBtn = document.getElementById('generateBtn') // Generate button
let imgWidthInput = document.getElementById('imgWidth') // Width input
let imgHeightInput = document.getElementById('imgHeight') //Height input

// Generate button click event is added
generateBtn.addEventListener('click', generateImg)

// Image generate function
function generateImg() {
    // The width and height entered by the user are taken
    let width = imgWidthInput.value
    let height = imgHeightInput.value

    // A request is sent to "https://picsum.photos" with the required width and height
    fetch(`https://picsum.photos/${width}/${height}`)
    .then(response => {

        // If the response is not successful, an error is sent
        if(!response.ok) {
            throw new Error('Error!')
        }

        // Get the URL of the response
        return response.url
    })
    .then(imgURL => {
        // // The source of the image image is updated
        randomImg.src = imgURL
    })
    .catch(error => {
        // // In case of error, the error message is printed to the console
        console.error(error)
    })

    // //Makes the image image visible
    randomImg.style.display = 'block'
}
