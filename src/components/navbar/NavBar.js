import React,{useContext} from 'react';
import {useHistory,Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import Button from "../button/Button";
import "./NavBar.css";

function NavBar() {
    const {isAuth,logout,user} = useContext (AuthContext);
    const history = useHistory ();

    return (
        <nav className="nav-bar-outer-content__container">

            { isAuth ?
                <>
                    <span className="logo__container">
            <h1 className="upper--logo">
                <Link to="/homepage">CAGE QUEST</Link>
            </h1>
          </span>
                <div className="nav-bar--button">
                    <Button
                        onClick={ () => history.push ('/homepage') }
                        type="button"
                        buttonStyle="btn--navbar"
                        buttonSize="btn--medium"
                    >
                        HOME
                    </Button>

                    <Button
                        onClick={ logout }
                        type="button"
                        buttonStyle="btn--navbar"
                        buttonSize="btn--medium"
                    >
                        LOGOUT
                    </Button>
                </div>
                </>
                :
                <>
                    <span className="logo__container">
                        <h1 className="upper--logo">
                            <Link to="/">CAGE QUEST</Link>
                        </h1>
                    </span>
                    <div className="nav-bar--button">
                        <Button
                            onClick={ () => history.push ('/signin') }
                            type="button"
                            buttonStyle="btn--navbar"
                            buttonSize="btn--medium"
                        >
                            LOGIN
                        </Button>

                        <Button
                            onClick={ () => history.push ('/signup') }
                            type="button"
                            buttonStyle="btn--navbar"
                            buttonSize="btn--medium"
                        >
                            REGISTER
                        </Button>
                    </div>
                </>
            }
        </nav>
    );
}

export default NavBar;
