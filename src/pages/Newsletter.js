import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import "./Newsletter.css";
import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form';

function Newsletter() {

    const { handleSubmit, formState: { errors }, register, watch } = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }

    return (
<>
        <NavBar />
    <section className="outer-content-container">
        <div className="inner-content-container">

            <section className="newsletter-container">
                <h1 className="title-newsletter">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <form onSubmit={handleSubmit(onFormSubmit)}>
            <fieldset>
                <legend className="legend">USER DETAILS</legend>

                <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        id="details-name"
                        className="form-container"
                        {...register("name", {
                            required: {
                                value: true,
                                message:"NAME IS REQUIRED!",
                            },
                            minLength: {
                                value: 3,
                                message: " NAME HAS TO BE AT LEAST 3 CHARACTERS",
                            },
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>

                <label htmlFor="details-age">
                    AGE:
                    <input
                        type="number"
                        id="details-age"
                        className="form-container"
                        {...register("age", {
                            min: {
                                value: 18,
                                message: "YOU HAVE TO BE 18"
                            }
                        })}
                    />
                    {errors.age && <p>{errors.age.message}</p>}
                </label>
            </fieldset>

            <fieldset>
                <legend className="legend">QUESTIONS/COMMENTS</legend>
                <label htmlFor="recipe-comments">
                    <p>COMMENTS:</p>
                    <textarea
                        {...register("comments", {
                            maxLength: {
                                value: 100,
                                message: "MAX 100 CHARACTERS"
                            },
                        })}
                        id="recipe-comments"
                        rows="4"
                        cols="40"
                        placeholder="Do you have any comments?"
                    >
                </textarea>
                    {errors.comments && <p>{errors.comments.message}</p>}
                </label>
                <div>
                <label htmlFor="recipe-newsletter">
                    <input
                        type="checkbox"
                        {...register("newsletter")}
                    />
                    I AGREE WITH THE TERMS
                </label>
                    </div>
                <div className="terms-and-conditions">
                    <Link to="//legaltemplates.net/form/terms-and-conditions"
                          target={"_blank"} rel="noopener noreferrer">link to terms and conditions</Link>
                </div>
                <button type="submit" className="submit-button">SUBMIT
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
