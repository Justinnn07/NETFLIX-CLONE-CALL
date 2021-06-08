import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { request } from "./Api/Api";
import Header from "./components/Header";
import Home from "./components/Home";
import Row from "./components/Row";
import Footer from "./components/Footer";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [horror, setHorror] = useState([]);

  const image_base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3${request.fetchTrending}`)
      .then((res) => setPopular(res.data.results));

    axios
      .get(`https://api.themoviedb.org/3${request.fetchNetflixOriginals}`)
      .then((res) => setNetflixOriginals(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3${request.fetchHorrorMovies}`)
      .then((res) => setHorror(res.data.results));
  }, [setPopular, setNetflixOriginals, setHorror]);

  console.info(netflixOriginals);

  return (
    <div className="app">
      <Header />
      <Home />
      <h3>Popular on Netflix</h3>
      <div className="app__row">
        {popular.map((popular) => (
          <div>
            <Row img={`${image_base_url}${popular.poster_path}`} />
          </div>
        ))}
      </div>
      <h3>Netflix originals</h3>
      <div className="app__row">
        {netflixOriginals.map(({ poster_path }) => (
          <div>
            <Row img={`${image_base_url}${poster_path}`} />
          </div>
        ))}
      </div>
      <h3>Horror Movies</h3>
      <div className="app__row">
        {horror.map(({ poster_path }) => (
          <div>
            <Row img={`${image_base_url}${poster_path}`} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
