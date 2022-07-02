import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import "./NavBarStart.css";
function NavBarStart() {

    const history = useHistory();

  return (
    <nav className="nav-bar-outer-content-container">
          <span className="logo-container">
            <h1>
              CAGE QUEST
            </h1>
          </span>

        <div>
          <button
              className="nav-bar-button"
            type="button"
            onClick={() => history.push('/signin')}
          >
            LOG IN
          </button>
          <button
              className="nav-bar-button"
            type="button"
            onClick={() => history.push('/signup')}
          >
            REGISTER
          </button>
        </div>
    </nav>
  );
}

export default NavBarStart;