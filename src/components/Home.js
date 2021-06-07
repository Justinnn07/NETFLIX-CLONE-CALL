import React from "react";
import "./Home.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Button } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <h3>Minority Report</h3>
        <p>
          The following npm package, @material-ui/icons, includes the 1,100+
          official Material icons converted to SvgIcon components.
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
