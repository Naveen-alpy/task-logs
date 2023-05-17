import { SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";
import {ReactComponent as projectIcon} from "../../assets/icons/project-filled.svg";
import {ReactComponent as addIcon} from "../../assets/icons/add-alt.svg";
import {ReactComponent as closeIcon} from "../../assets/icons/close.svg";
import { ProjectCountsTL } from "./projects-count-tl";
import { ResourceProjectTableTL } from "./project-table-tl";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";

export const TeamLeadProjectSummary = () => {
  // Create Tasks/Projects Click Events
  const [showPopOver, setShowPopOver] = useState(false);
  const [showProjectOpt, setShowProjectOpt] = useState(false);
  const showPopup = (type) => {
    if(type === "project"){
      setShowProjectOpt(true)
    }
    setShowPopOver(true)
  }
  const hidePopup = () => {
    setShowProjectOpt(false)
    setShowPopOver(false)
  }


  // Form Options
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChanged = (dates) => {
    const [start,end] = dates;
    setStartDate(start);
    setEndDate(end);
  }
  // Multi Select Options
  const devOptions = [
    {label: "Biju Michael", value: "bijumichael"},{label: "Ranjith MR", value: "ranjithmr"},
    {label: "Freddy Davis", value: "freddydevis"},{label: "Sarath", value: "sarath"},
    {label: "Saranya", value: "saranya"},{label: "Jibin", value: "jibin"},
    {label: "Robin Babu", value: "robinbabu"},{label: "Ajay Kumar", value: "ajaykumar"},
    {label: "Amal PS", value: "amalps"},{label: "Eby PS", value: "ebyps"},
  ]
  const prgrmOptions = [
    {label: "Devina Tijo", value: "devinatijo"},{label: "Radhika K", value: "radhikak"},
    {label: "Salman Sakkariya", value: "salmansakkariya"},{label: "Suhail Sharafudheen", value: "suhailsharafudheen"},
    {label: "Arjun MU", value: "arjunmu"}
  ]
  const [devselected, setDevselected] = useState([]);
  const [prgrselected, setPrgrselected] = useState([]);
  return (
    <>
      <div className="header_strip vCenter m-b-30">
        <header className="project_heading_widget">
          <h1 className="heading_title size-xs tt-none">Dashboard</h1>
        </header>
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>Dashboard</span>
        </nav>
      </div>

      <section className="white-box">
        <div className="vCenter p-b-20">
          <ul className="tabs_list vCenter m-b-0">
            <li className="active_tab">
              <header className="project_heading_widget vCenter">
                <SvgIcon component={projectIcon} inheritViewBox sx={{fontSize:24}} />
                <h2 className="heading_title size-xs tt-none fw-regular ff-poppins">Projects Summary</h2>
              </header>
            </li>
          </ul>
          <button type="button" className="vCenter addtasks m-l-auto" onClick={() => {showPopup('project');}}>
            <SvgIcon component={addIcon} inheritViewBox sx={{fontSize: 14}} />
            Create/Assign Project
          </button>
        </div>
        <ProjectCountsTL />
      </section>

      <section className="project_grid_wrapper"><ResourceProjectTableTL /></section>
      {/* End of Project Section */}

      <div className={`popOverWrapper${showPopOver ? " showPopOver" : ""}`}>
        <section className="popContentWrapper">
          <button type="button" className="vhCenter close_wrap" onClick={()=> {hidePopup();}}><SvgIcon component={closeIcon} inheritViewBox sx={{fontSize: 26}} /></button>
          <form className="form_wrapper form_sm_fields">
            <div className="prjct_grid input-holder">
              <header className="project_heading_widget">
                <h3 className="heading_title size-xxs tt-none vCenter">
                  <SvgIcon component={projectIcon} inheritViewBox sx={{fontSize: 20}} />
                  Create/Assign Project
                </h3>
              </header>
              <div className="input-holder">
                <label for="" className="tp_label">Type/Category</label>
                <select>
                  <option>-- Select --</option>
                  <option>CWP</option><option>LP</option><option>CRO</option><option>WTG</option>
                </select>
              </div>
            </div>
            <div className="input-holder">
              <label for="" className="tp_label p-b-0">Select Resource</label>
              <div className="tw-row xs-gtr">
                <div className="tw-col-6">
                  <MultiSelect options={devOptions} value={devselected} onChange={setDevselected} labelledBy="-- Developer --" />
                </div>
                <div className="tw-col-6">
                  <MultiSelect options={prgrmOptions} value={prgrselected} onChange={setPrgrselected} labelledBy="-- Programmer --" />
                </div>
              </div>
            </div>
            <div className="input-holder">
              <label for="" className="tp_label">Additional Requirements</label>
              <div className="append_wrap">
                <div className="vCenter append_group">
                  <div className="custom-radio inline-cols p-b-10">
                    <div><input type="radio" name="addReq" id="addDoc" /><label for="addDoc"><i></i>Doc</label></div>
                    <div><input type="radio" name="addReq" id="addDrv" /><label for="addDrv"><i></i>G-Drive</label></div>
                    <div><input type="radio" name="addReq" id="addTckt" /><label for="addTckt"><i></i>Ticket</label></div>
                  </div>
                  <div className="input-holder">
                    <input type="text" value="" className="form-elements" name="" id="" />
                  </div>
                  <nav className="btn_group"></nav>
                </div>
              </div>
            </div>
            <div className="input-holder">
              <label for="" className="tp_label">Select Date Range</label>
              <ReactDatePicker className="form-elements" selected={startDate} onChange={onChanged} startDate={startDate} endDate={endDate} dateFormat="MMM dd, yyyy" selectsRange showIcon />
            </div>
            <div className="input-holder">
              <div className="tw-row sm-gtr">
                <div className="tw-col-40">
                  <div className="input-holder">
                    <label for="" className="tp_label">Est. Time</label>
                    <div className="form-elements fx-placeholder vCenter no-wrap">
                      <input type="email" id="en_mail" className="input_field" />
                      <label for="en_mail" className="mailExt">hrs</label>
                    </div>
                  </div>
                </div>
                <div className="tw-col-60">
                  <div className="input-holder">
                    <label for="" className="tp_label">Priority</label>
                    <select>
                      <option>-- Select --</option>
                      <option>Low</option><option>Medium</option><option>High</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
        <div className="close_overlay close_wrap" onClick={()=> {hidePopup();}}></div>
      </div>
    </>
  )
}