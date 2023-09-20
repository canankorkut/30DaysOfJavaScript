const API_KEY = '...'
const API_ID = '...'
const recipeDiv = document.querySelector(".recipe")
const searchButton = document.querySelector("#searchButton")

async function searchRecipe() {
    try {
        const searchInput = document.getElementById("searchInput").value
        const response = await fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=${API_ID}&app_key=${API_KEY}`)
 
        if (!response.ok) {
          throw new Error('API Hatası: İstek başarısız.')
        }
    
        const data = await response.json()
    
        const randomIndex = Math.floor(Math.random() * data.hits.length)
        const randomRecipe = data.hits[randomIndex].recipe

        recipeDiv.innerHTML = `
            <h3>${randomRecipe.label}</h3>
            <img src="${randomRecipe.image}" alt="image of food">
            <h4>Ingredients:</h4>
            <ul>
                ${randomRecipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        `
    } catch (error) {
        console.error('Api error:', error)
    }  
}
searchButton.addEventListener('click', searchRecipe)