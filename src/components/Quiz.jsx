import quizData from "../quiz.json";
import { useState } from "react";

import { Survey } from "./Survey";
import { Answers } from "./Answers";
import { Submit } from "./Submit";
import { Edit } from "./Edit";


export const Quiz = () => {
    const quizInfo = quizData.quiz;

    /*useState*/
    const [gender, setGender] = useState("");
    const [answered, setAnswered] = useState({});
    const [comment, setComment] = useState("");
    const [otherAnswer, setOtherAnswer] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showErrors, setShowErrors] = useState(false);


    /*Handles the prevention of the default submit, set State to setIsSubmitted. If no answer, show an error msg*/
    const handleSubmit = (event) => {
        event.preventDefault();

        const stopEarly = answered[1] === "Never";

        const questionsToValidate = stopEarly
            ? quizInfo.filter((item) => item.number === 1)
            : quizInfo;

        const allAnswered = questionsToValidate.every(
            (item) => answered[item.number]
        );

        if (!allAnswered) {
            setShowErrors(true);
            return;
        }

        setShowErrors(false);
        setIsSubmitted(true);
    };


    /*If the form has been submitted, show only a summary page*/
    if (isSubmitted) {
        return (
            <section className="summary-box">
                <div className="summary">
                    <div className="submitted-title">
                        <h1>Thank you for your answers!</h1>
                    </div>

                    <Answers
                        quizInfo={quizInfo}
                        gender={gender}
                        answered={answered}
                        comment={comment}
                        otherAnswer={otherAnswer}
                    />

                    <Edit setIsSubmitted={setIsSubmitted} />

                </div>
            </section>
        );

        /* ELSE show the survey*/
    }

    return (
        <div className="survey">
            <form className="quiz-wrapper" onSubmit={handleSubmit}>
                <Survey
                    quizInfo={quizInfo}
                    gender={gender}
                    setGender={setGender}
                    answered={answered}
                    setAnswered={setAnswered}
                    comment={comment}
                    setComment={setComment}
                    otherAnswer={otherAnswer}
                    setOtherAnswer={setOtherAnswer}
                    isSubmitted={isSubmitted}
                    showErrors={showErrors}
                />

                <Submit />
            </form>
        </div>
    );
};