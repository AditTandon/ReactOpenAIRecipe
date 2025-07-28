import ReactMarkdown from "react-markdown"

export default function Recipe(props) {
  return (
    <section className="recipe-container" aria-live="polite">
        <h2>OpenAI Recommends:</h2>
        <ReactMarkdown>
            {props.recipe}
        </ReactMarkdown>
    </section>
  );
}
