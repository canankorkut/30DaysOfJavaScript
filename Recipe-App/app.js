const API_KEY = '...'
const API_ID = '...'
const recipeDiv = document.querySelector(".recipe")
const searchButton = document.querySelector("#searchButton")

// Defines the function to perform a search query
async function searchRecipe() {
    try {
        // Food name entered by the user
        const searchInput = document.getElementById("searchInput").value

        // Sends a request to retrieve recipes from the API
        const response = await fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=${API_ID}&app_key=${API_KEY}`)
 
        if (!response.ok) {
          throw new Error('API Error: Request failed.')
        }
    
        const data = await response.json()

        // Processes recipes using data from the API
        const randomIndex = Math.floor(Math.random() * data.hits.length)
        const randomRecipe = data.hits[randomIndex].recipe

        // Adds the recipe results to the recipe div
        recipeDiv.innerHTML = `
            <h3>${randomRecipe.label}</h3>
            <img src="${randomRecipe.image}" alt="image of food">
            <h4>Ingredients:</h4>
            <ul>
                ${randomRecipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        `
    } catch (error) {
        console.error('API Error:', error)
    }  
}
// Starts the search process when the search button is clicked
searchButton.addEventListener('click', searchRecipe)
