import React from 'react';
import { Link } from 'react-router-dom';
import NavBarStart from "../components/NavBarStart";

function Start() {
  return (
    <>
      <NavBarStart />
      <h1>WELCOME!</h1>
      <section>
        <p>ON THIS APP WE HELP YOU ON YOUR QUEST TO FIND AMAZING
            NIC CAGE MOVIES </p>
      </section>
      <section>
        <p><Link to="/signup">REGISTER</Link>/<Link to="/signin">LOGIN</Link> TO START YOUR QUEST !</p>
      </section>
    </>
  );
}

export default Start;
