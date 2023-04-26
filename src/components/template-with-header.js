import { Link, Outlet } from "react-router-dom"
import Footer from "./header_footer/footer"
import { ProjectLogo } from "./utils/tools"

export const TemplateWithHeader = () => {
  return(
    <section className="main_body_wrapper with_sidebar">
      <header className="project_header">
        <div className="container-fluid vCenter">
          <div className="header_right">
            <nav className="main_menu">
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
        <nav className="project_logo_">
          <ProjectLogo IconLogo={false} link={true} linkTo="/" className="logo_main" />
          <ProjectLogo IconLogo={true} link={true} linkTo="/" className="logo_slim" />
        </nav>
        <nav className="main_menu">
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/resources">Other Resources</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main_container"><Outlet /></main>
      <Footer />
    </section>
  )
}