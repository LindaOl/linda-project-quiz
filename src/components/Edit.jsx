export const Edit = ({ setIsSubmitted }) => {
    return (
        <article className="button-wrapper">
            <button type="button" onClick={() => setIsSubmitted(false)}>
                Edit answers
            </button>
        </article>
    );
};