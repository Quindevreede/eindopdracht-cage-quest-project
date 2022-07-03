import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import "./SignUp.css"
import NavBarSignReg from "../components/NavBarSignReg";
import main from "../assets/main.jpg";

function SignUp() {
  // state voor het formulier
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // state voor functionaliteit
  const [error, toggleError] = useState(false);
  const [loading, toggleLoading] = useState(false);

  // we maken een canceltoken aan voor ons netwerk-request
  const source = axios.CancelToken.source();
  const history = useHistory();

  // mocht onze pagina ge-unmount worden voor we klaar zijn met data ophalen, aborten we het request
  useEffect(() => {
    return function cleanup() {
      source.cancel();
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    toggleError(false);
    toggleLoading(true);

    try {
      await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
        email: email,
        password: password,
        username: username,
      }, {
        cancelToken: source.token,
      });

      // als alles goed gegaan is, linken we door naar de login-pagina
      history.push('/signin');
    } catch(e) {
      console.error(e);
      toggleError(true);
    }

    toggleLoading(false);
  }

  return (
    <>
      <NavBarSignReg />
      <section className="outer-content-container start-container">
        <div className="inner-content-container start-container">
      <h1>REGISTER</h1>
          <section className="image-container">
            <img src={main} className="nic-main-register" alt="nicolas cage main"/>
          <img src={main} className="nic-main-register" alt="nicolas cage main"/>
          </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-field">
          EMAILADDRESS:
          <input
              className="form-container"
            type="email"
            id="email-field"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="username-field">
          USERNAME:
          <input
              className="form-container"
            type="text"
            id="username-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="password-field">
          PASSWORD:
          <input
              className="form-container"
            type="password"
            id="password-field"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="error">ERROR</p>}
        <button
          type="submit"
          className="form-button"
          disabled={loading}
        >
          REGISTER
        </button>

      </form>

      <p>ALREADY HAVE AN ACCOUNT? <Link to="/signin">LOG IN</Link></p>
        </div>
      </section>
    </>
  );
}

export default SignUp;