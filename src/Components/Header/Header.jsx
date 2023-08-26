import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import "./Header.css";
const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="header">
      <div className="header__logoDiv">
        <img
          className="header__logo"
          src="/abstract-logo-marks-2110370035.webp"
        />
        <div className="header__title">
          <h2>Abstract&nbsp;&nbsp;|&nbsp;&nbsp;Help&nbsp;Center</h2>
        </div>
      </div>
      <div className="header__searchIcon">
        <SearchIcon />
      </div>
      <div className="header__sidebarIcon">
        <MenuIcon />
      </div>
      <div className="header__submitButton">
        <Button
          variant="contained"
          sx={{ "&:hover": { backgroundColor: "transparent" } }}
        >
          Submit a request
        </Button>
      </div>

      <div
        className="header__signinButton"
        sx={{ ":hover": { bgcolor: "white", color: "black" } }}
      >
        <Button variant="contained">Sign in</Button>
      </div>
    </div>
  );
};

export default Header;

//make it responsive and add more functions
// Do sme changes
