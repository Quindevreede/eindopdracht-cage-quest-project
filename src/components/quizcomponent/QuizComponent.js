import React,{ useEffect,useState } from 'react';
import axios from 'axios';
import quizQuestions from "../quizquestions/quizQuestions";
import Button from "../button/Button";

const apiKey = 'a0aac18fb528d2c26cc33ed4a52c554a';

function QuizComponent () {
    const [ movies,setMovies ] = useState ( [ 1000129 ] );
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


    const [ currentQuestion,setCurrentQuestion ] = useState ( 0 );
    const [ showScore,setShowScore ] = useState ( false );
    const [ score,setScore ] = useState ( 0 );

    const handleAnswerOptionClick = ( isCorrect ) => {
        if ( isCorrect ) {
            setScore ( score + 1 );
        }

        const nextQuestion = currentQuestion + 1;
        if ( nextQuestion < quizQuestions.length ) {
            setCurrentQuestion ( nextQuestion );
        } else {
            setShowScore ( true );
        }
    };

    const handleScoreOnPoints = ( showScore ) => {
        if ( score === 0 ) {
            return <Button
                buttonStyle="btn--default"
                buttonSize="btn--small"
                type="button"
                onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/451?api_key=${ apiKey }&language=en-US` ) }
            >
                CLICK HERE FOR RECOMMENDATION
            </Button>;
        } else if ( score === 1 ) {
            return <Button
                buttonStyle="btn--default"
                buttonSize="btn--small"
                type="button"
                onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/2757?api_key=${ apiKey }&language=en-US` ) }
            >
                CLICK HERE FOR RECOMMENDATION
            </Button>;
        } else if ( score === 2 ) {
            return <Button
                buttonStyle="btn--default"
                buttonSize="btn--small"
                type="button"
                onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/23483?api_key=${ apiKey }&language=en-US` ) }
            >
                CLICK HERE FOR RECOMMENDATION
            </Button>;
        } else if ( score === 3 ) {
            return <Button
                buttonStyle="btn--default"
                buttonSize="btn--small"
                type="button"
                onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/754?api_key=${ apiKey }&language=en-US` ) }
            >
                CLICK HERE FOR RECOMMENDATION
            </Button>;
        } else {
            return <Button
                buttonStyle="btn--default"
                buttonSize="btn--small"
                type="button"
                onClick={ () => setEndpoint ( `https://api.themoviedb.org/3/movie/460885?api_key=${ apiKey }&language=en-US` ) }
            >
                CLICK HERE FOR RECOMMENDATION
            </Button>;
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

            <p>ANSWER THE FOLLOWING QUESTIONS AND CLICK ON THE <br/><strong>RECOMMENDATION BUTTON</strong></p>
            <div className='quiz__container'>
                { showScore ? (
                    <section>
                        <div className='score--section'>
                            { handleScoreOnPoints ( { score } ) }
                            <div>
                                <h6>LAST RECOMMENDATION:</h6>
                                <h1 className="answer"><b>{ movies.title }</b></h1>
                                <h4>{ movies.release_date.substring ( 0,4 ) }</h4>
                                    <Button
                                        buttonStyle="btn--imdb"
                                        buttonSize="btn--small"
                                        type="button"
                                        onClick={ openTab }
                                    >
                                        IMDB
                                    </Button>
                            </div>
                            <Button
                                buttonStyle="btn--default"
                                buttonSize="btn--small"
                                type="reset"
                                onClick={ () => handleResetButton ( score ) }
                            >
                                GO AGAIN!
                            </Button>
                        </div>
                    </section>
                ) : (
                    <>
                        <div className='question--section'>
                            <div className='question--count'>
                                <span>Question { currentQuestion + 1 }</span>/{ quizQuestions.length }
                            </div>
                            <div className='question--text'>{ quizQuestions[ currentQuestion ].questionText }</div>
                        </div>
                        <div className='answer--section'>
                            { quizQuestions[ currentQuestion ].answerOptions.map ( ( answerOption, i ) => (
                                <div key={ i }>
                                    <Button
                                        buttonStyle="btn--default"
                                        buttonSize="btn--small"
                                        type="button"
                                        onClick={ () => handleAnswerOptionClick ( answerOption.isCorrect ) }
                                    >
                                        { answerOption.answerText }
                                    </Button>
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
