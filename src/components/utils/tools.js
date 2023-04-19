import React from "react";

import project_logo from "../../logo.svg";
import project_fav from "../../favIcon.svg";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export const ProjectLogo = (props) => {
  const template = <figure className="logo"><SVG src={project_logo} /></figure>
  const template_fav = <figure className="logo"><SVG src={project_fav} /></figure>
  if(props.link) {
    if(props.IconLogo) {
      return(
        <Link className="logo_link" to={props.linkTo}>
          {template_fav}
        </Link>
      )
    } else {
      return(
        <Link className="logo_link" to={props.linkTo}>
          {template}
        </Link>
      )
    }
  } else {
    if(props.IconLogo) {
      return template_fav
    } else {
      return template
    }
  }
}