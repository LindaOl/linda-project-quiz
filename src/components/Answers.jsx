export const Answers = ({ quizInfo, gender, answered, comment }) => {

    return (
        <section className="summary-wrapper">

            <article>
                <h2>Gender</h2>
                <p>{gender || "No selection"}</p>
            </article>

            {quizInfo.map((item) => (
                <article key={item.number}>
                    <h2>Question {item.number}</h2>
                    <p>{item.question}</p>
                    <p>Your answer: {answered[item.number] || "No answer given"}</p>
                </article>
            ))}

            <article>
                <h2>Comments</h2>
                <p>{comment ? comment : "No comment submitted."}</p>
            </article>

        </section>
    );
};