import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import "./Newsletter.css";
import {Link} from "react-router-dom";
function Newsletter() {
    // initialiseer één state variabele met daarin een object aan form-waardes
    // let op: de namen van de keys moeten overeenkomen met de name-attributen van de velden
    const [formState, setFormState] = useState({
        name: '',
        age: [],
        newsletter: false,
        comments: '',
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // handleFormChange wordt afgevuurd bij elke verandering en zorgt dan dat het huidige state object wordt gekopieerd
    // alleen de object key van het bijbehorende inputveld wordt overschreven met een nieuwe waarde
    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });

        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }

    return (
<>
        <NavBar />
    <section className="outer-content-container">
        <div className="inner-content-container">

            <section className="newsletter-container">
                <h1 className="title-newsletter">SUBSCRIBE TO OUR NEWSLETTER</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend className="legend">USER DETAILS</legend>

                <label className="form-container" htmlFor="details-firstname">
                    FIRST NAME:
                    <input
                        type="text"
                        name="firstname"
                        id="details-firstname"
                        value={formState.name}
                        onChange={handleFormChange}
                    />
                </label>

                <label className="form-container" htmlFor="details-lastname">
                    LAST NAME:
                    <input
                        type="text"
                        name="lastname"
                        id="details-lastname"
                        value={formState.name}
                        onChange={handleFormChange}
                    />
                </label>

                <label className='form-container' htmlFor="details-age">
                    AGE:
                    <input
                        type="number"
                        name="age"
                        id="details-age"
                        value={formState.age}
                        onChange={handleFormChange}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend className="legend">QUESTIONS/COMMENTS</legend>

                <label htmlFor="newsletter-comments">
                    <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        cols="40"
                        placeholder="questions-comments"
                        value={formState.comments}
                        onChange={handleFormChange}
                    >
          </textarea>
                </label>

                <label htmlFor="newsletter">
                    <input
                        type="checkbox"
                        className="checkbox"
                        name="newsletter"
                        checked={formState.newsletter}
                        onChange={handleFormChange}
                    />
                    I AGREE TO THE TERMS
                    <div className="terms-and-conditions">
                        <Link to="//legaltemplates.net/form/terms-and-conditions"
                          target={"_blank"} rel="noopener noreferrer">link to terms and conditions</Link>
                    </div>
                </label>

                <button
                    disabled={formState.newsletter === false}
                    type="submit"
className="submit-button"
                >
                    SUBMIT
                </button>
            </fieldset>
        </form>
            </section>
        </div>
    </section>

    </>
    );
}

export default Newsletter;
