import React from "react";
import "./filmographycomponent.css";
import "../../filmography.json";

function FilmographyComponent({ title, year, director, runtime, lead_actors, rated, imdb }) {
return (
    <section className="filmography-component__container">
        <h1>{title} ({year})</h1>
        <div className="filmography-extra-info--container">
        <h3>{director}</h3>
        <h4>runtime : {runtime}</h4>
        <p>OTHER ACTORS: {lead_actors}</p>
        <p>{rated}</p>
        <p>{imdb}</p>
        </div>
    </section>
);
}

export default FilmographyComponent;
