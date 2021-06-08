import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { request } from "./Api/Api";
import Header from "./components/Header";
import Home from "./components/Home";
import Row from "./components/Row";

const image_base_url = "https://image.tmdb.org/t/p/original/";

const App = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3${request.fetchTrending}`)
      .then((res) => setPopular(res.data.results));
  }, [setPopular]);

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
    </div>
  );
};

export default App;
