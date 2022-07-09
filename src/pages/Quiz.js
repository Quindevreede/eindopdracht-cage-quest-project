import React from 'react';
import './Quiz.css';
import QuizComponent from "../components/QuizComponent";
import NavBarMain from "../components/NavBarMain";

function Quiz() {

        return (
            <>
                <NavBarMain />
                <section className="outer-content-container">
                    <div className="inner-content-container">
                        <h1>HOME</h1>
                        <QuizComponent />
                    </div>
                </section>
            </>
        );
    }

export default Quiz;
