import { Link } from "react-router-dom"
import { AddIcon, CloseIcon, LoginIcon, PencileditFilled } from "../utils/icons"
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";

export const FtpLogins = () => {
  // Form Handling
  const {register, formState: {errors}, handleSubmit} = useForm({
    defaultValues: {
      project_name: "",
      stgUrl: "",
      stg_FHost: "",
      stg_FPort: "",
      stg_FUsername: "",
      stg_FPassword: "",
      stg_admnUrl: "",
      stg_AUsername: "",
      stg_APassword: "",
      live_Url: "",
      live_FHost: "",
      live_FPort: "",
      live_FUsername: "",
      live_FPassword: "",
      live_admnUrl: "",
      live_AUsername: "",
      live_APassword: "",
    }
  });
  const onSubmit = data => console.log(data);
  // Create Tasks/Projects Click Events
  const [showPopOver, setShowPopOver] = useState(false);
  const showPopup = () => {
    setShowPopOver(true)
  }
  const hidePopup = () => {
    setShowPopOver(false)
  }

  // Staging & Live Button Click Events
  const [showStagingTab, setShowStagingTab] = useState(true);
  const [showLiveTab, setShowLiveTab] = useState(false);
  const stLvToggleBtn = (type) => {
    if(type === "staging") {
      setShowStagingTab(true)
      setShowLiveTab(false);
    }
    if(type === "live") {
      setShowLiveTab(true);
      setShowStagingTab(false);
    }
  }

  // Table Heads
  const loginTableHeads = [
    {
      name: 'Type',
      selector: row => (<span className={`btn_tasks full-width ${row.prjctCat.replace(/ +/g, '-').toLowerCase()}`}>{row.prjctCat}</span>),
      maxWidth: '90px',
      minWidth: '50px',
      sortable: true
    }, {
      name: 'Project Name',
      selector: row => (<strong>{row.projectName}</strong>),
      sortable: true,
      minWidth: '300px'
    }, {
      name: 'URL',
      selector: row => (<nav className="tbl_links"><Link to={row.stageLink} className="tble_stge">Staging</Link><br /><Link to={row.liveLink} className="tble_live">Live</Link></nav>),
      maxWidth: '80px'
    }, {
      name: 'FTP: Host',
      selector: row => (<div><span className="tble_stge">{row.stgFtpHost}</span><br /><span className="tble_live">{row.liveFtpHost}</span></div>),
      sortable: true
    }, {
      name: 'User Name',
      selector: row => (<div><span className="tble_stge">{row.stgFtpUsr}</span><br /><span className="tble_live">{row.liveFtpUsr}</span></div>)
    }, {
      name: 'Password',
      selector: row => (<div><span className="tble_stge">{row.stgFtpPas}</span><br /><span className="tble_live">{row.liveFtpPas}</span></div>)
    }, {
      name: 'Port',
      selector: row => (<div><span className="tble_stge">{row.stgFtpPort}</span><br /><span className="tble_live">{row.liveFtpPort}</span></div>),
      sortable: true,
      minWidth: '50px',
      maxWidth: '80px'
    }, {
      name: 'Admin',
      selector: row => (<nav className="tbl_links"><Link to={row.stgAdmnUrl} className="tble_stge">Staging</Link><br /><Link to={row.liveAdmnUrl} className="tble_live">Live</Link></nav>),
      maxWidth: '80px'
    }, {
      name: 'User Name',
      selector: row => (<div><span className="tble_stge">{row.stgAdmnUsr}</span><br /><span className="tble_live">{row.liveAdmnUsr}</span></div>)
    }, {
      name: 'Password',
      selector: row => (<div><span className="tble_stge">{row.stgAdmnPas}</span><br /><span className="tble_live">{row.liveAdmnPas}</span></div>)
    }, {
      name: '',
      selector: row => (<button className="btns_icons_edit no-bg" onClick={() => {showPopup();}}><PencileditFilled size="18px" /></button>),
      maxWidth: '50px',
      minWidth: '50px'
    }
  ]
  // Login APIs
  const [loginTableData, setLoginTableData] = useState([
    {
      id: 1,
      projectName: "Elite Med Spa",
      prjctCat: "CWP",
      stageLink: "http://elitemedspa.wysework.net/",
      stgFtpHost: "163.1.01.125",
      stgFtpPort: "222",
      stgFtpUsr: "username",
      stgFtpPas: "pass$125rd",
      stgAdmnUrl: "http://elitemedspa.wysework.net/wp-admin",
      stgAdmnUsr: "admin",
      stgAdmnPas: "#kjahsdf9w9#$",
      liveLink: "https://www.elitemedspa.ca/",
      liveFtpHost: "163.1.01.125",
      liveFtpPort: "2153",
      liveFtpUsr: "username",
      liveFtpPas: "pass$125rd",
      liveAdmnUrl: "https://www.elitemedspa.ca/wp-admin",
      liveAdmnUsr: "admin",
      liveAdmnPas: "#kjahsdf9w9#$"
    }, {
      id: 2,
      projectName: "Bourne Canvas Art",
      prjctCat: "CRO",
      stageLink: "http://elitemedspa.wysework.net/",
      stgFtpHost: "163.1.01.125",
      stgFtpPort: "222",
      stgFtpUsr: "username",
      stgFtpPas: "pass$125rd",
      stgAdmnUrl: "http://elitemedspa.wysework.net/wp-admin",
      stgAdmnUsr: "admin",
      stgAdmnPas: "#kjahsdf9w9#$",
      liveLink: "",
      liveFtpHost: "",
      liveFtpPort: "",
      liveFtpUsr: "",
      liveFtpPas: "",
      liveAdmnUrl: "",
      liveAdmnUsr: "",
      liveAdmnPas: ""
    }, {
      id: 3,
      projectName: "Benczik Kavanagh",
      prjctCat: "LP",
      stageLink: "http://landing.bkteam.wysework.net/",
      stgFtpHost: "163.1.01.125",
      stgFtpPort: "222",
      stgFtpUsr: "username",
      stgFtpPas: "pass$125rd",
      stgAdmnUrl: "",
      stgAdmnUsr: "",
      stgAdmnPas: "",
      liveLink: "",
      liveFtpHost: "",
      liveFtpPort: "",
      liveFtpUsr: "",
      liveFtpPas: "",
      liveAdmnUrl: "",
      liveAdmnUsr: "",
      liveAdmnPas: ""
    }, {
      id: 4,
      projectName: "Benczik Kavanagh",
      prjctCat: "WTG",
      stageLink: "http://landing.bkteam.wysework.net/",
      stgFtpHost: "163.1.01.125",
      stgFtpPort: "222",
      stgFtpUsr: "username",
      stgFtpPas: "pass$125rd",
      stgAdmnUrl: "",
      stgAdmnUsr: "",
      stgAdmnPas: "",
      liveLink: "",
      liveFtpHost: "",
      liveFtpPort: "",
      liveFtpUsr: "",
      liveFtpPas: "",
      liveAdmnUrl: "",
      liveAdmnUsr: "",
      liveAdmnPas: ""
    }, {
      id: 5,
      projectName: "Elite Med Spa",
      prjctCat: "E-Com",
      stageLink: "http://elitemedspa.wysework.net/",
      stgFtpHost: "163.1.01.125",
      stgFtpPort: "222",
      stgFtpUsr: "username",
      stgFtpPas: "pass$125rd",
      stgAdmnUrl: "http://elitemedspa.wysework.net/wp-admin",
      stgAdmnUsr: "admin",
      stgAdmnPas: "#kjahsdf9w9#$",
      liveLink: "https://www.elitemedspa.ca/",
      liveFtpHost: "163.1.01.125",
      liveFtpPort: "2153",
      liveFtpUsr: "username",
      liveFtpPas: "pass$125rd",
      liveAdmnUrl: "https://www.elitemedspa.ca/wp-admin",
      liveAdmnUsr: "admin",
      liveAdmnPas: "#kjahsdf9w9#$"
    }
  ])

  return(
    <>
      <div className="header_strip vCenter m-b-30">
        <header className="project_heading_widget"><h1 className="heading_title size-xs tt-none">Login Credentials</h1></header>
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>Logins</span>
        </nav>
      </div>

      <section className="white-box">
        <div className="vCenter p-b-20">
          <ul className="tabs_list vCenter m-b-0">
            <li className="active_tab">
              <header className="project_heading_widget vCenter">
                <LoginIcon size="24px" />
                <h2 className="heading_title size-xs tt-none fw-regular ff-poppins">FTP & Admin Details</h2>
              </header>
            </li>
          </ul>
          <button type="button" className="vCenter addtasks m-l-auto" onClick={() => {showPopup();}}>
            <AddIcon size="14px" /> Add New Credentials
          </button>
        </div>
      </section>
      <DataTable columns={loginTableHeads} data={loginTableData} striped={true} fixedHeader />

      <div className={`popOverWrapper${showPopOver ? " showPopOver" : ""}`}>
        <section className="popContentWrapper">
          <button type="button" className="vhCenter close_wrap" onClick={()=> {hidePopup();}}><CloseIcon size="26px" /></button>
          <form className="form_wrapper form_sm_fields" onSubmit={handleSubmit(onSubmit)}>
            <div className="prjct_grid">
              <header className="project_heading_widget">
                <h3 className="heading_title size-xxs tt-none vCenter">
                  <LoginIcon size="20px" /> Add Login Credentials
                </h3>
              </header>
              <div className="input-holder">
                <label htmlFor="" className="tp_label">Project Name</label>
                <input type="text" className="form-elements" 
                  {...register("project_name", {required: "Enter the Project Name"})}
                  aria-invalid={errors.project_name ? "true" : "false"}
                />
                {errors.project_name && <span className="error" role="alert">{errors.project_name?.message}</span>}
              </div>
            </div>
            <header className="stLve_title vCenter m-b-10">
              <strong className="fs-18 color-primary">Staging Credentials</strong>
              <button type="button" className="m-l-auto m-r-10 btns_icons_edit no-bg" onClick={() => {stLvToggleBtn("staging")}}><AddIcon size="18px" /></button>
            </header>
            {showStagingTab && <>
              <div className="input-holder">
                <label htmlFor="" className="tp_label">Url</label>
                <input type="url" className="form-elements" {...register("stgUrl")} />
              </div>
              <p className="m-b-0"><strong>FTP</strong></p>
              <div className="tw-row xs-gtr">
                <div className="tw-col-75">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Host</label>
                    <input type="text" className="form-elements" {...register("stg_FHost")} />
                  </div>
                </div>
                <div className="tw-col-25">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Port</label>
                    <input type="text" className="form-elements" {...register("stg_FPort")} />
                  </div>
                </div>
                <div className="tw-col-6">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Username</label>
                    <input type="text" className="form-elements" {...register("stg_FUsername")} />
                  </div>
                </div>
                <div className="tw-col-6">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Password</label>
                    <input type="text" className="form-elements" {...register("stg_FPassword")} />
                  </div>
                </div>
              </div>
              <p className="m-b-0"><strong>Admin</strong></p>
              <div className="tw-row xs-gtr m-b-10">
                <div className="tw-col-">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">URL</label>
                    <input type="url" className="form-elements" {...register("stg_admnUrl")} />
                  </div>
                </div>
                <div className="tw-col-6">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Username</label>
                    <input type="text" className="form-elements" {...register("stg_AUsername")} />
                  </div>
                </div>
                <div className="tw-col-6">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Password</label>
                    <input type="text" className="form-elements" {...register("stg_APassword")} />
                  </div>
                </div>
              </div>
            </>}

            <header className="stLve_title vCenter m-b-10">
              <strong className="fs-18 color-primary">Live Credentials</strong>
              <button type="button" className="m-l-auto m-r-10 btns_icons_edit no-bg" onClick={() => {stLvToggleBtn("live")}}><AddIcon size="18px" /></button>
            </header>
            {showLiveTab && <>
              <div className="input-holder">
                <label htmlFor="" className="tp_label">Url</label>
                <input type="url" className="form-elements" {...register("live_Url")} />
              </div>
              <p className="m-b-0"><strong>FTP</strong></p>
              <div className="tw-row xs-gtr">
                <div className="tw-col-75">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Host</label>
                    <input type="text" className="form-elements" {...register("live_FHost")} />
                  </div>
                </div>
                <div className="tw-col-25">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Port</label>
                    <input type="text" className="form-elements" {...register("live_FPort")} />
                  </div>
                </div>
                <div className="tw-col-6">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Username</label>
                    <input type="text" className="form-elements" {...register("live_FUsername")} />
                  </div>
                </div>
                <div className="tw-col-6">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Password</label>
                    <input type="text" className="form-elements" {...register("live_FPassword")} />
                  </div>
                </div>
              </div>
              <p className="m-b-0"><strong>Admin</strong></p>
              <div className="tw-row xs-gtr m-b-20">
                <div className="tw-col-">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">URL</label>
                    <input type="url" className="form-elements" {...register("live_AdmnUrl")} />
                  </div>
                </div>
                <div className="tw-col-6">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Username</label>
                    <input type="text" className="form-elements" {...register("live_AUsername")} />
                  </div>
                </div>
                <div className="tw-col-6">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Password</label>
                    <input type="text" className="form-elements" {...register("live_APassword")} />
                  </div>
                </div>
              </div>
            </>}
            
            <nav className="project-btn-wrap"><button type="submit" className="project-btn btn-sm">Add</button></nav>
          </form>
        </section>
        <div className="close_overlay close_wrap" onClick={()=> {hidePopup();}}></div>
      </div>
    </>
  )
}