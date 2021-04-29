import React from 'react'
import '../../estilo/film.css'

const Film = ({ movie }) => {
    return (
        <div className="contenedor1">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="subcontenedor1">
              <h4>{movie.Title}</h4>
               <p>{movie.Plot}</p>
             <p>{movie.Title} es una {movie.Type} de {movie.Year} protagonizada por {movie.Actors}
             tiene un rating de {movie.imdbRating} y sus nominaciones {movie.Awards}. Con una duracion de {movie.Runtime}</p>
            
               

            </div>
        </div>
    )
}
export default Film;