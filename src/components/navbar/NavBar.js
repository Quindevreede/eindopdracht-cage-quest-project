import React,{useContext} from 'react';
import {useHistory,Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import "./NavBar.css";

function NavBar() {
    const {isAuth,logout,user} = useContext (AuthContext);
    const history = useHistory ();

    return (
        <nav className="nav-bar-outer-content-container">
          <span className="logo-container">
            <h1 className="upper-logo">
              <Link to="/profile">CAGE QUEST</Link>
            </h1>
          </span>

            { isAuth ?
                <div>
                    <button
                        className="nav-bar-button"
                        onClick={ () => history.push ('/profile') }
                    >
                        <h3>HOME</h3>
                    </button>
                    <button
                        className="nav-bar-button"
                        onClick={ logout }
                    >
                        <h3>LOG OUT</h3>
                    </button>
                </div>
                :
                <div>
                    <button
                        className="nav-bar-button"
                        onClick={ () => history.push ('/signin') }
                    >
                        <h3>LOG IN</h3>
                    </button>
                    <button
                        className="nav-bar-button"
                        onClick={ () => history.push ('/signup') }
                    >
                        <h3>REGISTER</h3>
                    </button>
                </div>
            }
        </nav>
    );
}

export default NavBar;
