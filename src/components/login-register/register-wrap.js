import ReactDatePicker from "react-datepicker"
import { Controller, useForm } from "react-hook-form";
import { EmployeeDepartment, EmployeeRole, EmployeeTeam } from "../utils/select-options";

const EntryRegister = () => {
  const {control, register, watch, formState: {errors}, handleSubmit} = useForm({
    defaultValues:{
      usrid: "",
      empName: "",
      empLstName: "",
      empEmail: "",
      empPhone: "",
      empRole: "",
      empDept: "",
      empTeam: "",
      empDob : new Date(),
      empImage: "",
      confirm_userName: "",
      updatePass: ""
    }
  });
  const onSubmit = (data) => {
    let formdata = new FormData();
    console.log(data);
    let requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    fetch("https://asia-south1.gcp.data.mongodb-api.com/app/tasklougeservices-dogac/endpoint/user_register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  const getUserID = watch(['confirm_userName'])
  //const onSubmit = data => console.log(data);
  
  return (
    <>
      <header className="project_heading_widget">
        <h1 className="heading_title tt-none">Register Now</h1>
        <small>Welcome to TaskLogs, please drop your values below to create an APP Account</small>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tw-row">
          <header className="project_heading_widget">
            <h3 className="heading_title size-xs tt-none">Personal Info</h3>
          </header>
          <div className="tw-col-xl-6">
            <div className="input-holder">
              <label className="placeholder_lab">Name*</label>
              <input type="type" className="form-elements" {...register(
                "empName", {required: true}
              )} aria-invalid={
                errors.empName ? "true" : "false"
              } />
              {errors.empName?.type === 'required' && <span className="error" role="alert">Please enter your Name</span>}
            </div>
          </div>
          <div className="tw-col-xl-3 tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">Last Name</label>
              <input type="type" className="form-elements" {...register("empLstName")} />
            </div>
          </div>
          <div className="tw-col-xl-3 tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">DOB</label>
               <Controller control={control} name="empDob" render={({field}) => (
                <ReactDatePicker className="form-elements" ref={field.ref} name={field.name} onChange={(date) => field.onChange(date)} selected={field.value} peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" />
               )} />
            </div>
          </div>
          <div className="tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">E-mail*</label>
              <input type="email" className="form-elements"
                {...register("empEmail", {
                  required: "Enter Your Email ID",
                  validate: { matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address"},
                })}
                aria-invalid={errors.empEmail ? "true" : "false"}
               />
               {errors.empEmail && <span className="error" role="alert">{errors.empEmail?.message}</span>}
            </div>
          </div>
          <div className="tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">Phone*</label>
              <input type="tel" className="form-elements"
                {...register("empPhone", {required: "Enter your Contact Number"})}
                aria-invalid={errors.empPhone ? "true" : "false"}
               />
               {errors.empPhone && <span className="error" role="alert">{errors.empPhone?.message}</span>}
            </div>
          </div>

          <header className="project_heading_widget">
            <h3 className="heading_title size-xs tt-none">Team Info</h3>
          </header>
          <div className="tw-col-md-4">
            <div className="input-holder">
              <label className="placeholder_lab">Role*</label>
              <select
                {...register("empRole", {required: "Select Role"})}
                aria-invalid={errors.empRole ? "true" : "false"}
              >
                <option value="" disabled>-- Select --</option>
                <EmployeeRole />
              </select>
              {errors.empRole && <span className="error" role="alert">{errors.empRole?.message}</span>}
            </div>
          </div>
          <div className="tw-col-md-4">
            <div className="input-holder">
              <label className="placeholder_lab">Department*</label>
              <select
                {...register("empDept", {required: "Select Your Department"})}
                aria-invalid={errors.empDept ? "true" : "false"}
              >
                <option value="" disabled>-- Select --</option>
                <EmployeeDepartment />
              </select>
              {errors.empDept && <span className="error" role="alert">{errors.empDept?.message}</span>}
            </div>
          </div>
          <div className="tw-col-md-4">
            <div className="input-holder">
              <label className="placeholder_lab">Team*</label>
              <select
                {...register("empTeam", {required: "Select Your Team"})}
                aria-invalid={errors.empTeam ? "true" : "false"}
              >
                <option value="" disabled>-- Select --</option>
                <EmployeeTeam />
              </select>
              {errors.empTeam && <span className="error" role="alert">{errors.empTeam?.message}</span>}
            </div>
          </div>
        </div>
        
        <div className="tw-row">
          <header className="project_heading_widget">
            <h3 className="heading_title size-xs tt-none">Security Info</h3>
            <small>Username</small>
          </header>
          <div className="tw-col-md-12">
            <div className="input-holder">
              <label className="placeholder_lab">Confirm Username*</label>
              <input type="text" className="form-elements" {...register("confirm_userName")}  />
            </div>
          </div>
          <div className="choosedId"><span>{getUserID.join("")}</span> @tasklogs.com</div>
          <div className="tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">Create Password</label>
              <input type="password" className="form-elements" {...register("creatPass", {required: "Choose your Password"})} aria-invalid={errors.creatPass ? "true" : "false"} />
              {errors.creatPass && <span className="error" role="alert">{errors.creatPass?.message}</span>}
            </div>
          </div>
          <div className="tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">Confirm Password</label>
              <input type="password" className="form-elements" {...register("updatePass", {required: "Choose your Password", deps: ["creatPass", "updatePass"]})} aria-invalid={errors.updatePass ? "true" : "false"} />
              {errors.updatePass && <span className="error" role="alert">{errors.updatePass?.message}</span>}
            </div>
          </div>
        </div>
        <div className="input-holder center project-btn-wrap">
          <button type="submit" className="project-btn">Register Now</button>
        </div>
      </form>
    </>
  )
}

export default EntryRegister