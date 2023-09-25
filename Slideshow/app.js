// Selects all slide elements and assigns them to variable
const slides = document.querySelectorAll('.slide-fade')
let currentSlide = 1 // Variable that holds the number of the currently displayed slide
const totalSlides = slides.length // Variable that holds the total number of slides

// Function to hide slides
function hideSlides() {
    slides.forEach((slide) => {
        slide.style.display = 'none'
    })
}

// Shows first slide
hideSlides()
slides[currentSlide-1].style.display = 'block'

// Creates custom slide indicator dots
const customIndicators = document.querySelector('.custom-indicators')
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div')
    indicator.classList.add('indicator')
    indicator.dataset.slideIndex = i + 1
    indicator.addEventListener('click', (event) => {
        const slideIndex = parseInt(event.target.dataset.slideIndex)
        changeSlide(slideIndex - currentSlide)
    })
    customIndicators.appendChild(indicator)
}

// Function to change slides
function changeSlide(n) {
    hideSlides()
    currentSlide += n
    if (currentSlide > totalSlides) {
        currentSlide = 1
    }
    if (currentSlide < 1) {
        currentSlide = totalSlides
    }
    slides[currentSlide - 1].style.display = 'block'
    updateIndicators()
    updateActiveIndicator()
}

// Function that allows updating the active indicator
function updateActiveIndicator() {
    activeIndicator = currentSlide - 1
    updateIndicators()
}

// Function that updates indicators
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator')
    indicators.forEach((indicator, index) => {
        if (index === currentSlide - 1) {
            indicator.classList.add('active')
        } else {
            indicator.classList.remove('active')
        }
    })
}

// Selects the first indicator
updateIndicators()