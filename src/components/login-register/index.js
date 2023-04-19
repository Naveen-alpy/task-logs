import React, { useState } from "react";
import EntryLogin from "./login-wrap";
import EntryRegister from "./register-wrap";

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  }
  const handleTab2 = () => {
    setActiveTab("tab2");
  }
  return (
    <main className="page_appEntry vhCenter">
      <div className="col-left"></div>
      <div className="col-right"></div>
      <section className="entry-wrapper">
        <ul className="tab_button_group vhCenter">
          <li className={activeTab === 'tab1' ? 'active' : ''} onClick={handleTab1}><button type="button" className="tab_button">Login</button></li>
          <li className={activeTab === 'tab2' ? 'active' : ''} onClick={handleTab2}><button type="button" className="tab_button">Register</button></li>
        </ul>
        <div className="tab_container_wrap">
          {activeTab === "tab1" ? <EntryLogin /> : <EntryRegister />}
        </div>
      </section>
    </main>
  )
}

export default LoginRegister;