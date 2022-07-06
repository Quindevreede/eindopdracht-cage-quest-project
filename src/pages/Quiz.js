import React from 'react';
import './Quiz.css';
import QuizComponent from "../components/QuizComponent";

const apiKey = 'a0aac18fb528d2c26cc33ed4a52c554a';

function Quiz() {

        return (
            <>
                <section className="outer-content-container start-container">
                    <div className="inner-content-container start-container">
                        <QuizComponent />
                    </div>
                </section>
            </>
        );
    }

export default Quiz;
