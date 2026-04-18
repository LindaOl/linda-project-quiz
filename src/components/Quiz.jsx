import quizData from "../quiz.json";
import { useState } from "react";

import { Submit } from "./Submit";
import { Comments } from "./Comments";
import { Dropdown } from "./Dropdown";


export const Quiz = () => {
    const quizInfo = quizData.quiz;
    const [gender, setGender] = useState("");
    const [answered, setAnswered] = useState({});
    const [comment, setComment] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);


    {/*CONSOLE LOG, REMOVE ON DEPLOYMENT*/ }
    console.log("Current state:", answered);
    console.log("Current comment:", comment);

    {/*Handles the prevention of the  default submit*/ }
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        console.log("Submitted answers:", answered);
        console.log("Gender:", gender);

    };

    /*If the form has been submitted, show only a summary page*/
    if (isSubmitted) {
        return (
            <section className="summary-box">

                <h1>Thank you for your answers!</h1>

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

                <button onClick={() => setIsSubmitted(false)}>Edit answers</button>


            </section>
        );

        /* ELSE show the survey*/
    }

    return (
        <div className="survey">
            <form className="quiz-wrapper" onSubmit={handleSubmit}>
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

                <Submit />
            </form>
        </div>
    );
};