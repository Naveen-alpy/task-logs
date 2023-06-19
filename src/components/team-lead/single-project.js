import projectBanner from "../../assets/images/project-banner.jpg";
import projectLogo  from "../../assets/images/project-logo.png";
import { CameraFilled, PencileditFilled } from "../utils/icons";
import pImg_1 from "../../assets/images/avatar/img-1.jpg";
import pImg_2 from "../../assets/images/avatar/img-2.jpg";
import pImg_3 from "../../assets/images/avatar/img-3.jpg";
import pImg_4 from "../../assets/images/avatar/img-4.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
export const SingleProjectPage = (props) => {
  const [projectInfo, setProjectInfo] = useState({
    project_name: "Elite Medical Spa",
    project_cat: "CWP",
    project_owner: "Aziz",
    project_tktUrl: "https://workluge.com/#/home",
    employee: [
      {
        id: "12345", empName: "Naveen", empLstName: "S", empDept: "Developing", empImage: pImg_1
      }, {
        id: "12346", empName: "Kiran", empLstName: "S", empDept: "Developing", empImage: pImg_2
      }, {
        id: "12348", empName: "Jibin", empLstName: "S", empDept: "Developing", empImage: pImg_4
      }, {
        id: "12350", empName: "Saranya", empLstName: "S", empDept: "Developing", empImage: pImg_2
      }, {
        id: "12359", empName: "Devina", empLstName: "S", empDept: "Developing", empImage: pImg_3
      }, {
        id: "12612", empName: "Robin", empLstName: "S", empDept: "Developing", empImage: pImg_1
      }
    ]
  })
  return (<>
    <figure className="profile_banner single_project vhCenter" style={{backgroundImage: `url(${projectBanner})`}}>
      <div className="upload_file">
        <input type="file" id="projectBnr_bg" name="projectBnr_bg" />
        <label htmlFor="projectBnr_bg" className="vhCenter"><CameraFilled size="14px" /></label>
      </div>
      <figure className="user_avatar">
        <div className="image_wrapper"><img src={projectLogo} alt="" /></div>
        <div className="upload_file">
          <input type="file" id="project_logo" name="project_logo" />
          <label htmlFor="project_logo" className="vhCenter"><PencileditFilled size="14px" /></label>
        </div>
      </figure>
    </figure>
    <section className="user_profile_wrapper single_project tw-row sm-gtr">
      <aside className="usr_prfl_sidebar">
        <div className="white-box">
          <header className="user_name">Project Info</header>
            <ul className="dflt_user_info">
              <li className="dFlex">
                <strong className="dui_info">Name:</strong>
                <div className="dui_value fw-semibold">{projectInfo.project_name}</div>
              </li>
              <li className="dFlex">
                <strong className="dui_info">Owner:</strong>
                <div className="dui_value fw-semibold">{projectInfo.project_owner}</div>
              </li>
              <li className="dFlex">
                <strong className="dui_info">Type:</strong>
                <div className="dui_value fw-semibold">{projectInfo.project_cat}</div>
              </li>
            </ul>
        </div>
        <div className="white-box">
          <header className="user_name">Employees</header>
            <div className="user_profile dFlex">
              <figure className="profileImg vhCenter"><Link to="" title={projectInfo.empName}><img src={projectInfo.empImage} height="30px" width="30px" alt={projectInfo.empName} /></Link></figure>
            </div>
        </div>
      </aside>
      <main className="usr_prfl_content thin-border-radius">
        <div className="white-box"></div>
      </main>
    </section>
  </>)
}