import React from "react";
import Card from "../Card/card";
import "../Table/table.css";


function Table({movieData}) {
    return (
        <div className="movie__table">
          {movieData.map((movie, index) => (
            <Card
              key={index}
              title={movie.title}
              backdrop_path={movie.backdrop_path}
              overview={movie.overview}
              release_date={movie.release_date}
            />
          ))}
        </div>
    );
}

export default Table