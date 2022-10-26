import {pathrule} from "../../../main/pathMain/path.jsx";
import {useLocation} from "react-router-dom";
import Footer from "../../Footer.jsx";
import Topbar from "../../Topbar";

export default function Developer() {
    let arrowFs1 = "fas fa-angle-down"
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

    function changeArrowFs1(event) {
        event.preventDefault()
        arrowFs1 === "fas fa-angle-down"? arrowFs1="fas fa-angle-up":arrowFs1="fas fa-angle-down"
    }

    return <>
{/*        <div id="layoutSidenav">
            <div id="layoutSidenav_content">*/}
    <Topbar/>
                <div className="container-fluid px-4">
                    <div className={"text-center"}>
                        <h1 className="mt-4">Lukito Andriansyah</h1>
                        <h3 className={"mt-4 align-items-center text-danger"}>Developer</h3>
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
                            <div className="card-header bg-light text-center"><strong>Brief</strong></div>
                            <div className="card-body text-center">
                                <div className={"row"}>
                                    <div className="col-xl-2 col-md-6"/>
                                    <div className="col-xl-8 col-md-6">
                                        <p>
                                            As a graduated from background in Physics IPB University, seems like no make
                                            sense
                                            to dive in tech / IT field. But that's all did for to proof my self if "I
                                            have to write code"
                                            and that's all being truth now.
                                        </p>
                                        <p>
                                            As long as about one year to "dated" with this field from Learn
                                            basic knowledge about Python, then how to use that for data analysis,
                                            relation of Python with MySql
                                            and what their contributed to doing analysis in data, till now for last 4
                                            months I spend of my time to
                                            learn Java and try to build Simple BackEnd Rest API using Java (Java
                                            SpringBoot) and combined them with HTML,
                                            CSS, JavaScripts, also ReactJs.
                                        </p>
                                        <p>
                                            One of Final Result is this website Portfolio, when i build in my self using
                                            code and slicing from template SB-ADMIN-7.0.4.
                                        </p>
                                        <p>
                                            <h5>And now i declared that,</h5>
                                            <h3 className={"text-danger"}>I'M READY TO DIVE DEEPLY</h3>
                                            <h5>as</h5>
                                            <h3 className={"text-danger"}>SOFTWARE / WEB DEVELOPER</h3>
                                        </p>
                                    </div>
                                    <div className="col-xl-2 col-md-6"/>
                                </div>
                            </div>
                            <div className="card-header bg-light text-center"><strong>Experience</strong></div>
                            <div className="card-body text-center">
                                <div className={"row"}>
                                    <div className="col-xl-5 col-md-6"/>
                                    <div className="col-xl-2 col-md-6"><i><img src={"src/assets/psmLogo.png"}
                                                                               className={"card-img rounded-circle"}/></i>
                                    </div>
                                    <div className="col-xl-5 col-md-6"/>
                                </div>
                                <div className={"row"}>
                                    <div className="col-xl-4 col-md-6"/>
                                    <div className="col-xl-4 col-md-6">
                                        <div className={"h5 mt-2"}>PT Pro Sigmaka Mandiri</div>
                                        <div className={"mt-2 h7"}>June 2022 - October 2022</div>
                                    </div>
                                    <div className="col-xl-4 col-md-6"/>
                                </div>
                                <div className={"row"}>
                                    <div className="col-xl-4 col-md-6">
                                        <div className={"h5 mt-2"}>Role</div>
                                        <div>Technical Consultant Program / IT Trainee</div>
                                        <div className={"mt-2 h5"}>Skills</div>
                                        <div>Java, SpringBoot, React JS, HTML/CSS/JS</div>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <div className={"h5 mt-2"}>Responsibility</div>
                                        <li>Learnt basic skills in Bootcamp Class&nbsp;&nbsp;</li>
                                        <li className={"mt-2"}>Build mini project for role as Backend</li>
                                        <li className={"mt-2"}>Build mini project for role as FullStack</li>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <div className={"h5 mt-2"}>Project</div>
                                        <li><a href={"https://github.com/prodemy10-kelompok4/klinik"}>Sistem Antrian
                                            Klinik (BE)</a></li>
                                        <li className={"mt-2 collapsed"} href="#" data-bs-toggle="collapse" data-bs-target="#collapseFs1" aria-expanded="false" aria-controls="collapseFs1" onClick={event => changeArrowFs1(event)}>
                                            PSM Mini Library (FS) &nbsp; &nbsp;
                                            <i className={arrowFs1}/>
                                            <div className="collapse" id="collapseFs1" aria-labelledby="headingOne">
                                                    <li><a href="https://github.com/groupA-prodemy/perpustakaan">Back End</a></li>
                                                    <li><a href="https://github.com/groupA-prodemy/gen-10-mini-project-FE">Front End</a></li>
                                            </div>
                                        </li>
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
                                        <div className="card bg-primary text-white mb-4 text-center">
                                            <div className="card-body">
                                                <div className={"row"}>
                                                    <div className="col-xl-9 col-md-6">
                                                        <br/>
                                                        <div>
                                                            &nbsp;&nbsp;&nbsp;"...Side hobby in music, main influence
                                                        </div>
                                                        <div>
                                                            &nbsp;&nbsp;&nbsp;is from japanese song. Has been released
                                                        </div>
                                                        <div>
                                                            &nbsp;&nbsp;&nbsp;4th indie mini album as eL A 99..."
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
                                    <div className="col-xl-6 col-md-6">
                                        <div className="card bg-primary text-white mb-4 text-center">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
{/*            </div>
        </div>*/}
    </>
}

