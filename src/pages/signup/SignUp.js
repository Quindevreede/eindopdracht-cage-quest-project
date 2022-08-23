import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import PageTitle from "../../components/pagetitle/PageTitle";
import Image from "../../components/image/Image";
import InputField from "../../components/inputfield/InputField";
import Button from "../../components/button/Button";

function SignUp () {
    const [ email, setEmail ] = useState ( '' );
    const [ username, setUsername ] = useState ( '' );
    const [ password, setPassword ] = useState ( '' );

    const [ error, toggleError ] = useState ( false );
    const [ loading, toggleLoading ] = useState ( false );

    const source = axios.CancelToken.source ();
    const history = useHistory ();

    useEffect ( () => {
        return function cleanup () {
            source.cancel ();
        }
    }, [] );

    async function handleSubmit ( e ) {
        e.preventDefault ();
        toggleError ( false );
        toggleLoading ( true );

        try {
            await axios.post ( 'https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email : email,
                password : password,
                username : username,
            }, {
                cancelToken : source.token,
            } );

            history.push ( '/signin' );
        } catch ( e ) {
            console.error ( e );
            toggleError ( true );
        }

        toggleLoading ( false );
    }

    const handleChange =
        ( e )  => { setPassword ( e.target.value )
    };

    return (
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <PageTitle text="REGISTER" />
                    <div className="image__container">
                    <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                    <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                    </div>

                        <form onSubmit={ handleSubmit }>
                        <label htmlFor="email-field">
                            EMAIL ADDRESS:
                            <InputField
                                className="form__container"
                                type="email"
                                id="email"
                                name="email"
                                value={ email }
                                onChange={ ( e ) => setEmail ( e.target.value ) }
                            />
                        </label>

                        <label htmlFor="username-field">
                            USERNAME:
                            <InputField
                                className="form__container"
                                type="text"
                                id="username-field"
                                value={ username }
                                onChange={ ( e ) => setUsername ( e.target.value ) }
                            />
                        </label>

                            <label htmlFor="password-field">
                                PASSWORD:
                                <InputField
                                    className="form__container"
                                    type="password"
                                    id="password-field"
                                    name="password"
                                    value={ password }
                                    onChange={ handleChange }
                                />
                            </label>
                        { error && <p className="error-message">ERROR username and/or password input must be at least 7 characters</p> }

                        <Button
                            type="submit"
                            buttonStyle="btn--form"
                            buttonSize="btn--small"
                            disabled={ loading }
                        >
                            REGISTER
                        </Button>

                    </form>
                    <section className="text__content">
                        <p>ALREADY HAVE AN ACCOUNT? <Link to="/signin">LOG IN</Link></p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default SignUp;
