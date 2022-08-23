import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Image from "../../components/image/Image";
import PageTitle from "../../components/pagetitle/PageTitle";
import InputField from "../../components/inputfield/InputField";
import Button from "../../components/button/Button";

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, toggleError] = useState(false);

  const { login } = useContext(AuthContext);
  const history = useHistory();
  const source = axios.CancelToken.source();

  useEffect(() => {
    return function cleanup() {
      source.cancel();
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    toggleError(false);

    try {
      const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
        username: username,
        password: password,
      }, {
        cancelToken: source.token,
      });

      console.log(result.data);
      login(result.data.accessToken);

    } catch (e) {
      console.error(e);
      toggleError(true);
    }
  }

  const handleChange =
      ( e )  => { setPassword ( e.target.value )
      };

  return (
      <>
        <section className="outer-content__container">
          <div className="inner-content__container">
            <PageTitle text="LOG IN" />
            <div className="image__container">
              <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
              <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
            </div>

            <form onSubmit={handleSubmit}>
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
              { error && <p className="error-message">ERROR wrong input</p> }

              <Button
                  type="submit"
                  buttonStyle="btn--form"
                  buttonSize="btn--small"
              >
                LOG IN
              </Button>
            </form>
            <section className="text__content">
            <p>DON'T HAVE AN ACCOUNT? <Link to="/signup">REGISTER</Link></p>
            </section>
          </div>
        </section>
      </>
  );
}

export default SignIn;
