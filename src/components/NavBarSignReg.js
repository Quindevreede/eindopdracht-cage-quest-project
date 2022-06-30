import React from 'react';
import { useHistory, Link } from 'react-router-dom';

function NavBarSignReg() {
    const history = useHistory();

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <h3>
              REGISTER
            </h3>
          </span>
            </Link>
            <div>
                    <button
                        type="button"
                        onClick={() => history.push('/')}
                    >
                        BACK
                    </button>
                </div>
        </nav>
    );
}

export default NavBarSignReg;