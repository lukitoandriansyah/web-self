import MainTemplate from "../partials/MainTemplate.jsx";
import {useLocation, useParams} from "react-router-dom";
import {pathrule} from "../main/pathMain/path.jsx"

function AppMain() {
    localStorage.getItem("trigger")?"":localStorage.removeItem("trigger")
    pathrule.indexOf(useLocation().pathname).toString() >=0?
    localStorage.setItem("trigger", pathrule.indexOf(useLocation().pathname).toString()):"/"
  /*  console.log(pathrule.indexOf(useLocation().pathname))*/
  return (
    <div>
        <MainTemplate/>
    </div>
  )
}

export default AppMain
