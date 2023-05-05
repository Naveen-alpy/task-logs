import { SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";
import {ReactComponent as ticketIcon} from "../../assets/icons/ticket-filled.svg";
import {ReactComponent as projectIcon} from "../../assets/icons/project-filled.svg";
import {ReactComponent as addIcon} from "../../assets/icons/add-alt.svg";
import {ReactComponent as closeIcon} from "../../assets/icons/close.svg";
import { TasksCountTL } from "./tasks-count-tl";
import { ProjectCountsTL } from "./projects-count-tl";
import { ResourceProjectTable } from "../resource/project-table";
import { ResourceTasksTableTL } from "./tasks-table-tl";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ExpandMoreOutlined } from "@mui/icons-material";

export const TeamLead = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChanged = (dates) => {
    const [start,end] = dates;
    setStartDate(start);
    setEndDate(end);
  }
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
                <SvgIcon component={ticketIcon} inheritViewBox sx={{fontSize:24}} />
                <h2 className="heading_title size-xs tt-none fw-regular ff-poppins">Tasks Summary</h2>
              </header>
            </li>
          </ul>
          <button type="button" className="vCenter addtasks m-l-auto">
            <SvgIcon component={addIcon} inheritViewBox sx={{fontSize: 14}} />
            Create/Assign Task
          </button>
        </div>
        <TasksCountTL />
      </section>
      {/* End of Tasks Section */}

      <section className="white-box no-spacing"><ResourceTasksTableTL /></section>

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
          <button type="button" className="vCenter addtasks m-l-auto">
            <SvgIcon component={addIcon} inheritViewBox sx={{fontSize: 14}} />
            Create/Assign Project
          </button>
        </div>
        <ProjectCountsTL />
      </section>

      <section className="project_grid_wrapper"><ResourceProjectTable /></section>
      {/* End of Project Section */}

      <div className="popOverWrapper">
        <section className="popContentWrapper">
          <button type="button" className="vhCenter close_wrap"><SvgIcon component={closeIcon} inheritViewBox sx={{fontSize: 26}} /></button>
          <form className="form_wrapper form_sm_fields">
            <div className="tsk_grid input-holder">
              <header className="project_heading_widget">
                <h3 className="heading_title size-xxs tt-none">Create/Assign Task</h3>
              </header>
              <div className="input-holder">
                <label for="" className="tp_label">Type/Category</label>
                <select>
                  <option>-- Select --</option>
                  <option>Revision</option><option>SEO</option><option>Content Adding</option>
                </select>
              </div>
            </div>
            <div className="prjct_grid input-holder">
              <header className="project_heading_widget">
                <h3 className="heading_title size-xxs tt-none">Create/Assign Project</h3>
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
                  <nav className='tasks_btn_wrap select_opt'>
                    <button type='button' className="btn_tasks">Leading <ExpandMoreOutlined fontSize='small' /></button>
                    <ul>
                      <li>Renjith</li>
                      <li>Biju</li>
                      <li>Freddy</li>
                      <li>Saranya</li>
                    </ul>
                  </nav>
                </div>
                <div className="tw-col-6">
                  <nav className='tasks_btn_wrap select_opt'>
                    <button type='button' className="btn_tasks">Supporting <ExpandMoreOutlined fontSize='small' /></button>
                    <ul>
                      <li>Renjith</li>
                      <li>Biju</li>
                      <li>Freddy</li>
                      <li>Saranya</li>
                    </ul>
                  </nav>
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
        <div className="close_overlay close_wrap"></div>
      </div>
    </>
  )
}