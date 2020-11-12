import React from "react";
import './App.css';
import Row from '../src/Components/Row';
import requests from './requests';
import Banner from '../src/Components/Banner';
import Nav from '../src/Components/Nav';

function App() {
  return (
    <div className="app">

    {/* Nav bar*/}
    <Nav />

    {/* Banner */}
    <Banner />
    
    {/* Rows */}
    <Row title = "Trending now" 
     fetchURL={requests.fetchTrending}
     isLargeRow  />
    <Row 
     title = "NETFLIX ORIGINALS" 
     fetchURL={requests.fetchNetflixOriginals}
      />
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
