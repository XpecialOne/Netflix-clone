import React, { useState, useEffect} from 'react';
import axios from '../axios';
import "../Components/row.css";

const base_url = "https://image.tmdb.org/t/p/original/"


function Row( {title, fetchURL, isLargeRow } ) { 
    const [movies, setMovies] = useState( [] );


    // A snippet of code which runs based on a specific condition
    useEffect(() => {
        //if [](empty), run once when the row loads, and don't run again

        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

    }, [fetchURL]);


    return (
        <div className="row">
           <h2>{title}</h2> 
            
            <div className="row_posters">

                 {/* container -> posters */}
                 {movies.map(movie => (
                     <img 
                     key={movie.id}  // optimisation tip for a smoother scrolling of the row images
                     className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                 ))}
            </div> 
           
            
        </div>
    )
}

export default Row;
