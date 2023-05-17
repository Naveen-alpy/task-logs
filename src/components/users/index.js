import { useState } from "react";
import { SvgIcon } from "@mui/material";
import ReactDatePicker from "react-datepicker"
import { ReactComponent as editProfileIcon } from "../../assets/icons/camera-fill.svg";
import profileBanner from "../../assets/images/banner-1.jpg";
import profileImage from "../../assets/images/f4.jpg";
export const UserProfile = () => {
  const [startDate,setStartDate] = useState(new Date());
  const defaultUserInfo = [
    {
      duiInfo: "Name",
      duiValue: "Resource Name"
    },{
      duiInfo: "Mobile",
      duiValue: "+(91) 9496 332 618"
    },{
      duiInfo: "E-mail",
      duiValue: "naveen.techintl@gmail.com"
    },{
      duiInfo: "Joining Date",
      duiValue: "10 Feb 2016"
    }
  ]
  return (
    <>
      <figure className="profile_banner" style={{backgroundImage:`url(${profileBanner})`}}></figure>
      <section className="user_profile_wrapper tw-row sm-gtr">
        <aside className="usr_prfl_sidebar">
          <div className="white-box center">
            <figure className="user_avatar">
              <div className="image_wrapper"><img src={profileImage} alt="" /></div>
              <div className="upload_file">
                <input type="file" id="uploadPic" />
                <label htmlFor="uploadPic" className="vhCenter"><SvgIcon component={editProfileIcon} inheritViewBox sx={{fontSize: 14}} /></label>
              </div>
            </figure>
            <header className="center user_name">
              Resource Name
              <small className="clear color-text-off">Senior Developer</small>
            </header>
          </div>
          <div className="white-box">
            <header className="user_name">Info</header>
            <ul className="dflt_user_info">
              {defaultUserInfo.map((usrInfo,index) => (
                <li className="dFlex" key={index}>
                  <strong className="dui_info">{usrInfo.duiInfo}</strong>
                  <div className="dui_value">{usrInfo.duiValue}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="white-box">
            <header className="user_name">Skill Sets</header>
            <div className="dflt_key_skills dFlex">
              <span>HTML</span><span>CSS</span><span>jQuery</span><span>SCSS</span><span>php</span><span>Photoshop</span><span>Illustrator</span>
            </div>
          </div>
        </aside>
        <main className="usr_prfl_content thin-border-radius">
          <div className="white-box">
            <header className="project_heading_widget p-b-0">
              <h2 className="heading_title size-xxs tt-none fw-regular">Personal Details</h2>
            </header>
            <div className="tw-row">
              <div className="tw-col-xl-6">
                <div className="input-holder">
                  <label className="placeholder_lab">Name*</label>
                  <input type="type" className="form-elements" value="Naveen" />
                </div>
              </div>
              <div className="tw-col-xl-3 tw-col-md-6">
                <div className="input-holder">
                  <label className="placeholder_lab">Last Name</label>
                  <input type="type" className="form-elements" value="S" />
                </div>
              </div>
              <div className="tw-col-xl-3 tw-col-md-6">
                <div className="input-holder">
                  <label className="placeholder_lab">DOB*</label>
                  <ReactDatePicker className="form-elements" selected={startDate} onChange={(date) => setStartDate(date)} selectsStart dateFormat="MMM d, yyyy" peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" />
                </div>
              </div>
              <div className="tw-col-md-6">
                <div className="input-holder">
                  <label className="placeholder_lab">E-mail*</label>
                  <input type="email" className="form-elements" />
                </div>
              </div>
              <div className="tw-col-md-6">
                <div className="input-holder">
                  <label className="placeholder_lab">Phone*</label>
                  <input type="tel" className="form-elements" />
                </div>
              </div>
            </div>

            <header className="project_heading_widget p-b-0 m-t-20">
              <h2 className="heading_title size-xxs tt-none fw-regular">Team Details</h2>
            </header>
            <div className="tw-row">
              <div className="tw-col-md-4">
                <div className="input-holder">
                  <label className="placeholder_lab">Role*</label>
                  <select>
                    <option>-- Select --</option>
                    <option>Project Manager</option>
                    <option>Team Lead</option>
                    <option selected>Senior</option>
                    <option>Intermediate</option>
                    <option>Junior</option>
                    <option>Trainee</option>
                  </select>
                </div>
              </div>
              <div className="tw-col-md-4">
                <div className="input-holder">
                  <label className="placeholder_lab">Department*</label>
                  <select>
                    <option>-- Select --</option>
                    <option>Creatives</option>
                    <option selected>Developing</option>
                    <option>Programming</option>
                    <option>QA</option>
                  </select>
                </div>
              </div>
              <div className="tw-col-md-4">
                <div className="input-holder">
                  <label className="placeholder_lab">Team*</label>
                  <select>
                    <option>-- Select --</option>
                    <option selected>OASIS</option>
                    <option>BEACON</option>
                  </select>
                </div>
              </div>
            </div>
            <header className="project_heading_widget p-b-0 m-t-20">
              <h2 className="heading_title size-xxs tt-none fw-regular">Skill Sets</h2>
            </header>
            <div className="tw-row">
              <div className="tw-col-">
                <div className="input-holder">
                  <label className="placeholder_lab">Update Keywords</label>
                  <input type="type" className="form-elements" value="" />
                </div>
              </div>
              <div className="tw-col-">
                <nav className="project-btn-wrap hRight">
                  <input type="submit" className="project-btn" value="Update" />
                </nav>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}