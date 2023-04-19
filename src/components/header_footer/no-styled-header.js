import { ProjectLogo } from "../utils/tools"

export const HeaderWithLogoOnly = () => {
  return(
    <header className="no-styled-header">
      <div className="container-fluid vhCenter">
        <figure className="project_logo_"><ProjectLogo link={false} IconLogo={true} /></figure>
      </div>
    </header>
  )
}