import React,{ useContext,useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const apiKey = 'a0aac18fb528d2c26cc33ed4a52c554a';

function QuizComponent () {
    const [ movies,setMovies ] = useState ( [ 774152 ] );
    const [ endpoint,setEndpoint ] = useState ( `https://api.themoviedb.org/3/movie/${ movies }?api_key=${ apiKey }&language=en-US` );
    const [ loading,toggleLoading ] = useState ( false );
    const [ error,setError ] = useState ( false );

    useEffect ( () => {
        const controller = new AbortController ();

        async function fetchData () {
            toggleLoading ( true );
            setError ( false );

            try {
                const { data } = await axios.get ( endpoint,{
                    signal: controller.signal,
                } );
                setMovies ( data );
                console.log ( data );
            } catch ( e ) {
                console.error ( e );
                setError ( true );
            }

            toggleLoading ( false );
        }

        fetchData ();

        return function cleanup () {
            console.log ( 'We gaan eraan...' );
            controller.abort ();
        }
    },[ endpoint ] );

    const questions = [
        {
            questionText: 'WHO IS YOUR FAVOURITE VAMPIRE?',
            answerOptions: [
                { answerText: 'DRACULA',isCorrect: false },
                { answerText: 'NOSFERATU',isCorrect: false },
                { answerText: 'BLADE',isCorrect: true },
                { answerText: 'IM A VAMPIRE!',isCorrect: true },
            ],
        },
        {
            questionText: 'WHAT IS YOUR FAVOURITE FOOD?',
            answerOptions: [
                { answerText: 'PEACHES',isCorrect: true },
                { answerText: 'COCKROACHES',isCorrect: true },
                { answerText: 'TRUFFLES',isCorrect: false },
                { answerText: 'PIZZA',isCorrect: false },
            ],
        },
        {
            questionText: 'WHO IS YOUR FAVOURITE DIRECTOR?',
            answerOptions: [
                { answerText: 'PANOS COSMATOS',isCorrect: true },
                { answerText: 'MICHAEL BAY',isCorrect: true },
                { answerText: 'THE COEN BROTHERS',isCorrect: false },
                { answerText: 'MARTIN SCORSESE',isCorrect: false },
            ],
        },
        {
            questionText: 'WHAT IS YOUR FAVOURITE COLOUR?',
            answerOptions: [
                { answerText: 'RED',isCorrect: true },
                { answerText: 'YELLOW',isCorrect: false },
                { answerText: 'BLUE',isCorrect: true },
                { answerText: 'ULTRA-VIOLET',isCorrect: true },
            ],
        },
    ];

    const [ currentQuestion,setCurrentQuestion ] = useState ( 0 );
    const [ showScore,setShowScore ] = useState ( false );
    const [ score,setScore ] = useState ( 0 );

    const handleAnswerOptionClick = ( isCorrect ) => {
        if ( isCorrect ) {
            setScore ( score + 1 );
        }

        const nextQuestion = currentQuestion + 1;
        if ( nextQuestion < questions.length ) {
            setCurrentQuestion ( nextQuestion );
        } else {
            setShowScore ( true );
        }
    };

    const handleScoreOnPoints = ( showScore ) => {
        if ( score === 0 ) {
            return <button className="quiz-button"
                           onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/451?api_key=${ apiKey }&language=en-US` ) }>CLICK
                HERE FOR RECOMMENDATION
            </button>;
        } else if ( score === 1 ) {
            return <button className="quiz-button"
                           onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/2757?api_key=${ apiKey }&language=en-US` ) }>CLICK
                HERE FOR RECOMMENDATION
            </button>;
        } else if ( score === 2 ) {
            return <button className="quiz-button"
                           onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/23483?api_key=${ apiKey }&language=en-US` ) }>CLICK
                HERE FOR RECOMMENDATION
            </button>;
        } else if ( score === 3 ) {
            return <button className="quiz-button"
                           onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/754?api_key=${ apiKey }&language=en-US` ) }>CLICK
                HERE FOR RECOMMENDATION
            </button>;
        } else {
            return <button className="quiz-button"
                           onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/460885?api_key=${ apiKey }&language=en-US` ) }>CLICK
                HERE FOR RECOMMENDATION
            </button>;
        }
    }

    const handleResetButton = ( score ) => {
        setCurrentQuestion ( 0 );
        setShowScore ( false );
        setScore ( 0 );
    }

    function openTab () {
        window.open ( `https://www.imdb.com/title/${ movies.imdb_id }` );
    }

    return (
        <>
            { loading && <p>LOADING...</p> }
            { error && <p>DATA ERROR</p> }

            <p>ANSWER THE FOLLOWING QUESTIONS AND CLICK ON THE RECOMMENDATION BUTTON</p>
            <div className='quiz-container'>
                { showScore ? (
                    <section>
                        <div className='score-section'>
                            { handleScoreOnPoints ( { score } ) }
                            <div>
                                <h6>LAST RECOMMENDATION:</h6>
                                <h1 className="answer"><b>{ movies.title }</b></h1>
                                <h4>{ movies.release_date.substring ( 0,4 ) }</h4>
                                <Link to>
                                    <button className="imdb-button" onClick={ openTab }>IMDB</button>
                                </Link>
                            </div>
                            <button className="quiz-button" onClick={ () => handleResetButton ( score ) }>GO AGAIN!
                            </button>
                        </div>
                    </section>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question { currentQuestion + 1 }</span>/{ questions.length }
                            </div>
                            <div className='question-text'>{ questions[ currentQuestion ].questionText }</div>
                        </div>
                        <div className='answer-section'>
                            { questions[ currentQuestion ].answerOptions.map ( ( answerOption,i ) => (
                                <div key={ i }>
                                    <button className="quiz-button"
                                            onClick={ () => handleAnswerOptionClick ( answerOption.isCorrect ) }>{ answerOption.answerText }</button>
                                </div>
                            ) ) }
                        </div>
                    </>
                ) }
            </div>
        </>
    );
}

export default QuizComponent;