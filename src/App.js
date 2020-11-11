import React from "react";
import './App.css';
import Row from '../src/Components/Row';
import requests from './requests'

function App() {
  return (
    <div className="App">
     <h1>Hy test test test test!!</h1> 
     <Row title = "NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
     <Row title = "Trending now" fetchURL={requests.fetchTrending}  />
     <Row title = "Top Rated" fetchURL={requests.fetchTopRated}  />
     <Row title = "Action movies" fetchURL={requests.fetchActionMovies}  />
     <Row title= "Comedy Movies" fetchURL={requests.fetchComedyMovies} />
		 <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
