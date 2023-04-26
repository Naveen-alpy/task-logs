const EntryLogin = () => {
  return (
    <>
      <header className="project_heading_widget">
        <h1 className="heading_title tt-none">Log in</h1>
        <small>Welcome to TaskLogs, please put your login credentials below to start using the APP</small>
      </header>
      <form>
        <div className="input-holder form-elements log_mail vCenter no-wrap">
          <label className="placeholder_lab" for="en_mail">E-mail address</label>
          <input type="email" id="en_mail" className="input_field" />
          <label for="en_mail" className="mailExt">@tasklogs.com</label>
        </div>
        <div className="input-holder">
          <label className="placeholder_lab" for="en_pass">Password</label>
          <input type="password" id="en_pass" className="form-elements" />
        </div>
        <div className="input-holder center project-btn-wrap">
          <button type="submit" className="project-btn">Login</button>
        </div>
      </form>
    </>
  )
}

export default EntryLogin