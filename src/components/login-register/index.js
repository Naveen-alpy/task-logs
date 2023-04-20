import React, { useState } from "react";
import EntryLogin from "./login-wrap";
import EntryRegister from "./register-wrap";
import { ProjectLogo } from "../utils/tools";

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  }
  const handleTab2 = () => {
    setActiveTab("tab2");
  }
  return (
    <main className="page_appEntry dFlex">
      <div className="entryCol-left bg-white">
        <header className="head_logo">
          <ProjectLogo IconLogo={false} link={false} />
        </header>
        <section className="entry-wrapper">
          <ul className="tab_button_group vhCenter">
            <li className={activeTab === 'tab1' ? 'active' : ''} onClick={handleTab1}><button type="button" className="tab_button">Login</button></li>
            <li className={activeTab === 'tab2' ? 'active' : ''} onClick={handleTab2}><button type="button" className="tab_button">Register</button></li>
          </ul>
          <div className="tab_container_wrap entry_form_wrap">
            {activeTab === "tab1" ? <EntryLogin /> : <EntryRegister />}
          </div>
        </section>
      </div>
      <div className="entryCol-right bg-violet"></div>
    </main>
  )
}

export default LoginRegister;