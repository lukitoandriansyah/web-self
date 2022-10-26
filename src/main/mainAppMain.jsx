import React from 'react'
import ReactDOM from 'react-dom/client'
import AppMain from '../app/AppMain.jsx'
import {HashRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "../partials/pages/Home";
import Profile from "../partials/pages/profile";
import Developer from "../partials/pages/profile-section/Developer";
import Creator from "../partials/pages/profile-section/Creator";
import Novelist from "../partials/pages/profile-section/Novelist";
import ProjectLukito from "../partials/pages/project-lukito";
import BackEnd from "../partials/pages/Projects/BackEnd";
import Novel from "../partials/pages/Projects/Novel";
import Song from "../partials/pages/Projects/Song";
import FrontEnd from "../partials/pages/Projects/FrontEnd.jsx";
import PageIsBuild from "../partials/pages/unknown/pageIsBuild";
ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path={"/"}>
                  <Route index element={<Navigate to={"/home"} replace/>}/>
                  <Route path={"/home"} element={<Home/>}/>
                  <Route path={"/profile"} element={<Profile/>}/>
                  <Route path={"/profile/as/developer"} element={<Developer/>}/>
                  <Route path={"/profile/as/creator"} element={<PageIsBuild/>}/>
                  <Route path={"/profile/as/novelist"} element={<PageIsBuild/>}/>
                  <Route path={"/project/lukito"} element={<ProjectLukito/>}/>
                  <Route path={"project/lukito/backend"} element={<BackEnd/>}/>
                  <Route path={"project/lukito/frontend"} element={<FrontEnd/>}/>
                  <Route path={"project/lukito/novel"} element={<PageIsBuild/>}/>
                  <Route path={"project/lukito/song"} element={<PageIsBuild/>}/>
                  <Route path={"privacy-policy"} element={<PageIsBuild/>}/>
                  <Route path={"term-condition"} element={<PageIsBuild/>}/>
              </Route>
          </Routes>
      </HashRouter>
  </React.StrictMode>
)
