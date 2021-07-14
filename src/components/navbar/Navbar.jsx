import React from "react";
import "./navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
function Navbar() {

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-left">
          <span className="logo">Admin App</span>
        </div>
        <div className="nav-right">
          <div className="navbar-icon-container">
            <NotificationsNone />
            <span className="nav-icon-badge">0</span>
          </div>
          <div className="navbar-icon-container">
            <Language />
            <span className="nav-icon-badge">0</span>
          </div>
          <div className="navbar-icon-container">
            <Settings />
          </div>
          <img
            src="https://ui-avatars.com/api/?name=Gary+Foo"
            alt="avatar"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
