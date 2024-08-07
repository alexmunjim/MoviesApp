import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";
import Botton from '../UI/Botton.jsx';
import Header from "./Header.jsx";
import SearchMovie from "./SearchMovie.jsx";

export default function MovieList(){
    const [peliculaLista, setPeliculaLista] = useState([]);
    const [pagination, setPagination] = useState(1);// contador
    const [displayPage, setDisplayPage] = useState(1);
    
    async function fetchPopularMovies(page){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmM5YjJmNzk3MjVjNWUzZDc5ZTc0ZWMzOTQwYzhlNyIsIm5iZiI6MTcyMjAzOTg4Mi45MzYxOTEsInN1YiI6IjY2YTQzYTYyMjAyOWJhNDY5OTUyMWUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78J3dR6z-OigWlHjPhLnZDPtki7YaYZmJ36-tMiSQew'
        }
    };
        
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;//Endpoint
    
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

    const nextPage = () =>{
        setPagination(pagination + 1);
    }

    const prevPage = () =>{
        if (pagination > 1) {
        setPagination(pagination - 1);
        }    
    }

    const changeDisplayPage = (pageId) => {
        setDisplayPage(pageId);
    }

    useEffect(() => {
        async function getPelicula(){
            const movies = await fetchPopularMovies(pagination);
            setPeliculaLista(movies);

        }
        getPelicula();
    }, [pagination]);

    let content;

    if(displayPage === 1) {
        content = (
            <>   
        <Botton handleClick={prevPage}>Anterior</Botton>
        <Botton handleClick={nextPage}>Siguiente</Botton>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {peliculaLista.map((peliculaLista, index) => (
                <MovieCard key = {index} pelicula={peliculaLista}></MovieCard>
            ))}
        </div>
        </>
        );
    } else {
        content = (<>
            <h1>Pagina de busqueda</h1>
            <SearchMovie/>
        </>);
    }
    
    return(
        
        <>   
        <Header handleClick={changeDisplayPage}/>
        {content}
        </>
    );
}
