import React from 'react';
import {Link} from "react-router-dom";

function Top10Component ( {movieClass,movieImage,movieAlt,movieNumber,movieTitle,moviePlot,movieLink} ) {

    return (
        <>
            <article className={ movieClass }>
                    <span className="movie-class__image-wrapper">
                        <img src={ movieImage } alt={ movieAlt }/>
                    </span>
                <div className="movie-class__info-container">
                    <h1><b>{ movieNumber }</b></h1>
                    <h4>{ movieTitle }</h4>
                    <p>{ moviePlot }</p>
                    <Link to={ movieLink } className="movie-class__project-link"
                          target={ "_blank" } rel="noopener noreferrer">IMDB LINK</Link>
                </div>
            </article>
        </>
    );
}

export default Top10Component;