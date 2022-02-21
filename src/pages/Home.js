import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="about">About</Link>
          <Link to="Store">Store</Link>
        </div>

        <div className="home_headerRight">
          <Link to="Gmail">Gmail</Link>
          <Link to="Images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
          alt="googlelogo"
        />
        <div className="input_container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
