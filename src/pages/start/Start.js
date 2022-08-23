import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from "../../components/pagetitle/PageTitle";
import CageLightBulbs from "../../components/cagelightbulbs/CageLightBulbs";

function Start () {
    return (
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <PageTitle text="WELCOME" />
                    <CageLightBulbs />
                    <section className="text__content">
                    <span id="text__content--1">ON THIS APP WE HELP YOU </span>
                    <span id="text__content--2">ON YOUR QUEST TO FIND </span>
                    <span id="text__content--3">AMAZING NIC CAGE MOVIES</span>
                        <p><Link to="/signup"><br/>REGISTER</Link> / <Link to="/signin">LOG
                            IN</Link> <strong>TO START YOUR QUEST</strong></p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Start;
