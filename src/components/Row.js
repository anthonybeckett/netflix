import React, { useState, useEffect } from 'react'
import Api from '../api/Api';
import requests from '../api/Requests';

import './styles/Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData(){
            const request = await Api.get(fetchUrl);
            setMovies(request.data.results);
    
            return requests;
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{ title }</h2>

            <div className="row__posters">
                {movies.map(movie => 
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img 
                            key={movie.id} 
                            className={`row__poster ${ isLargeRow && "row__posterLarge" }`} 
                            src={`${ baseUrl }${ isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                            alt={ movie.name } 
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Row
