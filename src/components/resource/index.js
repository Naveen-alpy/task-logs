import React from "react";

import { Link } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import {ReactComponent as ticketIcon} from "../../assets/icons/ticket-filled.svg";
import {ReactComponent as projectIcon} from "../../assets/icons/project-filled.svg";
import { useState } from "react";
import { TaskCounts } from "./tasks-count";
import { ProjectCounts } from "./projects-count";
import { ResourceTasksTable } from "./tasks-table";
import { ResourceProjectTable } from "./project-table";

export const OtherResources = () => {
  const[activeTab,setActiveTab] = useState("tab1");
  const tabContent_1 = () => {
    setActiveTab("tab1");
  }
  const tabContent_2 = () => {
    setActiveTab("tab2");
  }
  return (
    <section>
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
        <ul className="tabs_list vCenter">
          <li className={activeTab === 'tab1' ? "active_tab" : ""} onClick={tabContent_1}>
            <button type="button">
              <header className="project_heading_widget vCenter">
                <SvgIcon component={ticketIcon} inheritViewBox sx={{fontSize: 26}} />
                <h2 className="heading_title size-xs tt-none fw-regular ff-poppins">Tasks Summary</h2>
              </header>
            </button>
          </li>
          <li className={activeTab === 'tab2' ? "active_tab" : ""} onClick={tabContent_2}>
            <button type="button">
              <header className="project_heading_widget vCenter">
                <SvgIcon component={projectIcon} inheritViewBox sx={{fontSize: 26}} />
                <h2 className="heading_title size-xs tt-none fw-regular ff-poppins">Projects Summary</h2>
              </header>
            </button>
          </li>
        </ul>

        {activeTab === 'tab1' ? <TaskCounts /> : <ProjectCounts />}
      </section>

      <section className="white-box no-spacing">
        <header className="project_heading_widget h-space t-space">
          <h2 className="heading_title size-xxs tt-none fw-regular">Tasks</h2>
        </header>
        <div className="data_table"><ResourceTasksTable /></div>
      </section>

      <header className="project_heading_widget h-space t-space p-b-10">
        <h2 className="heading_title size-xxs tt-none fw-regular">Projects</h2>
      </header>
      <section className="project_grid_wrapper"><ResourceProjectTable /></section>
      
    </section>
  )
}