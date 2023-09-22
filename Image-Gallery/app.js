const fileInput = document.getElementById('fileInput')
const imageGallery = document.getElementById('imageGallery')
const displayedImage = document.getElementById('displayedImage')
const displayedImageContent = document.getElementById('displayedImageContent')
const closeDisplayedImage = document.getElementById('closeDisplayedImage')

// Function used to specify a function to run when it occurs on a particular file input element
fileInput.addEventListener('change', function(e) {
    // Gets the first selected file
    const selectedFile = e.target.files[0]
    if(selectedFile) {
        const imageContainer = document.createElement('div')
        imageContainer.className = 'image-item'

        // Preview the image
        const imageElement = document.createElement('img')
        //It converts the URL of the selected image to enable the browser to access its content
        imageElement.src = URL.createObjectURL(selectedFile)

        // Adjusts the size of the image when uploading it
        imageElement.style.maxWidth = '100%'
        imageElement.style.height = 'auto' 

        // Adds the delete icon
        const deleteIcon = document.createElement('i')
        deleteIcon.className = 'fa-solid fa-trash'

        // Adds imageElement to imageContainer div
        imageContainer.appendChild(imageElement)

        // Adds deleteIcon to imageContainer div
        imageContainer.appendChild(deleteIcon)
        
        // Occurs when deleteIcon is clicked
        deleteIcon.addEventListener('click', function() {
            // Gets the linked item
            const imageItem = this.closest('.image-item')
            if (imageItem) {
                imageItem.remove()
            }
        });

        imageGallery.appendChild(imageContainer)

        // Works when clicking on the imageElement
        imageElement.addEventListener('click', function() {
            displayedImageContent.src = this.src
            displayedImage.style.display = 'flex'
        })         
    }
})

// Allows the displayed Image element to be closed when the icon is clicked
closeDisplayedImage.addEventListener('click', function() {
    displayedImage.style.display = 'none'
})
