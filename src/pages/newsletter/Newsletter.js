import React, { useState } from 'react';
import "./Newsletter.css";
import InputField from "../../components/inputfield/InputField";
import Button from "../../components/button/Button";

function Newsletter() {

    // initialiseer één state variabele met daarin een object aan form-waardes
    // let op: de namen van de keys moeten overeenkomen met de name-attributen van de velden
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
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
            <section className="outer-content-container">
                <div className="inner-content-container">
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>
                <section>
                    <InputField name="firstname" label="Voornaam" inputType="text" value={formState.firstname} changeHandler={handleFormChange} />
                    {formState.firstname.length > 15 && <p className="error-message">Firstname can't be longer than 15 characters!</p>}
                </section>
                <section>
                    <InputField name="lastname" label="Achternaam" inputType="text" value={formState.lastname} changeHandler={handleFormChange} />
                    {formState.lastname.length > 15 && <p className="error-message">Lastname can't be longer than 15 characters!</p>}
                </section>
                <section>
                    <InputField name="age" label="Leeftijd" inputType="number" value={formState.age} changeHandler={handleFormChange} />
                    {formState.age < 0 && <p className="error-message">Age can't be a negative number!</p>}
                </section>
            </fieldset>

            <fieldset>
                <legend>Jouw review</legend>

                <section>
                <label htmlFor="recipe-comments">
                    Opmerkingen:
                    <textarea
                        name="comments"
                        id="recipe-comments"
                        rows="4"
                        cols="40"
                        placeholder="Wat vond je van het recept?"
                        value={formState.comments}
                        onChange={handleFormChange}
                    >
                        {formState.comments.length > 0 && <p className="error-message">Age can't be a negative number!</p>}
          </textarea>
                </label>
                    {formState.comments.length > 50 && <p className="error-message">Comments must be under 50 characters!</p>}
                </section>
                <label htmlFor="recipe-newsletter">
                    <input
                        type="checkbox"
                        name="newsletter"
                        checked={formState.newsletter}
                        onChange={handleFormChange}
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>

                <Button
                    type="submit"
                    buttonStyle="none"
                    buttonSize="btn--small"
                    disabled={formState.newsletter === false}
                >VERSTUREN</Button>
            </fieldset>
        </form>
                </div>
            </section>
            </>
    );
}
export default Newsletter;
