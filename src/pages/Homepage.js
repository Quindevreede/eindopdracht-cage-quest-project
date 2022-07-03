import React, { useContext, useEffect, useState } from 'react';
import "./Homepage.css";
import main from '../assets/main.jpg';
import { AuthContext } from '../context/AuthContext';
import NavBarMain from "../components/NavBarMain";
import axios from 'axios';
import {Link} from "react-router-dom";

function Homepage() {
  const [profileData, setProfileData] = useState({});
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const source = axios.CancelToken.source();

    // we halen de pagina-content op in de mounting-cycle
    async function fetchProfileData() {
      // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
      const token = localStorage.getItem('token');

      try {
        const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/user', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          cancelToken: source.token,
        });

        setProfileData(result.data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchProfileData();

    return function cleanup() {
      source.cancel();
    }
  }, []);

  return (
    <>
      <NavBarMain />
      <section className="outer-content-container start-container">
        <div className="inner-content-container start-container">
      <h1>HOME</h1>
          <section className="home-page">
          <img src={main} className="nic-main-home" alt="nicolas cage main"/>
          <div className="main-menu">
            <p>{user.username}</p>
            <ul>
              <li><Link to="/quiz">QUIZ</Link></li>
              <li><Link to="/top25">TOP 25</Link></li>
              <li><Link to="/newsletter">NEWSLETTER</Link></li>
            </ul>
          </div>
          </section>
          <section className="main-text">
          <p className="main-text-one">NICOLAS CAGE WAS BORN NICOLAS KIM COPPOLA IN LONG BEACH CALIFORNIA (JANUARY 7, 1964).</p>
          <p className="main-text-two">HE HAS ACTED IN MORE THAN 100 MOVIES AND IS NOT SHOWING ANY SIGNS OF SLOWING DOWN.</p>
          <p className="main-text-three">THE MANY MOVIES HE HAS ACTED IN, VARIES WILDLY IN GENRE AND QUALITY, THEREFORE MOST PEOPLE DON’T UNDERSTAND WHAT ALL THE FUSS IS ABOUT..</p>
          <p className="main-text-four">BY TAKING THE QUIZ, AND/OR CHECKING OUT THE TOP 25 YOU’LL BE ABLE TO GET A GOOD STARTING POINT FOR YOUR QUEST TO BECOME A NIC CAGE EXPERT.</p>
          <p className="main-text-five">IF YOU WOULD LIKE EVEN MORE INFORMATION; SIGN UP TO OUR NEWSLETTER AND WE’LL KEEP YOU UP TO DATE ON EVERYTHING NICOLAS CAGE!</p>
          </section>
          </div>
      </section>
    </>
  );
}

export default Homepage;