import { Link, Outlet } from "react-router-dom"
import Footer from "./header_footer/footer"
import { ProjectLogo } from "./utils/tools"
import { EmpIcon, HomeIcon, PmIcon, ProjctIcon, TicketIcon, TlIcon, LoginIcon } from "./utils/icons";
import { useState } from "react";

export const TemplateWithHeader = () => {
  const [expandSideMenu, setExpandSideMenu] = useState(false);
  const btnXpandMenu = () => {
    setExpandSideMenu(!expandSideMenu);
  }
  return(
    <section className={`main_body_wrapper with_sidebar${expandSideMenu ? " showSidebar" : ""}`}>
      <header className="project_header">
        <div className="container-fluid vCenter">
          <div className="header_right">
            <nav className="main_menu ipad-none">
              <ul>
                <li><Link to="/app-entry">Login/Register</Link></li>
              </ul>
            </nav>
            <div className="user_profile">
              <button type="button" className="user_btn vCenter">
                <figure className="user_avatar vhCenter"></figure>
                <div className="user_name">User Name<span className="clear">username@emailid.com</span></div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <aside className="main_sidebar">
        <button type="button" className="hamburger_menu" onClick={()=>{btnXpandMenu();}}>
          <span className="first-child"></span><span></span><span className="last-child"></span>
        </button>
        <nav className="project_logo_">
          <ProjectLogo IconLogo={false} link={true} linkTo="/" addClass="logo_main" />
          <ProjectLogo IconLogo={true} link={true} linkTo="/" addClass="logo_slim" />
        </nav>
        <nav className="main_menu">
          <ul>
            <li><Link to="/"><HomeIcon size="16px" /><span className="title">Dashboard</span></Link></li>
            <li><Link to="/resources"><PmIcon size="16px" /><span className="title">Other Resources</span></Link></li>
            <li><Link to="/team-lead"><TlIcon size="16px" /><span className="title">Team Leads</span></Link></li>
            <li><Link to="/tl-tasks-summary"><TicketIcon size="16px" /><span className="title">TL Tasks Summary</span></Link></li>
            <li><Link to="/tl-project-summary"><ProjctIcon size="16px" /><span className="title">TL Project Summary</span></Link></li>
            <li><Link to="/single-project"><ProjctIcon size="16px" /><span className="title">Single Project</span></Link></li>
            <li><Link to="/user-profile"><EmpIcon size="16px" /><span className="title">User Profile</span></Link></li>
            <li><Link to="/login-details"><LoginIcon size="18px" /><span className="title">Logins</span></Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main_container"><Outlet /></main>
      <Footer />
    </section>
  )
}