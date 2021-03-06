import React from 'react';
import { Link } from 'react-router-dom';
import "./Start.css";
import main from '../assets/main.jpg';
import NavBar from "../components/NavBar";

function Start () {
    return (
        <>
            <NavBar/>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h1>W E L C O M E !</h1>
                    <img src={ main } className="nic-main-one" alt="nicolas cage main"/>
                    <section>
                        <p>ON THIS APP WE HELP YOU ON YOUR QUEST TO FIND </p>
                        <p>AMAZING NIC CAGE MOVIES</p>
                    </section>
                    <section>
                        <p className="start-text"><Link to="/signup">REGISTER</Link> / <Link to="/signin">LOG
                            IN</Link> TO START YOUR QUEST !</p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Start;
