import { useState } from "react"
import IngredientsList from "./IngredientsList"
import Recipe from "./Recipe"
import { getRecipeFromOpenAi } from "../ai"

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState(false)

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient"); // name property in form
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const generatedRecipe = await getRecipeFromOpenAi(ingredients)
        setRecipe(generatedRecipe)
    }

    return (
        <main>
            <form className="add-ingredient-form"  action={addIngredient}>
                <input 
                    aria-label="Add ingredient" 
                    type="text"
                    placeholder="e.g. milk"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}