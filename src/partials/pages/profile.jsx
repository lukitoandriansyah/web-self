import {pathrule} from "../../main/pathMain/path.jsx";
import {Link, Navigate, useLocation} from "react-router-dom";
import Footer from "../Footer";
import developer from "../../assets/developer.png";

export default function Profile() {
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
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <div className="container-fluid px-4 text-center align-items-md-center align-content-center">
                    <h1 className="mt-4 align-content-center">Lukito Andriansyah</h1>
                    <div className={"card-body bg-light"}>
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body">
                                <div className={"row"}>
                                    <div className="col-xl-5 col-md-6">
                                    </div>
                                    <div className="col-xl-2 col-md-6">
                                        <img
                                            src={"https://media-exp1.licdn.com/dms/image/D5603AQHtHwzLufyGWA/profile-displayphoto-shrink_800_800/0/1666153142397?e=2147483647&v=beta&t=pav8kYuCjLs85gGfvwcHfHurgaGX6z0QhwaDn9zzR_k"}
                                            className={"card-img rounded-circle"}
                                        />
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card mb-4">
                        <div className="card-header text-center">
                            <i className="fas fa-ask"></i>
                            &nbsp;
                            <strong>Profile Me</strong>
                            &nbsp;
                            <i className="fas fa-ask"></i>
                        </div>
                        <div className="card-body">
                            <div className={"card-body bg-light"}>
                                <div className="row">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="card bg-primary text-white mb-4">
                                            <div className="card-body">
                                                <div className={"row"}>
                                                    <div className="col-xl-9 col-md-6">
                                                        <br/>
                                                        <div> &nbsp;&nbsp;&nbsp;"...Interested in Web Development, main
                                                            skills
                                                        </div>
                                                        <div> &nbsp;&nbsp;&nbsp;currently is using Java Springboot
                                                            (BackEnd)
                                                        </div>
                                                        <div> &nbsp;&nbsp;&nbsp;and React JS (FrontEnd)..."</div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6">
                                                        <i>
                                                            <br/>
                                                            <img
                                                                src={developer}
                                                                className={"card-img rounded-circle"}
                                                            />
                                                            <b className="small text-white align-content-center">
                                                                <br/><br/>
                                                                <a onClick={()=>localStorage.setItem("counter","1")} className={"text-white"} href={"/#/profile/as/developer"}>
                                                                    Developer
                                                                </a>
                                                                <br/>
                                                            </b>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="card bg-primary text-white mb-4">
                                            <div className="card-body">
                                                <div className={"row"}>
                                                    <div className="col-xl-9 col-md-6">
                                                        <br/>
                                                        <div> &nbsp;&nbsp;&nbsp;"...Side hobby in music, main
                                                            influence
                                                        </div>
                                                        <div> &nbsp;&nbsp;&nbsp;is from japanese song. Has been
                                                            released
                                                        </div>
                                                        <div> &nbsp;&nbsp;&nbsp;4th indie mini album as eL A 99..."
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6">
                                                        <i>
                                                            <br/>
                                                            <img src={"src/assets/eLA99.jpg"}
                                                                 className={"card-img rounded-circle"}
                                                            />
                                                            <br/>
                                                            <b className="small text-white align-content-center">
                                                                <br/>
                                                                <a onClick={()=>localStorage.setItem("counter","1")} className={"text-white"} href={"/#/profile/as/creator"}>
                                                                    Creator
                                                                </a>
                                                                <br/>
                                                            </b>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-md-6"></div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="card bg-primary text-white mb-4">
                                            <div className="card-body">
                                                <div className={"row"}>
                                                    <div className="col-xl-9 col-md-6">
                                                        <br/>
                                                        <div> &nbsp;&nbsp;&nbsp;"...Side hobby in storyboard, main
                                                            influence
                                                        </div>
                                                        <div> &nbsp;&nbsp;&nbsp;is from One Piece. Has been published
                                                        </div>
                                                        <div> &nbsp;&nbsp;&nbsp;4th Novel and 1 Poetry..."</div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6">
                                                        <i>
                                                            <br/>
                                                            <img
                                                                src={"https://th.bing.com/th/id/OIP.TApqY-xkE7f2hMQp-g8z0wHaHa?pid=ImgDet&rs=1"}
                                                                className={"card-img rounded-circle"}
                                                            />
                                                            <br/>
                                                            <b className="small text-white align-content-center">
                                                                <br/>
                                                                <a onClick={()=>localStorage.setItem("counter","1")} className={"text-white"} href={"/#/profile/as/novelist"}>
                                                                    Novelist
                                                                </a>
                                                                <br/>
                                                            </b>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    </>
}

