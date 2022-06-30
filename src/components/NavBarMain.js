import React from 'react';
import { useHistory, Link } from 'react-router-dom';

function NavBarMain() {
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

                <div>
                    <button
                        type="button"
                        onClick={() => history.push('/signin')}
                    >
                        HOME
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        LOGOUT
                    </button>
                </div>
            }
        </nav>
    );
}

export default NavBarMain;