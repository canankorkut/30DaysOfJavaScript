const pageBody = document.querySelector('#page-body')
const colorChanger = document.querySelector('#color-changer')

// Defines the color changing function and takes a span element
function changeColor(span) {
    // Gets the color of the clicked span
    let color = span.getAttribute("value")

    // Sets the page background color to the color of the clicked span
    pageBody.style.backgroundColor = color

    // Create the color wheel and adjust its position
    const colorPicker = document.createElement('input')
    colorPicker.type = 'color'
    colorPicker.value = color
    colorPicker.style.position = 'absolute'
    colorPicker.style.left = span.offsetLeft + 'px'
    colorPicker.style.top = span.offsetTop + 'px'
    colorPicker.style.opacity = '0'

    // Adds an event listener that will fire when the value of the color wheel changes
    colorPicker.addEventListener('input', function() {
        const selectedColor = colorPicker.value
        
        // Sets the background of the clicked span to the selected color
        span.style.backgroundColor = selectedColor

        // Sets the page background to the selected color
        pageBody.style.backgroundColor = selectedColor
    })

    // Adds the color picker to the page
    pageBody.appendChild(colorPicker)

    // Added function to turn off color picker
    colorPicker.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            document.body.removeChild(colorPicker)
        }
    })

    // Focuses on the color picker
    colorPicker.focus()
}