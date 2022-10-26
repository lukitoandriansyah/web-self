import {pathrule} from "../../../main/pathMain/path.jsx";
import {useLocation} from "react-router-dom";
import Footer from "../../Footer.jsx";

export default function FrontEnd() {
    if (localStorage.getItem("trigger")) {
        if (pathrule.indexOf(useLocation().pathname).toString() >= 0) {
            localStorage.setItem("trigger", pathrule.indexOf(useLocation().pathname).toString())
            if (localStorage.getItem("counter")) {
                localStorage.removeItem("counter")
                window.location.reload()
            }
        }
    } else {
        localStorage.removeItem("trigger")
        if (pathrule.indexOf(useLocation().pathname).toString() >= 0) {
            localStorage.setItem("trigger", pathrule.indexOf(useLocation().pathname).toString())
            if (localStorage.getItem("counter")) {
                localStorage.removeItem("counter")
                window.location.reload()
            }
        }
    }

    return <>
       {/* <div id="layoutSidenav">
            <div id="layoutSidenav_content">*/}
                <div className="container-fluid px-4">
                    <div className={"text-center"}>
                        <h1 className="mt-4">Lukito Andriansyah</h1>
                        <h3 className={"mt-4 align-items-center text-danger"}>Front End Project</h3>
                    </div>
                    <div className={"card-body bg-light"}>
                        <div className="card bg-light">
                            <div className="card-body bg-success text-white mb-4">
                                <div className={"row"}>
                                    <div className="col-xl-5 col-md-6"/>
                                    <div className="col-xl-2 col-md-6">
                                        <img
                                            src={"https://media-exp1.licdn.com/dms/image/D5603AQHtHwzLufyGWA/profile-displayphoto-shrink_800_800/0/1666153142397?e=2147483647&v=beta&t=pav8kYuCjLs85gGfvwcHfHurgaGX6z0QhwaDn9zzR_k"}
                                            className={"card-img rounded-circle"}
                                        />
                                    </div>
                                    <div className="col-xl-5 col-md-6"/>
                                </div>
                            </div>
                            <div className="card-header bg-light text-center"><strong>List Project</strong></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-success text-white mb-4">
                                            <div className="card-header text-center">PSM Mini Library</div>
                                            <div className="card-body">
                                                <li>CRUD User Feature</li>
                                                <li>CRUD Role Feature</li>
                                                <li>Auth Management</li>
                                                <li>Support Data System</li>
                                                <li>Lead team</li>
                                            </div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="https://github.com/groupA-prodemy/gen-10-mini-project-FE">View Source Code</a>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
          {/*  </div>
        </div>*/}
    </>
}

