import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import "./SignIn.css";
import NavBarSignReg from "../components/NavBarSignReg";
import main from "../assets/main.jpg";

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, toggleError] = useState(false);

  const { login } = useContext(AuthContext);
  const source = axios.CancelToken.source();

  // mocht onze pagina ge-unmount worden voor we klaar zijn met data ophalen, aborten we het request
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

      // log het resultaat in de console
      console.log(result.data);

      // geef de JWT token aan de login-functie van de context mee
      login(result.data.accessToken);

    } catch (e) {
      console.error(e);
      toggleError(true);
    }
  }

  return (
      <>
        <NavBarSignReg />
        <section className="outer-content-container start-container">
          <div className="inner-content-container start-container">
            <h1>LOG IN</h1>
            <section className="image-container">
              <img src={main} className="nic-main-register" alt="nicolas cage main"/>
              <img src={main} className="nic-main-register" alt="nicolas cage main"/>
              <img src={main} className="nic-main-register" alt="nicolas cage main"/>
            </section>

            <form onSubmit={handleSubmit}>
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
              >
                LOG IN
              </button>
            </form>

            <p>DON'T HAVE AN ACCOUNT? <Link to="/signup">REGISTER</Link> FIRST!</p>
          </div>
        </section>
      </>
  );
}

export default SignIn;
