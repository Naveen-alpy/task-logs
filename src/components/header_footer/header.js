import React from "react";

import { Link } from "react-router-dom";
import { ProjectLogo } from "../utils/tools";

const Header = () => {
  return(
    <header className="project_header">
      <div className="container-fluid vCenter">
        <nav className="project_logo_"><ProjectLogo IconLogo={false} link={true} linkTo="/" /></nav>
        <nav className="project_logo_slim"><ProjectLogo IconLogo={true} link={true} linkTo="/" /></nav>
        <div className="header_right">
          <nav className="main_menu">
            <ul>
              <li><Link to="/app-entry">Login/Register</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;