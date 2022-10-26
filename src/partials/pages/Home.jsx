import {pathrule} from "../../main/pathMain/path.jsx";
import {useLocation} from "react-router-dom";
import Footer from "../Footer.jsx";
import Spinner from "../../component/Spinner/Spinner";
import {useEffect, useState} from "react";
import Topbar from "../Topbar";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false)

    if (localStorage.getItem("trigger")) {
        if (pathrule.indexOf(useLocation().pathname).toString() >= 0) {
            localStorage.setItem("trigger", pathrule.indexOf(useLocation().pathname).toString())
            if (localStorage.getItem("counter")) {
                localStorage.removeItem("counter")
                window.location.reload(<Spinner/>)

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
        {/*<div id="layoutSidenav">
            <div id="layoutSidenav_content">*/}
    <Topbar/>
                {
                    isLoading ?
                        <div className={"d-flex justify-content-center"}>
                            <Spinner/>
                        </div>
                        :
                        <>
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Welcome in My Personal Website</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item active">Home</li>
                                </ol>
                                <div className={"row"}>
                                    <div className={"card bg-info text-white"}>
                                        <i className="fa fa-info fa-2x" aria-hidden="true"/>
                                        <br/><br/>
                                        <h6>This web still in progress to build, some feature might be can't running perfectly.</h6>
                                        <h6>sorry for our distraction<br/><br/></h6>
                                    </div>
                                </div>
                                <br/>
                                <div className={"row"}>
                                    <div className={"card bg-light text-white"}>
                                        <div className={"card-body bg-primary mt-4 mb-4 text-center"}>
                                            <h3>Hallo! I'm Lukito Andriansyah<br/><br/></h3>
                                            <h6>This page would be contain about all my professional activity in
                                                programming, song writer, etc.<br/></h6>
                                            <h6>Hopefully we can interacted more intends.<br/><br/></h6>

                                            <h5>Regards,<br/></h5>
                                            <i className="fa fa-smile fa-3x" aria-hidden="true"/>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-xl-1 col-md-6"/>
                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-danger text-white text-center mb-4">
                                            <div className={"row"}>
                                                <div className={"col-xl-8 col-md-6"}>
                                                    <div className="card-body text-white">
                                                        <a onClick={() => localStorage.setItem("counter", "1")}
                                                           href={"/#/profile"}
                                                           className={"text-white"}><strong>Profile</strong></a>
                                                    </div>
                                                </div>
                                                <div className={"col-xl-4 col-md-6"}>
                                                    <div className="card-body"><i className="fa fa-user fa-2x"
                                                                                  aria-hidden="true"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-1 col-md-6"/>
                                    <div className="col-xl-1 col-md-6"/>
                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-warning text-white text-center mb-4">
                                            <div className={"row"}>
                                                <div className={"col-xl-8 col-md-6"}>
                                                    <div className="card-body text-white">
                                                        <a onClick={() => localStorage.setItem("counter", "1")}
                                                           href={"/#/project/lukito"}
                                                           className={"text-white"}><strong>Project</strong></a>
                                                    </div>
                                                </div>
                                                <div className={"col-xl-4 col-md-6"}>
                                                    <div className="card-body"><i className="fa fa-book-open fa-2x"
                                                                                  aria-hidden="true"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-1 col-md-6"/>
                                </div>
                            </div>
                            <Footer/>
                        </>

                }

{/*
            </div>
        </div>*/}
    </>
}

