import React from "react";
import "./Home.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Button } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
const Home = ({ title }) => {
  return (
    <div className="home">
      <div className="home__content">
        <h3>{"Jurassic World: Camp Cretaceous"}</h3>
        <p>
          {
            "Six teens attending an adventure camp on the opposite side of Isla Nublar must band together to survive when dinosaurs wreak havoc on the island."
          }
        </p>
        <Button style={{ background: "white" }}>
          <PlayArrowIcon /> Play
        </Button>
        <Button className="btn__info" style={{ color: "white" }}>
          <InfoIcon /> More Info
        </Button>
      </div>
    </div>
  );
};

export default Home;
