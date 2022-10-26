import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter, Route, Routes} from "react-router-dom";
import AppTop from "../app/AppTop.jsx";
import {pathrule} from "./pathMain/path.jsx";


ReactDOM.createRoot(document.getElementById('top')).render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path={pathrule[parseInt(localStorage.getItem("trigger"))]} element={<AppTop/>}/>
          </Routes>
      </HashRouter>
  </React.StrictMode>
)
