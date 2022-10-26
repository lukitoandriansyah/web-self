import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter, Route, Routes} from "react-router-dom";
import AppFoot from "../app/AppFoot.jsx";
import {pathrule} from "./pathMain/path.jsx";

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path={pathrule[parseInt(localStorage.getItem("trigger"))]} element={<AppFoot/>}/>
          </Routes>
      </HashRouter>
  </React.StrictMode>
)
