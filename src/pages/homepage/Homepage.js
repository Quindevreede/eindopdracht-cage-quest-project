import React, {useContext, useEffect, useState} from 'react';
import "./homepage.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Bio from "../../components/bio/Bio";
import Image from "../../components/image/Image";
import PageTitle from "../../components/pagetitle/PageTitle";

function Homepage() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);
    const source = axios.CancelToken.source();

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchUserData() {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get ( `https://frontend-educational-backend.herokuapp.com/api/user`, {
                    headers : {
                        "Content-Type" : "application/json",
                        Authorization : `Bearer ${ token }`,
                    },
                    cancelToken: source.token,
                });

                setProfileData(result.data);
            } catch (e) {
                console.log("the username is not relevant for this page")
            }
        }
        fetchUserData();

        return function cleanup() {
            source.cancel();
        }
    }, []);

    return (
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <PageTitle text="HOMEPAGE" />
                    <p>user : {user.username}</p>
                    <section className="home-page">
                        <Image alt="nic-cage" imageSize="img--medium" imagePosition="img--center"/>
                        <div className="main-menu">
                            <ul>
                                <li><NavLink to="/quiz"><b>QUIZ</b></NavLink></li>
                                <li><NavLink to="/top10"><b>TOP 10</b></NavLink></li>
                                <li><NavLink to="/quote-generator"><b>QUOTE GENERATOR</b></NavLink></li>
                                <li><NavLink to="/filmography"><b>FILMOGRAPHY</b></NavLink></li>
                                <li><NavLink to="/newsletter"><b>NEWSLETTER</b></NavLink></li>
                            </ul>
                        </div>
                    </section>
                    <section className="main-text">
                        <Bio/>
                        <p className="main-text-two">NICOLAS CAGE ACTED IN MORE THAN 100 MOVIES AND IS NOT SHOWING
                            ANY SIGNS OF SLOWING DOWN.</p>
                        <p className="main-text-three">THE MANY MOVIES HE HAS ACTED IN, VARY WILDLY IN GENRE AND
                            QUALITY, THEREFORE MOST PEOPLE DON’T GET WHAT ALL THE FUSS IS ABOUT..</p>
                        <p className="main-text-four">BY TAKING THE QUIZ, AND/OR CHECKING OUT THE TOP 25 YOU’LL BE ABLE
                            TO GET A GOOD STARTING POINT FOR YOUR QUEST TO BECOME A NIC CAGE EXPERT.</p>
                        <p className="main-text-five">IF YOU WOULD LIKE EVEN MORE INFORMATION; SIGN UP TO OUR NEWSLETTER
                            AND WE’LL KEEP YOU UP TO DATE ON EVERYTHING NICOLAS CAGE!<br /></p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Homepage;
