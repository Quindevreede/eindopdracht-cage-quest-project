import React, {useContext} from 'react';
import "./NavBarMain.css";
import { AuthContext } from '../context/AuthContext';
import { useHistory, Link } from 'react-router-dom';

function NavBarMain() {
    const history = useHistory();
    const { logout } = useContext(AuthContext);

    return (
        <nav className="nav-bar-outer-content-container">
          <span className="logo-container">
            <h1 className="upper-logo">
              <Link to="/profile">CAGE QUEST</Link>
            </h1>
          </span>
                <div>
                    <button
                        className="nav-bar-button"
                        type="button"
                        onClick={() => logout()}
                    >
                        LOGOUT
                    </button>
                </div>
        </nav>
    );
}

export default NavBarMain;