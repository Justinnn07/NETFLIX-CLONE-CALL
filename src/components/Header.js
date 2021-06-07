import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <h4>Home</h4>
        <h4>TV Shows</h4>
        <h4>News </h4>
        <h4>Movies</h4>
        <h4>Movies</h4>
      </div>
      <div className="header__right">
        <SearchIcon />
        <NotificationsIcon />
        <Avatar fontSize="small" />
      </div>
    </div>
  );
};

export default Header;
