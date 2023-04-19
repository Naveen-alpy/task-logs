import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import LoginRegister from './components/login-register';
import { TemplateWithHeader } from './components/template-with-header';
import { TemplateWithoutHeader } from './components/template-without-header';
import { TemplateWithoutHeadFoot } from './components/template-without-headfoot';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TemplateWithHeader />}>
          <Route index element={<Home />} className="home" />
        </Route>
        <Route path='/' element={<TemplateWithoutHeader />}>
          <Route index path='/dashboard' element={<LoginRegister />} />
        </Route>
        <Route path='/' element={<TemplateWithoutHeadFoot />}>
          <Route index path='/app-entry' element={<LoginRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
