import React from 'react';
import './Quiz.css';
import QuizComponent from "../components/QuizComponent";
import NavBar from "../components/NavBar";
import main from "../assets/main.jpg";

function Quiz() {

        return (
            <>
                <NavBar />
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
