import React, { useContext, useState } from 'react';
import "./QuizComponent.css";
import NavBarMain from "../components/NavBarMain";

function QuizComponent() {

    const questions = [
        {
            questionText: 'WHO IS YOUR FAVOURITE VAMPIRE?',
            answerOptions: [
                { answerText: 'DRACULA', isCorrect: false },
                { answerText: 'NOSFERATU', isCorrect: false },
                { answerText: 'BLADE', isCorrect: true },
                { answerText: 'IM A VAMPIRE!', isCorrect: true },
            ],
        },
        {
            questionText: 'WHAT IS YOUR FAVOURITE FOOD?',
            answerOptions: [
                { answerText: 'PEACHES', isCorrect: true },
                { answerText: 'COCKROACHES', isCorrect: true },
                { answerText: 'TRUFFLES', isCorrect: false },
                { answerText: 'PIZZA', isCorrect: false },
            ],
        },
        {
            questionText: 'WHO IS YOUR FAVOURITE DIRECTOR?',
            answerOptions: [
                { answerText: 'PANOS COSMATOS', isCorrect: true },
                { answerText: 'MICHAEL BAY', isCorrect: true },
                { answerText: 'THE COEN BROTHERS', isCorrect: false },
                { answerText: 'MARTIN SCORSESE', isCorrect: false },
            ],
        },
        {
            questionText: 'WHAT IS YOUR FAVOURITE COLOUR?',
            answerOptions: [
                { answerText: 'RED', isCorrect: false },
                { answerText: 'YELLOW', isCorrect: false },
                { answerText: 'BLUE', isCorrect: true },
                { answerText: 'ULTRA-VIOLET', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleScoreOnPoints = (showScore) => {
        if (score === 0) {
            return "ZERO";
        } else if (score === 1) {
            return "ONE";
        } else if (score === 2) {
            return "TWO";
        } else if (score === 3) {
            return "THREE";
        } else {
            return "FOUR";
        }
    }

    const handleResetButton = (score) => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
    }

    return (
        <>
            <NavBarMain/>
            <section className="outer-content-container start-container">
                <div className="inner-content-container start-container">
                    <div className='app'>
                        {showScore ? (
                            <section>
                                <div className='score-section'>
                                    You scored {score} out of {questions.length}
                                    {handleScoreOnPoints({score})}
                                    <div>
                                        <button onClick={() => handleResetButton(score)}>Play Again!</button>
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <>
                                <div className='question-section'>
                                    <div className='question-count'>
                                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                                    </div>
                                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className='answer-section'>
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default QuizComponent;
