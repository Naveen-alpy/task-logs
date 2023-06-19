import { Link } from "react-router-dom";
import { TasksCountTL } from "./tasks-count-tl";
import { ResourceTasksTableTL } from "./tasks-table-tl";
import { useState } from "react";
import { AddIcon, TicketIcon } from "../utils/icons";
import { TaskProjectPopupWrap } from "../utils/task-project-popup";

export const TeamLeadTasksSummary = () => {
  const [showPopOver, setShowPopOver] = useState(false);
  const showPopup = () => {
    setShowPopOver(true)
  }
  const hidePopup = () => {
    setShowPopOver(false)
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
                <TicketIcon size="24px" />
                <h2 className="heading_title size-xs tt-none fw-regular ff-poppins">Tasks Summary</h2>
              </header>
            </li>
          </ul>
          <button type="button" className="vCenter addtasks m-l-auto" onClick={()=>{showPopup("task");}}>
            <AddIcon size="14px" />
            Create/Assign Task
          </button>
        </div>
        <TasksCountTL />
      </section>

      <section className="white-box no-spacing"><ResourceTasksTableTL /></section>
      {/* End of Tasks Section */}

      {showPopOver && <TaskProjectPopupWrap hidePopup={() => hidePopup()} type={"task"} />}
    </>
  )
}