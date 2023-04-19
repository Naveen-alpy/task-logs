import React from "react";

const Footer = () => {
  return(
    <footer className="project_footer center">
      <div className="container text-white">
        &copy; {new Date().getFullYear()} TaskLogs. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer;