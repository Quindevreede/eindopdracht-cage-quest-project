import React from "react";
import './filmography.css';
import FilmographyComponent from "../../components/filmographycomponent/FilmographyComponent";
import data from "../../filmography.json";
import PageTitle from "../../components/pagetitle/PageTitle";
import Image from "../../components/image/Image";

function Filmography() {

    const movies = data.map(( { title, year, director, runtime, lead_actors } ) => {
        return (
            <FilmographyComponent
                key={ title }
                title={ title }
                year={ year }
                director={ director }
                runtime={runtime}
                lead_actors={lead_actors.slice(1)}

            />
        )
    })
        return (
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <PageTitle text="FILMOGRAPHY" />
                    <div className="image__container">
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                    </div>
                    <section className="filmography-sub-title">
                        <p>SCROLL DOWN TO SEE EVERY ENTRY</p>
                    </section>
                    <div className="filmography__container">
                        { movies }
                    </div>
                </div>
            </section>
    )
}

export default Filmography;
