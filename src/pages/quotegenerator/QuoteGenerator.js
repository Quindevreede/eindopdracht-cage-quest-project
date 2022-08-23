import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './quoteGenerator.css';
import PageTitle from "../../components/pagetitle/PageTitle";
import Image from "../../components/image/Image";
import Button from "../../components/button/Button";

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
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <PageTitle text="QUOTE GENERATOR" />
                    <div className="image__container">
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                    </div>
                    <div className="quote-generator__container">
                <h5 className="quote">QUOTE:</h5>
                <h1>"{quote[0].quote}"</h1>
                <p>{quote[0].title}</p>
                <p>{quote[0].year}</p>
                <Button
                    buttonStyle="btn--default"
                    buttonSize="btn--small"
                    type="button"
                    onClick={() => window.location.reload(false)}
                >
                    CLICK FOR NEW QUOTE!
                </Button>
            </div>
                </div>
            </section>
        </>

    );
}

export default QuoteGenerator;
