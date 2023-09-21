import React from "react";
import "../Card/card.css";

function Card({title, backdrop_path, overview, release_date}) {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    const fullImageUrl = baseUrl + backdrop_path;
    return (
        <div className="movie__card">
            <img className="movie__image" src={fullImageUrl} alt="img" />
            <div className="movie__info">
                <h3 className="movie__title">{title}</h3>
                <span className="release__data">{release_date}</span>
            </div>
            <div className="movie_overview">{overview}</div>
        </div>
        
    )
}

export default Card;
  