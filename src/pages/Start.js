import React from 'react';
import { Link } from 'react-router-dom';
import main from '../assets/main.jpg';
import "./Start.css";
import NavBarStart from "../components/NavBarStart";

function Start() {
  return (
    <>
      <NavBarStart />
        <section className="outer-content-container start-container">
            <div className="inner-content-container start-container">
      <h1>W E L C O M E !</h1>
                <img src={main} className="nic-main" alt="nicolas cage main"/>
      <section>
        <p>ON THIS APP WE HELP YOU ON YOUR QUEST TO FIND </p>
          <p>AMAZING NIC CAGE MOVIES</p>
      </section>
      <section>
        <p className="start-text"><Link to="/signin">LOGIN</Link> / <Link to="/signup">REGISTER</Link> TO START YOUR QUEST !</p>
      </section>
            </div>
        </section>
    </>
  );
}

export default Start;
