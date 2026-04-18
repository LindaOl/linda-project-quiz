import { Comments } from "./Comments";
import { Dropdown } from "./Dropdown";

export const Survey = ({
    quizInfo,
    gender,
    setGender,
    answered,
    setAnswered,
    comment,
    setComment,
    otherAnswer,
    setOtherAnswer,
    showErrors
}) => {

    // If user selects "Never" in question 1,
    // we stop showing the rest of the survey
    const stopEarly = answered[1] === "Never";

    // Decide which questions should be visible:
    // - Only question 1 if "Never"
    // - Otherwise show all questions
    const visibleQuestions = stopEarly
        ? quizInfo.filter((item) => item.number === 1)
        : quizInfo;

    return (
        <section className="quiz">

            {/* Dropdown for selecting gender */}
            <Dropdown gender={gender} setGender={setGender} />

            {/* Loop through visible questions and render them */}
            {visibleQuestions.map((item) => (
                <article key={item.number} className="question-wrapper">

                    <h2>Question {item.number}</h2>
                    <h3>{item.question}</h3>

                    {/* Render all answer options as radio buttons */}
                    {item.answers.map((answer, index) => (
                        <div className="alternativeAnswer" key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${item.number}`}
                                    value={answer}

                                    // Update state when an answer is selected
                                    onChange={() => {
                                        setAnswered((prev) => {
                                            const updated = {
                                                ...prev,
                                                [item.number]: answer,
                                            };

                                            // If user selects "Never" in question 1,
                                            // clear answers for the remaining questions
                                            if (item.number === 1 && answer === "Never") {
                                                delete updated[2];
                                                delete updated[3];
                                                delete updated[4];
                                            }

                                            return updated;
                                        });

                                        // Also reset related inputs when stopping early
                                        if (item.number === 1 && answer === "Never") {
                                            setOtherAnswer("");
                                            setComment("");
                                        }
                                    }}

                                    // Keep radio button checked if selected
                                    checked={answered[item.number] === answer}
                                />
                                {answer}
                            </label>
                        </div>
                    ))}

                    {/* Show validation error if user tried to submit without answering */}
                    {showErrors && !answered[item.number] && (
                        <span className="error">
                            Please select an option.
                        </span>
                    )}

                    {/* Show extra input field if user selects "Other" in question 3 */}
                    {item.number === 3 && answered[3] === "Other" && (
                        <div className="other-answer-field">
                            <input
                                type="text"
                                placeholder="Please specify"
                                value={otherAnswer}
                                onChange={(event) => setOtherAnswer(event.target.value)}
                            />
                        </div>
                    )}
                </article>
            ))}

            {/* Only show comment field if survey is not stopped early */}
            {!stopEarly && (
                <article>
                    <Comments
                        comment={comment}
                        setComment={setComment}
                    />
                </article>
            )}
        </section>
    );
};