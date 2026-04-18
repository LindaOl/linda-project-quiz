import { Comments } from "./Comments";
import { Dropdown } from "./Dropdown";

export const Survey = ({
    quizInfo,
    gender,
    setGender,
    answered,
    setAnswered,
    comment,
    setComment
}) => {

    return (
        <section className="quiz">

            <Dropdown gender={gender} setGender={setGender} />

            {quizInfo.map((item) => (
                <article key={item.number} className="question-wrapper">

                    <h2>
                        Question {item.number}
                    </h2>

                    <h3>
                        {item.question}
                    </h3>

                    {item.answers.map((answer, index) => (
                        <div className="alternativeAnswer" key={index}>
                            <label>
                                <input
                                    required
                                    type="radio"
                                    name={`question-${item.number}`}
                                    value={answer}
                                    onChange={() =>
                                        setAnswered((prev) => ({
                                            ...prev,
                                            [item.number]: answer,
                                        }))
                                    }
                                    checked={answered[item.number] === answer}
                                />
                                {answer}
                            </label>
                        </div>
                    ))}
                </article>
            ))}

            <article>
                <Comments comment={comment} setComment={setComment} />
            </article>
        </section>
    );
};