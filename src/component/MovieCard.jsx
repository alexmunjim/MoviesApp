import React from "react";

export default function MovieCard({pelicula}) {
    return(
        <>

            <div className="col">
                <div className="card shadow-sm">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{pelicula.title}</h5>
                        <p className="card-text">{pelicula.overview}</p>
                        <p><small className="text-muted">Promedio de votos: {pelicula.vote_average}</small></p>
                        <p><small className="text-muted">Votos: {pelicula.vote_count}</small></p>
                        <p className="card-text"><small className="text-muted">{pelicula.release_date}</small></p>
                    </div>
                </div>
            </div>
        </>
    );
}