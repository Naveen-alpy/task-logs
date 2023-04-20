const EntryLogin = () => {
  return (
    <section className="login-container">
      <header className="project_heading_widget">
        <h1 className="heading_title tt-none">Log in</h1>
        <small>Welcome to TaskLogs, please put your login credentials below to start using the APP</small>
      </header>
      <form>
        <div className="input-holder form-elements log_mail vCenter no-wrap">
          <label className="placeholder_lab">E-mail address</label>
          <input type="email" className="input_field" />
          <span className="mailExt">@tasklogs.com</span>
        </div>
        <div className="input-holder">
          <label className="placeholder_lab">Password</label>
          <input type="password" className="form-elements" />
        </div>
        <div className="input-holder center project-btn-wrap">
          <button type="submit" className="project-btn">Login</button>
        </div>
      </form>
      <p className="center entry_note">Don't have an account? <button className="link">Create an account</button></p>
    </section>
  )
}

export default EntryLogin