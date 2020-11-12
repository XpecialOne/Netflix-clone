import React, { useState, useEffect} from 'react';
import axios from '../axios';
import "../Components/row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/"


function Row( {title, fetchURL, isLargeRow } ) { 
    const [movies, setMovies] = useState( [] );
    const [trailerUrl, setTrailerUrl] = useState("");



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

    // YouTube canvas
    const opts = {
        height: "450",
        width: "100%",
        playerVars: {
          autoplay: 0,
        }
      }

      const handleClick = (movie) => {
        // console.table(movie?.title)
        if (trailerUrl) {
          setTrailerUrl('')
        } else {
          movieTrailer(movie?.title || "")
            .then(url => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error));
        }
      }     


    return (
        <div className="row">
           <h2>{title}</h2> 
            
            <div className="row_posters">

                 {/* container -> posters */}
                 {movies.map(movie => (
                     <img 
                     key={movie.id}  // optimisation tip for a smoother scrolling of the row images
                     onClick={() => handleClick(movie)}
                     className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                     src={`${base_url}${
                         isLargeRow ? movie.poster_path : movie.backdrop_path
                         }`} 
                         alt={movie.name} />
                 ))}
            </div> 
        {/* Youtube trailers div */}
          <div className="yt">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div> 
            
        </div>
    )
}

export default Row;
