import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function NavBarStart() {
  const { isAuth, logout } = useContext(AuthContext);
  const history = useHistory();

  return (
    <nav>
      <Link to="/">
          <span className="logo-container">
            <h3>
              CAGE QUEST
            </h3>
          </span>
      </Link>

      {isAuth ?
        <button
          type="button"
          onClick={logout}
        >
          Log uit
        </button>
        :
        <div>
          <button
            type="button"
            onClick={() => history.push('/signin')}
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => history.push('/signup')}
          >
            Registreren
          </button>
        </div>
      }
    </nav>
  );
}

export default NavBarStart;