import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Requests";
import Row from "./Row";


const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movie"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movie"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movie"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default HomeScreen;
