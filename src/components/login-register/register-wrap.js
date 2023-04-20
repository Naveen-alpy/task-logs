const EntryRegister = () => {
  return (
    <section className="register-container">
      <header className="project_heading_widget">
        <h1 className="heading_title tt-none">Register Now</h1>
        <small>Welcome to TaskLogs, please drop your values below to create an APP Account</small>
      </header>
      <form>
        <div className="tw-row">
          <header className="project_heading_widget">
            <h3 className="heading_title size-xs tt-none">Personal Info</h3>
          </header>
          <div className="tw-col-xl-6">
            <div className="input-holder">
              <label className="placeholder_lab">Name*</label>
              <input type="type" className="form-elements" />
            </div>
          </div>
          <div className="tw-col-xl-3 tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">Last Name</label>
              <input type="type" className="form-elements" />
            </div>
          </div>
          <div className="tw-col-xl-3 tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">DOB*</label>
              <input type="type" className="form-elements" />
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

          <header className="project_heading_widget">
            <h3 className="heading_title size-xs tt-none">Team Info</h3>
          </header>
          <div className="tw-col-md-4">
            <div className="input-holder">
              <label className="placeholder_lab">Role*</label>
              <select>
                <option>-- Select --</option>
                <option>Project Manager</option>
                <option>Team Lead</option>
                <option>Senior</option>
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
                <option>Developing</option>
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
                <option>OASIS</option>
                <option>BEACON</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="tw-row">
          <header className="project_heading_widget">
            <h3 className="heading_title size-xs tt-none">Security Info</h3>
            <small>Username</small>
          </header>
          <div className="tw-col-md-4">
            <div className="input-holder">
              <label className="placeholder_lab">First Name*</label>
              <input type="text" className="form-elements" />
            </div>
          </div>
          <div className="tw-col-md-4">
            <div className="input-holder">
              <label className="placeholder_lab">Last Name</label>
              <input type="text" className="form-elements" />
            </div>
          </div>
          <div className="tw-col-md-4">
            <div className="input-holder">
              <label className="placeholder_lab">Surname</label>
              <input type="text" className="form-elements" />
            </div>
          </div>
          <div className="choosedId"><span>firstnames</span> @tasklogs.com</div>
          <div className="tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">Create Password</label>
              <input type="password" className="form-elements" />
            </div>
          </div>
          <div className="tw-col-md-6">
            <div className="input-holder">
              <label className="placeholder_lab">Confirm Password</label>
              <input type="password" className="form-elements" />
            </div>
          </div>
        </div>
        <div className="input-holder center project-btn-wrap">
          <button type="submit" className="project-btn">Register Now</button>
        </div>
      </form>
      <p className="center entry_note">Already have an account? <button className="link">Login</button></p>
    </section>
  )
}

export default EntryRegister