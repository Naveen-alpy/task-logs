import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import LoginRegister from './components/login-register';
import { TemplateWithHeader } from './components/template-with-header';
import { TemplateWithoutHeader } from './components/template-without-header';
import { TemplateWithoutHeadFoot } from './components/template-without-headfoot';
import { OtherResources } from './components/resource';
import { TeamLead } from './components/team-lead';
import { TeamLeadTasksSummary } from './components/team-lead/tasks-lists-tl';
import { TeamLeadProjectSummary } from './components/team-lead/project-lists-tl';
import { UserProfile } from './components/users';
import { FtpLogins } from './components/ftp';
import { SingleProjectPage } from './components/team-lead/single-project';
import { Dashboard } from './components/dashboard';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <section className='project_outer_container'>
        <Routes>
          <Route path='/' element={<TemplateWithHeader />}>
            <Route index element={<Home />} className="home" />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/resources' element={<OtherResources />} />
            <Route path='/team-lead' element={<TeamLead />} />
            <Route path='/tl-tasks-summary' element={<TeamLeadTasksSummary />} />
            <Route path='/tl-project-summary' element={<TeamLeadProjectSummary />} />
            <Route path='/user-profile' element={<UserProfile />} />
            <Route path='/single-project' element={<SingleProjectPage />} />
            <Route path='/login-details' element={<FtpLogins />} />
          </Route>
          <Route path='/' element={<TemplateWithoutHeader />}>
            <Route index path='/dashboarded' element={<LoginRegister />} />
          </Route>
          <Route path='/' element={<TemplateWithoutHeadFoot />}>
            <Route index path='/app-entry' element={<LoginRegister />} />
          </Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default AppRoutes;
