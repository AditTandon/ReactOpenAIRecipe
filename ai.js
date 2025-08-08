import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

export async function getRecipeFromOpenAi(ingredientsList, checkedDietaryRestrictions) {
    const ingredientsString = ingredientsList.join(", ");
    const checkedDietaryRestrictionsString = checkedDietaryRestrictions.length > 0 ? ` The recipe should also be ${checkedDietaryRestrictions.join(", ")}.` : "";
    const message = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!${checkedDietaryRestrictionsString}` },
        ],
        max_tokens: 1024
    })

    return message.choices[0].message.content;
}