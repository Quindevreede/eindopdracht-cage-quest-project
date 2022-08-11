import React, {useContext, useEffect, useState} from 'react';
import "./Homepage.css";
import main from '../../assets/main.jpg';
import {Link} from "react-router-dom";
import Bio from "../../components/bio/Bio";

function Homepage() {

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h1>HOMEPAGE</h1>
                    <section className="home-page">
                        <img src={main} className="nic-main-home" alt="nicolas cage main"/>
                        <div className="main-menu">
                            {/*<p>welcome {user.username}</p>*/}
                            <ul>
                                <li><Link to="/quiz"><b>QUIZ</b></Link></li>
                                <li><Link to="/top10"><b>TOP 10</b></Link></li>
                                <li><Link to="/quote-generator"><b>QUOTE GENERATOR</b></Link></li>
                                <li><Link to="/newsletter"><b>NEWSLETTER</b></Link></li>
                            </ul>
                        </div>
                    </section>
                    <section className="main-text">
                        <Bio/>
                        <p className="main-text-two">NICOLAS CAGE HAS ACTED IN MORE THAN 100 MOVIES AND IS NOT SHOWING
                            ANY SIGNS OF SLOWING DOWN.</p>
                        <p className="main-text-three">THE MANY MOVIES HE HAS ACTED IN, VARY WILDLY IN GENRE AND
                            QUALITY, THEREFORE MOST PEOPLE DON’T UNDERSTAND WHAT ALL THE FUSS IS ABOUT..</p>
                        <p className="main-text-four">BY TAKING THE QUIZ, AND/OR CHECKING OUT THE TOP 25 YOU’LL BE ABLE
                            TO GET A GOOD STARTING POINT FOR YOUR QUEST TO BECOME A NIC CAGE EXPERT.</p>
                        <p className="main-text-five">IF YOU WOULD LIKE EVEN MORE INFORMATION; SIGN UP TO OUR NEWSLETTER
                            AND WE’LL KEEP YOU UP TO DATE ON EVERYTHING NICOLAS CAGE!</p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Homepage;
