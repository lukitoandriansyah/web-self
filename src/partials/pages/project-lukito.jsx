import {pathrule} from "../../main/pathMain/path.jsx";
import {useLocation} from "react-router-dom";
import Footer from "../Footer.jsx";

export default function Home() {

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
                    <h1 className="mt-4">My Project</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Project</li>
                    </ol>
                    <div className={"row"}>
                        <div className={"card bg-light text-white"}>
                            <div className={"card-body bg-primary mt-4 mb-4 text-center"}>
                                <h3>Hallo!<br/><br/></h3>
                                <h6>This page would be contain about all my project.<br/></h6>
                                <h6>Hopefully we can interacted more intends.<br/><br/></h6>

                                <h5>Regards,<br/></h5>
                                <i className="fa fa-smile fa-3x" aria-hidden="true"/>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-primary text-white text-center mb-4">
                                <div className={"row"}>
                                    <div className={"col-xl-8 col-md-6"}>
                                        <div className="card-body text-white">
                                            <a onClick={()=>localStorage.setItem("counter","1")} href={"/#/project/lukito/backend"} className={"text-white"}><strong>Back End</strong></a>
                                        </div>
                                    </div>
                                    <div className={"col-xl-4 col-md-6"}>
                                        <div className="card-body"><i className="fa fa-database fa-2x" aria-hidden="true"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-warning text-white text-center mb-4">
                                <div className={"row"}>
                                    <div className={"col-xl-8 col-md-6"}>
                                        <div className="card-body text-white">
                                            <a onClick={()=>localStorage.setItem("counter","1")} href={"/#/project/lukito/frontend"} className={"text-white"}><strong>Front End</strong></a>
                                        </div>
                                    </div>
                                    <div className={"col-xl-4 col-md-6"}>
                                        <div className="card-body"><i className="fa fa-laptop fa-2x" aria-hidden="true"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-success text-white text-center mb-4">
                                <div className={"row"}>
                                    <div className={"col-xl-8 col-md-6"}>
                                        <div className="card-body text-white">
                                            <a onClick={()=>localStorage.setItem("counter","1")} href={"/#/project/lukito/novel"} className={"text-white"}><strong>Novel</strong></a>
                                        </div>
                                    </div>
                                    <div className={"col-xl-4 col-md-6"}>
                                        <div className="card-body"><i className="fa fa-book fa-2x" aria-hidden="true"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-danger text-white text-center mb-4">
                                <div className={"row"}>
                                    <div className={"col-xl-8 col-md-6"}>
                                        <div className="card-body text-white">
                                            <a onClick={()=>localStorage.setItem("counter","1")} href={"/#/project/lukito/song"} className={"text-white"}><strong>Song</strong></a>
                                        </div>
                                    </div>
                                    <div className={"col-xl-4 col-md-6"}>
                                        <div className="card-body"><i className="fa fa-music fa-2x" aria-hidden="true"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
       {/*     </div>
        </div>*/}
    </>
}

