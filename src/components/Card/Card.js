import React from 'react'
import { Link } from 'react-router-dom'
import '../../estilo/Card.css';
const Card = ({ movie }) => {
    return (
        <div className="contenedor">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="subcontenedor">

                <Link to={`/pelicula/${movie.imdbID}`} className="pelis">
                    <h4>{movie.Title},{movie.Year}</h4>
                </Link>

                <p>{movie.Type}</p>

            </div>
        </div>
    )
}
export default Card;