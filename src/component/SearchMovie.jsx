import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";

export default function SearchMovie() {

    const [query, setQuery] = useState("");
    const [movieList, setMovieList] = useState([]);

    function handleSubmit(e){
        e.preventDefault();//Se usa para evitar comportamiento por defecto del evento submit
        setQuery(document.getElementById("busqueda").value);
        
    }

    async function fetchMoviesName(queryTerm){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmM5YjJmNzk3MjVjNWUzZDc5ZTc0ZWMzOTQwYzhlNyIsIm5iZiI6MTcyMjAzOTg4Mi45MzYxOTEsInN1YiI6IjY2YTQzYTYyMjAyOWJhNDY5OTUyMWUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78J3dR6z-OigWlHjPhLnZDPtki7YaYZmJ36-tMiSQew'
            }
        };
            
        const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${queryTerm}`;//Endpoint
        
            try {//Solicitud fetch
                const response = await fetch(apiUrl, options);
                const data = await response.json();
                console.log(data.results);
                return (data.results);
            }
            catch (error) { //Capturar un error
                console.error('Error al obtener las peliculas : ', error);
            }
        }


         useEffect(() => {
            async function getPeliculas(){
                const peliculas = await fetchMoviesName(query);
                setMovieList(peliculas);
            }
            getPeliculas();
        }, [query])

    return(<>
        <div>
            <h1>Buscar pelicula</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" id="busqueda" className="form-control"></input>
                    <button type="submit" className="btn btn-btn-secondary">Buscar pelicula</button>
                </div>
            </form>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {movieList.map((peliculas, index) => (
                    <MovieCard key = {index} pelicula={peliculas}/>
                ))}
                </div>
           
        </div>

    </>);
}