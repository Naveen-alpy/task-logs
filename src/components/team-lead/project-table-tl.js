import { Link } from "react-router-dom"
import { ExpandMoreOutlined } from '@mui/icons-material';
import { useState } from "react";
import pImg1 from "../../assets/images/avatar/img-1.jpg";
import pImg2 from "../../assets/images/avatar/img-2.jpg";
import pImg3 from "../../assets/images/avatar/img-3.jpg";
import pImg4 from "../../assets/images/avatar/img-4.jpg";
import moment from "moment-timezone";
import { TicketIcon } from "../utils/icons";

export const ResourceProjectTableTL = () => {
  const [classVal, setClassVal] = useState("Not Started");

  const updateStatus = (status,id) => {
    const updatedTabledata = prjctTableData.map(el => {return el.id === id ? {...el,status} : el})
    SetPrjctTableData(updatedTabledata)
    setClassVal(status)
  }

  const [prjctTableData, SetPrjctTableData] = useState([
    {
      id: 1,
      prjctTitle: "Northwood Mortgage",
      prjctLink: "https://www.google.co.in/",
      prjctType: "Custom Web Project",
      pTypeSlug: "cwp",
      prjctTicketLink: "https://www.google.co.in/",
      prjctOwner: "Biju",
      prjctOwnImg: pImg1,
      prjctLeads: "Leading",
      startDate: "31 May 2023",
      endDate: "01 Jul 2023",
      prjctLaunch: "",
      shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      otherTeam: [pImg2, pImg3, pImg4]
    }, {
      id: 2,
      prjctTitle: "Elite Med Spa",
      prjctLink: "https://www.google.co.in/",
      prjctType: "Landing Page",
      pTypeSlug: "lp",
      prjctTicketLink: "https://www.google.co.in/",
      prjctOwner: "Jibin",
      prjctOwnImg: pImg3,
      prjctLeads: "Supporting",
      startDate: "20 May 2023",
      endDate: "26 May 2023",
      prjctLaunch: "31 May 2023",
      shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      otherTeam: [pImg4]
    }, {
      id: 3,
      prjctTitle: "PearlMD Rejuvenation",
      prjctLink: "https://www.google.co.in/",
      prjctType: "Website To Go",
      pTypeSlug: "wtg",
      prjctTicketLink: "https://www.google.co.in/",
      prjctOwner: "Renjith",
      prjctOwnImg: pImg4,
      prjctLeads: "Supporting",
      startDate: "18 May 2023",
      endDate: "08 Jun 2023",
      prjctLaunch: "2 Jun 2023",
      shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      otherTeam: [pImg2, pImg1]
    }, {
      id: 4,
      prjctTitle: "Best Pro Landscape",
      prjctLink: "https://www.google.co.in/",
      prjctType: "Conversion Rate Optimization",
      pTypeSlug: "cro",
      prjctTicketLink: "https://www.google.co.in/",
      prjctOwner: "Sarath",
      prjctOwnImg: pImg1,
      prjctLeads: "Supporting",
      startDate: "01 Jun 2023",
      endDate: "25 Jun 2023",
      prjctLaunch: "",
      shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      otherTeam: [pImg3, pImg1]
    }, {
      id: 5,
      prjctTitle: "Swani Can Immigration",
      prjctLink: "https://www.google.co.in/",
      prjctType: "E-Commerce",
      pTypeSlug: "ecom",
      prjctTicketLink: "https://www.google.co.in/",
      prjctOwner: "Saranya",
      prjctOwnImg: pImg3,
      prjctLeads: "Leading",
      startDate: "30 Apr 2023",
      endDate: "27 May 2023",
      prjctLaunch: "1 Jun 2023",
      shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      otherTeam: [pImg2, pImg4]
      /* team:[
        {
          id: "",
          memberName:"",
          memberImg: ""
        }
      ] */
    }
  ])
  return(
    <section className="tw-row sm-gtr">
      {prjctTableData.map((ptData) => (
        <div key={ptData.id} className="tw-col-sm-6 tw-col-lg-4 tw-col-xl-3">
          <article className="project_grid">
            <header className="project_name">
              <Link to={ptData.prjctLink} target="_blank" rel="nofollow noopener">{ptData.prjctTitle}</Link>
              <small className="clear color-text-off"><Link className="vCenter prj_ticket" to={ptData.prjctTicketLink} target="_blank" rel="nofollow noopener">
                <TicketIcon size="16px" /> {ptData.prjctType}
              </Link></small>
              <div className="launch_wrap">
                {ptData.prjctLaunch && <small className="launch_date">
                  <span className="text">Launched on {ptData.prjctLaunch}</span>
                  <span className="start"></span>
                  <span className="launched" style={{"width": `${Math.round((moment().diff(moment(ptData.prjctLaunch,"DD MMM YYYY"),'days')/30)*100)}%`}}></span>
                </small>}
              </div>
            </header>
            <div className='user_profile vCenter'>
              <figure className='vhCenter profileImg'><img height="30px" width="30px" src={ptData.prjctOwnImg} alt={ptData.prjctOwner} /></figure>
              <div className="user_profile-info">{ptData.prjctOwner}<small className="clear color-text-off">{ptData.startDate}</small></div>
              <span className={`user_role ${ptData.pTypeSlug} ${ptData.prjctLeads === "Leading" ? "leading" : "supporting"}`}><span className="text">{ptData.prjctLeads}</span></span>
            </div>
            <aside className="color-text-off">{ptData.shortDesc}</aside>
            <div className="other_teams vCenter">
              <header className="sub-title">Team</header>
              <div className='user_profile vCenter'>
                {
                  ptData.otherTeam.map((el,i) =>{
                    return <figure className='vhCenter profileImg' key={i}><img height="30px" width="30px" src={el} alt="" /></figure>
                  })
                }
              </div>
            </div>
            <div className="progress_wrapper">
              <div className="progress_bar"><span className={`progress_status ${ptData.pTypeSlug}`} style={{"width": `${
                Math.round(((
                  moment().diff(moment(ptData.startDate,'DD MMM YYYY'),'days')/moment(ptData.endDate,'DD MMM YYYY').diff(moment(ptData.startDate,'DD MMM YYYY'),'days')
                  )*100))
                }%`}}></span></div>
            </div>
            <footer className="project_foot vCenter">
              <small className="due-date">Due : {ptData.endDate}</small><div className="clear"></div>
              <nav className='tasks_btn_wrap m-l-auto'>
                <button type='button' className={`btn_tasks ${classVal.replace(/ +/g, '-').toLowerCase()}`}>{classVal} <ExpandMoreOutlined fontSize='small' /></button>
                <ul>
                  <li onClick={() => {updateStatus("Working On",prjctTableData.id)}}>Working On</li>
                  <li onClick={() => {updateStatus("On Hold",prjctTableData.id)}}>On Hold</li>
                  <li onClick={() => {updateStatus("Under Review",prjctTableData.id)}}>Under Review</li>
                  <li onClick={() => {updateStatus("Pending",prjctTableData.id)}}>Pending</li>
                  <li onClick={() => {updateStatus("Complete",prjctTableData.id)}}>Complete</li>
                </ul>
              </nav>
            </footer>
          </article>
        </div>
      ))}
    </section>
  )
}