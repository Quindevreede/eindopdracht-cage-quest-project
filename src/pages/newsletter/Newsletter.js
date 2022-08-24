import React, { useState } from 'react';
import "./newsletter.css";
import InputField from "../../components/inputfield/InputField";
import Button from "../../components/button/Button";
import PageTitle from "../../components/pagetitle/PageTitle";
import Image from "../../components/image/Image";

function Newsletter() {

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

    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    return (
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <PageTitle text="NEWSLETTER" />
                    <div className="image__container">
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                    </div>
                    <p>(Firstname, Lastname and Age are required)</p>
                    <form onSubmit={handleSubmit}>
            <fieldset>
                <legend><strong>Personal Information</strong></legend>
                <section>
                    <InputField
                        className="form__container"
                        name="firstname"
                        label="Firstname"
                        type="text"
                        value={formState.firstname}
                        onChange={handleFormChange}
                    />
                    {formState.firstname.length > 15 && <p className="error-message">Firstname can't be longer than 15 characters!</p>}
                </section>
                <section>
                    <InputField
                        className="form__container"
                        name="lastname"
                        label="Lastname"
                        type="text"
                        value={formState.lastname}
                        onChange={handleFormChange} />
                    {formState.lastname.length > 15 && <p className="error-message">Lastname can't be longer than 15 characters!</p>}
                </section>
                <section>
                    <InputField
                        className="form__container form__container--newsletter"
                        name="age"
                        label="Age"
                        type="number"
                        placeholder=""
                        value={formState.age}
                        onChange={handleFormChange} />
                    {formState.age < 0 && <p className="error-message">Age can't be a negative number!</p>}
                </section>
            </fieldset>

            <fieldset>
                <legend><strong>Your Review</strong></legend>
                <section>
                <label htmlFor="recipe-comments">
                    Comments:
                    <textarea
                        className="form__container"
                        type="text"
                        name="comments"
                        id="comments"
                        rows="4"
                        cols="40"
                        placeholder="Fill in your comments?"
                        value={formState.comments}
                        onChange={handleFormChange}
                    >
                        {formState.comments.length > 0 && <p className="error-message">Age can't be a negative number!</p>}
          </textarea>
                </label>
                    {formState.comments.length > 150 && <p className="error-message">Comments must be under 50 characters!</p>}
                </section>
                <br/>
                <label htmlFor="recipe-newsletter">
                    <input
                        className="form__container"
                        type="checkbox"
                        name="newsletter"
                        checked={formState.newsletter}
                        onChange={handleFormChange}
                    />
                    I AM NOT A ROBOT!<br/>
                </label>

                <div>
                    {formState.age > 0 && formState.lastname.length < 16 && formState.firstname.length < 16 ?
                <Button
                    type="submit"
                    buttonStyle="btn--form"
                    buttonSize="btn--small"
                    disabled={formState.newsletter === false}
                >VERSTUREN</Button> : <div></div>}
                </div>
            </fieldset>
        </form>

                </div>
            </section>
            </>
    );
}
export default Newsletter;
