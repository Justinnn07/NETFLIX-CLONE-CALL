import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { request } from "./Api/Api";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3${request.fetchActionMovies}`)
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;
