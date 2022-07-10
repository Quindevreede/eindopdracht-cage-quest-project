import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuoteGenerator.css';
import NavBar from "../components/NavBar";
import main from "../assets/main.jpg";

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
                setQuote(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        fetchQuote();

        return function cleanup() {
            console.log('We gaan eraan...');
            controller.abort();
        }
    }, []);

    return (
        <>
            <NavBar />
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h1>QUOTE GENERATOR:</h1>
                    <section className="image-container">
                        <img src={main} className="nic-main-four" alt="nicolas cage main"/>
                        <img src={main} className="nic-main-four" alt="nicolas cage main"/>
                        <img src={main} className="nic-main-four" alt="nicolas cage main"/>
                        <img src={main} className="nic-main-four" alt="nicolas cage main"/>
                    </section>
                    <div className="quote-generator">
                <h5 className="quote">QUOTE:</h5>
                <h1>"{quote[0].quote}"</h1>
                <p>{quote[0].title}</p>
                <p>{quote[0].year}</p>
                <button className="button-quote" onClick={() => window.location.reload(false)}>CLICK FOR NEW QUOTE!</button>
            </div>
                </div>
            </section>
        </>

    );
}

export default QuoteGenerator;