import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Quiz.css';
import QuizComponent from "../components/QuizComponent";
// import QuizComponent from "../components/QuizComponent";

const apiKey = 'a0aac18fb528d2c26cc33ed4a52c554a';

function Quiz() {
        const [movies, setMovies] = useState([550]);
        const [endpoint, setEndpoint] = useState(`https://api.themoviedb.org/3/movie/${movies}?api_key=${apiKey}&language=en-US`);
        const [loading, toggleLoading] = useState(false);
        const [error, setError] = useState(false);

        useEffect(() => {
            async function fetchData() {
                toggleLoading(true);
                setError(false);

                try {
                    const { data } = await axios.get(endpoint);
                    setMovies(data);
                    console.log(data);
                } catch(e) {
                    console.error(e);
                    setError(true);
                }

                toggleLoading(false);
            }

            fetchData();
        }, [endpoint]);

        return (
            <div className="movie-query">
                {movies &&
                <>
                    {/*<QuizComponent/>*/}
                    <p>{movies.title}</p>
                    <p>{movies.id}</p>
                    <button
                    onClick={() => setEndpoint(`https://api.themoviedb.org/3/movie/666?api_key=${apiKey}&language=en-US`)}
                    >
                    CLICK ME
                    </button>
                </>
                }
                {loading && <p>LOADING...</p>}
                {error && <p>DATA ERROR</p>}
            </div>
        );
    }

export default Quiz;
