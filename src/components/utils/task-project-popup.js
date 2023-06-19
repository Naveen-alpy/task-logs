import { useState } from "react";
import { CloseIcon, TicketIcon, ProjctIcon, TrashFilled } from "./icons";
import { TaskCategories, ProjectCategories, TaskPriorities, DevelopingResource, ProgramingResource } from "./select-options";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { Controller, useForm } from "react-hook-form";

export const TaskProjectPopupWrap = ({type="task", hidePopup}) => {
  // Handle Forms
  const {control,register, formState: {errors}, handleSubmit} = useForm({
    defaultValues: {
      project_name: "",
      project_owner: "",
      task_cat: "",
      task_refNo: "",
      task_refUrl: "",
      project_cat: "",
      project_tktUrl: "",
      leadDev: "",
      leadPrgrm: "",
      othrDev: "",
      othrPrg: "",
      task_est_hours: "",
      task_priority: "",
      task_ticket: ""
    }
  })
  const onSubmit = data => console.log(data);
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

    // Append Fields
  const [appendDocs, setAppendDocs] = useState(1);
  const handleAddDiv = () => {
    setAppendDocs(appendDocs + 1);
  }
  const removeNode = (idx) => document.getElementById(`id-${idx}`).remove();

  return (
    <div className="popOverWrapper showPopOver">
        <section className="popContentWrapper">
          <button type="button" className="vhCenter close_wrap" onClick={()=> {hidePopup();}}><CloseIcon size="26px" /></button>
          <form className="form_wrapper form_sm_fields" onSubmit={handleSubmit(onSubmit)}>
            {type === "task" &&
              <div className="tsk_grid input-holder">
                <header className="project_heading_widget p-b-10">
                  <h3 className="heading_title size-xxs tt-none vCenter">
                    <TicketIcon size="20px" />Create/Assign Task
                  </h3>
                </header>
              </div>
            }
            {type === "project" &&
              <div className="prjct_grid input-holder">
                <header className="project_heading_widget p-b-10">
                  <h3 className="heading_title size-xxs tt-none vCenter">
                    <ProjctIcon size="20px" />Create/Assign Project
                  </h3>
                </header>
              </div>
            }
            <div className="input-holder">
              <div className="tw-row xs-gtr">
                <div className="tw-col-60">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Project Name</label>
                    <input type="text" className="form-elements"
                      {...register("project_name", {required: "Enter the name of the Project"})}
                      aria-invalid={errors.project_name ? "true" : "false"}
                    />
                    {errors.project_name && <span className="error" role="alert">{errors.project_name?.message}</span>}
                  </div>
                </div>
                <div className="tw-col-40">
                  <div className="input-holder">
                    <label htmlFor="" className="tp_label">Owner</label>
                    <input type="text" className="form-elements"
                      {...register("project_owner", {required: "Add Project Owner"})}
                      aria-invalid={errors.project_owner ? "true" : "false"}
                    />
                    {errors.project_owner && <span className="error" role="alert">{errors.project_owner?.message}</span>}
                  </div>
                </div>
              </div>
            </div>
            {type === "task" && <>
              <div className="input-holder">
                <div className="tw-row xs-gtr">
                  <div className="tw-col-60">
                    <div className="input-holder">
                      <label htmlFor="" className="tp_label">Type/Category</label>
                      <select
                        {...register("task_cat", {required: "Select Task Category"})}
                        aria-invalid={errors.task_cat ? "true" : "false"}
                      >
                        <option value="" disabled>-- Select --</option>
                        <TaskCategories />
                      </select>
                      {errors.task_cat && <span className="error" role="alert">{errors.task_cat?.message}</span>}
                    </div>
                  </div>
                  <div className="tw-col-40">
                    <div className="input-holder">
                      <label htmlFor="" className="tp_label">Ref: No</label>
                      <input type="text" className="form-elements"
                        {...register("task_refNo", {required: "Update Task's Reference No"})}
                        aria-invalid={errors.task_refNo ? "true" : "false"}
                      />
                      {errors.task_refNo && <span className="error" role="alert">{errors.task_refNo?.message}</span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-holder">
                <label htmlFor="" className="tp_label">URL</label>
                <input type="url" className="form-elements"
                  {...register("task_refUrl", {required: "Provide Task Reference URL"})}
                  aria-invalid={errors.task_refUrl ? "true" : "false"}
                />
                {errors.task_refUrl && <span className="error" role="alert">{errors.task_refUrl?.message}</span>}
              </div>
            </>}
            {type === "project" && <>
              <div className="input-holder">
                <label htmlFor="" className="tp_label">Type/Category</label>
                <select
                  {...register("project_cat", {required: "Select Project Category"})}
                  aria-invalid={errors.project_cat ? "true" : "false"}
                >
                  <option value="" disabled>-- Select --</option>
                  <ProjectCategories />
                </select>
                {errors.project_cat && <span className="error" role="alert">{errors.project_cat?.message}</span>}
              </div>
              <div className="input-holder">
                <label htmlFor="" className="tp_label p-b-0">Ticket</label>
                <input type="url" className="form-elements"
                  {...register("project_tktUrl", {required: "Update Project Ticket URL"})}
                  aria-invalid={errors.project_tktUrl ? "true" : "false"}
                />
                {errors.project_tktUrl && <span className="error" role="alert">{errors.project_tktUrl?.message}</span>}
              </div>
            </>}
            <div className="input-holder">
              <label htmlFor="" className="tp_label p-b-0">Leading Resource</label>
              <div className="tw-row xs-gtr">
                <div className="tw-col-6">
                  <select
                    {...register("leadDev", {required: "Select Leading Developer"})}
                    aria-invalid={errors.leadDev ? "true" : "false"}
                  >
                    <option value="" disabled>Developer</option>
                    <DevelopingResource />
                  </select>
                  {errors.leadDev && <span className="error" role="alert">{errors.leadDev?.message}</span>}
                </div>
                <div className="tw-col-6">
                  <select
                    {...register("leadPrgrm", {required: "Select Leading Programming"})}
                    aria-invalid={errors.leadPrgrm ? "true" : "false"}
                  >
                    <option value="" disabled>Programmer</option>
                    <ProgramingResource />
                  </select>
                  {errors.leadPrgrm && <span className="error" role="alert">{errors.leadPrgrm?.message}</span>}
                </div>
              </div>
            </div>
            <div className="input-holder">
              <label htmlFor="" className="tp_label p-b-0">Select Resource</label>
              <div className="tw-row xs-gtr">
                <div className="tw-col-6">
                  <MultiSelect name="othrDev" options={devOptions} value={devselected} onChange={setDevselected} labelledBy="-- Developer --" />
                </div>
                <div className="tw-col-6">
                  <MultiSelect name="othrPrg" options={prgrmOptions} value={prgrselected} onChange={setPrgrselected} labelledBy="-- Programmer --" />
                </div>
              </div>
            </div>
            <div className="input-holder">
              <label htmlFor="" className="tp_label">Additional Requirements</label>
              <div className="append_wrap">
                {Array.from(Array(appendDocs)).map((item,idx) => (
                  <div className="vCenter append_group" key={idx} id={`id-${idx}`}>
                    <div className="custom-radio inline-cols p-b-10">
                      <div><input type="radio" name="addReq" id="addDoc" /><label htmlFor="addDoc"><i></i>Doc</label></div>
                      <div><input type="radio" name="addReq" id="addDrv" /><label htmlFor="addDrv"><i></i>G-Drive</label></div>
                      <div><input type="radio" name="addReq" id="addTckt" /><label htmlFor="addTckt"><i></i>Ticket</label></div>
                    </div>
                    <div className="input-holder">
                      <input type="text" defaultValue="" className="form-elements" name="" id="" />
                    </div>
                    <nav className="btn_group"><button type="button" onClick={()=>removeNode(idx)}><TrashFilled size="18px" /></button></nav>
                  </div>
                ))}
                <nav className="add-docs vhCenter"><button type="button" onClick={handleAddDiv}>Add</button></nav>
              </div>
            </div>
            <div className="input-holder">
              <label htmlFor="" className="tp_label">Select Date Range</label>
              <ReactDatePicker className="form-elements" selected={startDate} onChange={onChanged} startDate={startDate} endDate={endDate} dateFormat="MMM dd, yyyy" selectsRange showIcon />
            </div>
            {type === "task" && <>
              <div className="input-holder">
                <div className="tw-row sm-gtr">
                  <div className="tw-col-40">
                    <div className="input-holder">
                      <label htmlFor="" className="tp_label">Est. Time</label>
                      <div className="form-elements fx-placeholder vCenter no-wrap">
                        <input type="email" id="en_mail" className="input_field" {...register("task_est_hours")} />
                        <label htmlFor="en_mail" className="mailExt">hrs</label>
                      </div>
                    </div>
                  </div>
                  <div className="tw-col-60">
                    <div className="input-holder">
                      <label htmlFor="" className="tp_label">Priority</label>
                      <select
                        {...register("task_priority", {required: "Select Priority of the Task"})}
                        aria-invalid={errors.task_priority ? "true" : "false"}
                      >
                        <option value="" disabled>-- Select --</option>
                        <TaskPriorities />
                      </select>
                      {errors.task_priority && <span className="error" role="alert">{errors.task_priority?.message}</span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-holder">
                <label htmlFor="" className="tp_label">Time &amp; Note update task</label>
                <input type="url" className="form-elements"
                  {...register("task_ticket", {required: "Create Task for updating Time & Notes"})}
                  aria-invalid={errors.task_ticket ? "true" : "false"}
                />
                {errors.task_ticket && <span className="error" role="alert">{errors.task_ticket?.message}</span>}
              </div>
            </>}
            <nav className="project-btn-wrap"><button type="submit" className="project-btn btn-sm">Create</button></nav>
          </form>
        </section>
        <div className="close_overlay close_wrap" onClick={()=> {hidePopup();}}></div>
      </div>
  )
}