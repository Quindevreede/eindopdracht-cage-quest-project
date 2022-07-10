import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
function NavBarStart() {

    const history = useHistory();

  return (
    <nav className="nav-bar-outer-content-container">
          <span className="logo-container">
            <h1 className="upper-logo">
              <Link to="/">CAGE QUEST</Link>
            </h1>
          </span>

        <div>
            <button
                className="nav-bar-button"
                type="button"
                onClick={() => history.push('/signup')}
            >
                REGISTER
            </button>
          <button
              className="nav-bar-button"
            type="button"
            onClick={() => history.push('/signin')}
          >
            LOG IN
          </button>

        </div>
    </nav>
  );
}

export default NavBarStart;