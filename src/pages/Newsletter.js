import React, { useState } from 'react';

function Newsletter() {
    // initialiseer één state variabele met daarin een object aan form-waardes
    // let op: de namen van de keys moeten overeenkomen met de name-attributen van de velden
    const [formState, setFormState] = useState({
        name: '',
        age: 0,
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
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>USER DETAILS</legend>

                <label htmlFor="details-name">
                    NAME:
                    <input
                        type="text"
                        name="name"
                        id="details-name"
                        value={formState.name}
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="details-age">
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
                <legend>QUESTIONS/COMMENTS</legend>

                <label htmlFor="newsletter-comments">
                    QUESTIONS/COMMENTS:
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
                        name="newsletter"
                        checked={formState.newsletter}
                        onChange={handleFormChange}
                    />
                    I WANT TO RECEIVE THE NEWSLETTER
                </label>

                <button
                    disabled={formState.newsletter === false}
                    type="submit"
                >
                    SEND
                </button>
            </fieldset>
        </form>
    );
}

export default Newsletter;
