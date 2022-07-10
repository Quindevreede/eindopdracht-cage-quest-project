import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuoteGenerator.css';
import NavBarMain from "../components/NavBarMain";

function QuoteGenerator() {
    const [quote, setQuote] = useState([0]);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchQuote() {
            try {
                const response = await axios.get('https://nicolas-cage-quotes.herokuapp.com/quotes/?movie=&info=true', {
                    signal:controller.signal,
                });
                console.log(response.data);
                // we plaatsen de grap in de state-variabele "joke"
                setQuote(response.data);
            } catch(e) {
                console.error(e);
                // de error opslaan in de state, zodat je dit op de pagina kunt laten zien!
            }
        }
        fetchQuote();

        // UNMOUNT
        return function cleanup() {
            console.log('We gaan eraan...');
            controller.abort();
        }
    }, []); //<--- MOUNT EFFECT

    return (
        <>
            <NavBarMain />
            <section className="outer-content-container">
                <div className="inner-content-container">
            <div className="quote-generator">
                <h1>RANDOM NIC CAGE</h1>
                <h3><b>QUOTE GENERATOR:</b></h3>
                <h5 className="quote">QUOTE:</h5>
                <h1>"{quote[0].quote}"</h1>
                <p>{quote[0].title}</p>
                <p>{quote[0].year}</p>
                <button className="imdb-button" onClick={() => window.location.reload(false)}>CLICK FOR NEW QUOTE!</button>
            </div>
                </div>
            </section>
        </>

    );
}

export default QuoteGenerator;