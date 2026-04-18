import quizData from "../quiz.json";
import { useState } from "react";

import { Survey } from "./Survey";
import { Answers } from "./Answers";
import { Submit } from "./Submit";
import { Edit } from "./Edit";


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
                <div className="summary">
                    <div className="submitted-title">
                        <h1>Thank you for your answers!</h1>
                    </div>

                    <Answers
                        quizInfo={quizInfo}
                        gender={gender}
                        answered={answered}
                        comment={comment}
                    />

                    <Edit />

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
                />

                <Submit />
            </form>
        </div>
    );
};