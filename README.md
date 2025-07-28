Adit's Recipe Generator using OpenAI API and React:

To run this project with your own OpenAI API key during development:

1. Create a .env file in the root of the project

2. Enter your OpenAI API Key: VITE_OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

3. Restart dev server after adding or updating your .env: npm run dev

TODO: Secure Backend for API Key
This project currently uses the OpenAI API key directly in the frontend for simplicity.

In production, a secure Node.js backend (or serverless function) should be used to:

Store your OpenAI API key privately

Act as a proxy between the frontend and OpenAI

Prevent exposing secrets to the client

✅ A backend version is planned for future updates.