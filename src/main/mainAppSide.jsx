import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter, Route, Routes} from "react-router-dom";
import AppSide from "../app/AppSide.jsx";
import {pathrule} from "./pathMain/path.jsx";


ReactDOM.createRoot(document.getElementById('sidenav')).render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path={pathrule[parseInt(localStorage.getItem("trigger"))]} element={<AppSide/>}/>
          </Routes>
      </HashRouter>
  </React.StrictMode>
)
