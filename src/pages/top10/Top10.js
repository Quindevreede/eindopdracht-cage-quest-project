import React from 'react';
import "./top10.css";
import Top10Component from "../../components/top10component/Top10Component";
import RaisingArizona from "../../assets/RaisingArizona.jpg";
import Mandy from "../../assets/Mandy.jpg";
import LeavingLasVegas from "../../assets/LeavingLasVegas.jpg";
import BadLieutenantPort from "../../assets/BadLieutenantPort.jpg";
import Adaptation from "../../assets/Adaptation.jpg";
import BringingOutTheDead from "../../assets/BringingOutTheDead.jpg";
import ConAir from "../../assets/ConAir.jpg";
import MatchStickMen from "../../assets/MatchStickMen.jpg";
import WildAtHeart from "../../assets/WildAtHeart.jpg";
import VampiresKiss from "../../assets/VampiresKiss.jpg";
import PageTitle from "../../components/pagetitle/PageTitle";
import Image from "../../components/image/Image";

function Top10 () {
    return (
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <PageTitle text="TOP 10" />
                    <div className="image__container">
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                    </div>
                    <section className="top10-sub-title">
                        <p>SCROLL DOWN TO SEE EVERY ENTRY</p>
                    </section>

                    <Top10Component
                        movieClass="movie-class-even"
                        movieImage={RaisingArizona}
                        movieAlt="RaisingArizona"
                        movieNumber="01"
                        movieTitle="RAISING ARIZONA (1987)"
                        moviePlot="When a childless couple of an ex-con and an ex-cop decide to help themselves to one
                                    of another family's quintuplets, their lives become more complicated than they
                                    anticipated."
                        movieLink="//www.imdb.com/title/tt0093822/?ref_=nm_flmg_act_100"/>

                    <Top10Component
                        movieClass="movie-class-odd"
                        movieImage={Mandy}
                        movieAlt="Mandy"
                        movieNumber="02"
                        movieTitle="MANDY (2018)"
                        moviePlot="The enchanted lives of a couple in a secluded forest are brutally shattered by a
                                    nightmarish hippie cult and their demon-biker henchmen, propelling a man into a
                                    spiraling, surreal rampage of vengeance."
                        movieLink="//www.imdb.com/title/tt6998518/?ref_=fn_al_tt_1"/>

                    <Top10Component
                        movieClass="movie-class-even"
                        movieImage={LeavingLasVegas}
                        movieAlt="LeavingLasVegas"
                        movieNumber="03"
                        movieTitle="LEAVING LAS VEGAS (1995)"
                        moviePlot="When a childless couple of an ex-con and an ex-cop decide to help themselves to one
                                    of another family's quintuplets, their lives become more complicated than they
                                    anticipated."
                        movieLink="//www.imdb.com/title/tt0113627/?ref_=nv_sr_srsg_2"/>

                    <Top10Component
                        movieClass="movie-class-odd"
                        movieImage={BadLieutenantPort}
                        movieAlt="BadLieutenantPort"
                        movieNumber="04"
                        movieTitle="BAD LIEUTENANT: PORT OF CALL NEW ORLEANS (2009)"
                        moviePlot="Terence McDonagh is a drug- and gambling-addled detective in post-Katrina
                                    New Orleans investigating the killing of five Senegalese immigrants."
                        movieLink="//www.imdb.com/title/tt1095217/?ref_=nv_sr_srsg_0"/>

                    <Top10Component
                        movieClass="movie-class-even"
                        movieImage={Adaptation}
                        movieAlt="Adaptation"
                        movieNumber="05"
                        movieTitle="ADAPTATION (2002)"
                        moviePlot="When a childless couple of an ex-con and an ex-cop decide to help themselves to one
                                    of another family's quintuplets, their lives become more complicated than they
                                    anticipated."
                        movieLink="//www.imdb.com/title/tt0093822/?ref_=nm_flmg_act_100"/>

                    <Top10Component
                        movieClass="movie-class-odd"
                        movieImage={BringingOutTheDead}
                        movieAlt="BringingOutTheDead"
                        movieNumber="06"
                        movieTitle="BRINGING OUT THE DEAD (1999)"
                        moviePlot="Haunted by the patients he failed to save, a monumentally burned-out Manhattan
                                    ambulance paramedic fights to maintain his sanity over three increasingly
                                    turbulent nights."
                        movieLink="///www.imdb.com/title/tt0163988/?ref_=nv_sr_srsg_0"/>

                    <Top10Component
                        movieClass="movie-class-even"
                        movieImage={ConAir}
                        movieAlt="ConAir"
                        movieNumber="07"
                        movieTitle="CON AIR (1997)"
                        moviePlot="Newly-paroled ex-con and former U.S. Ranger Cameron Poe finds himself trapped in a
                                    prisoner-transport plane when the passengers seize control."
                        movieLink="//www.imdb.com/title/tt0118880/?ref_=fn_al_tt_1"/>

                    <Top10Component
                        movieClass="movie-class-odd"
                        movieImage={MatchStickMen}
                        movieAlt="MatchStickMen"
                        movieNumber="08"
                        movieTitle="MATCHSTICK MEN (2003)"
                        moviePlot="A phobic con artist and his protégé are on the verge of pulling off a lucrative
                                    swindle when the former's teenage daughter arrives unexpectedly."
                        movieLink="//www.imdb.com/title/tt0325805/?ref_=fn_al_tt_1"/>

                    <Top10Component
                        movieClass="movie-class-even"
                        movieImage={WildAtHeart}
                        movieAlt="WildAtHeart"
                        movieNumber="09"
                        movieTitle="WILD AT HEART (1990)"
                        moviePlot="Young lovers Sailor and Lula run from the variety of weirdos that Lula's mom has
                                    hired to kill Sailor."
                        movieLink="//www.imdb.com/title/tt0100935/?ref_=fn_al_tt_1"/>

                    <Top10Component
                        movieClass="movie-class-odd"
                        movieImage={VampiresKiss}
                        movieAlt="VampiresKiss"
                        movieNumber="10"
                        movieTitle="VAMPIRE'S KISS (1988)"
                        moviePlot="After an encounter with a neck-biter, a publishing executive thinks that he's turning into a vampire."
                        movieLink="//www.imdb.com/title/tt0098577/?ref_=fn_al_tt_2"/>

                </div>
            </section>
        </>
    );
}

export default Top10;

