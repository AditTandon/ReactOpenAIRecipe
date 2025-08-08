import { useState } from "react"
import IngredientsList from "./IngredientsList"
import DietaryRestriction from "./DietaryRestriction"
import Recipe from "./Recipe"
import { getRecipeFromOpenAi } from "../ai"

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState(false)
    const [checkedDietaryRestrictions, setCheckedDietaryRestrictions] = useState([])

    const dietaryRestrictions = ["gluten-free", "dairy-free", "vegan", "vegetarian", "keto", "paleo", "nut-free", "low-carb", "low-fat", "high-protein", "halal", "kosher", "shellfish-free"]

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient"); // name property in form
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function handleCheckbox(event) {
        if (event.target.checked) {
            setCheckedDietaryRestrictions(prev => [...prev, event.target.value])
        }
        else {
            setCheckedDietaryRestrictions(prev => prev.filter(r => r !== event.target.value))
        }
    }

    console.log(checkedDietaryRestrictions)

    async function getRecipe() {
        const generatedRecipe = await getRecipeFromOpenAi(ingredients, checkedDietaryRestrictions)
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
                    required
                />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            {ingredients.length > 0 && <DietaryRestriction dietaryRestrictions={dietaryRestrictions} handleCheckbox={handleCheckbox}/>}
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}