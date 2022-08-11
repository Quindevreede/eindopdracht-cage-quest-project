import React from 'react';
import './Quiz.css';
import QuizComponent from "../../components/quizcomponent/QuizComponent";
import main from "../../assets/main.jpg";

function Quiz() {

        return (
            <>
                <section className="outer-content-container">
                    <div className="inner-content-container">
                        <h1>QUIZ</h1>
                        <section className="image-container">
                            <img src={main} className="nic-main-four" alt="nicolas cage main"/>
                            <img src={main} className="nic-main-four" alt="nicolas cage main"/>
                            <img src={main} className="nic-main-four" alt="nicolas cage main"/>
                            <img src={main} className="nic-main-four" alt="nicolas cage main"/>
                        </section>
                        <QuizComponent />
                    </div>
                </section>
            </>
        );
    }

export default Quiz;
