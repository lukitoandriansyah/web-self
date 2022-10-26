export default function Footer() {
    return <>
        {/*        <div id="layoutSidenav">*/}
{/*        <div id="layoutSidenav_content">*/}
            <footer className="py-4 bg-light mt-auto">
                <div className={"text-center h5"}>
                    <i className={"fas fa-phone"}/>
                    &nbsp;&nbsp;
                    Contact
                </div>
                <div className="container-fluid px-4">
                    <div className={"card-body bg-light align-content-center"}>
                        <div className="card bg-success text-white mb-4 align-content-center">
                            <div className={"row text-center"}>
                                <div className={"col-xl-5 col-md-6"}>
                                    <div className="card-body align-content-center">
                                        <i className="fab fa-whatsapp bg-success align-content-center"></i>
                                        &nbsp;&nbsp;
                                        <a className={"text-white align-content-center"} href={"https://api.whatsapp.com/send?phone=62895332316333"}>
                                            +62895332316333
                                        </a>
                                        <br/>
                                        <i className="fab fa-telegram bg-success align-content-center" />
                                        &nbsp;&nbsp;
                                        <a className={"text-white align-content-center"} href={"https://t.me/ito_s_o_s"}>+62895332316333</a>
                                        <br/>
                                        <i className="fab fa-linkedin-in bg-success align-content-center" />
                                        &nbsp;&nbsp;
                                        <a className={"text-white align-content-center"} href={"https://www.linkedin.com/in/lukitoandriansyah/"}>
                                            lukitoandriansyah
                                        </a>
                                        <br/>
                                        <i className="fab fa-github bg-success align-content-center" />
                                        &nbsp;&nbsp;
                                        <a className={"text-white align-content-center"} href={"https://github.com/lukitoandriansyah"}>
                                            lukitoandriansyah
                                        </a>
                                    </div>
                                </div>
                                <div className={"col-xl-5 col-md-6"}>
                                </div>
                                <div className={"col-xl-2 col-md-6"}>
                                    <div className={"col-xl-6"}>

                                    </div>
                                    <div className={"col-xl-6"}>
                                        <br/>
                                        <i>
                                            <img
                                                src={"src/assets/waQRcode.png"}
                                                className={"card-img"}
                                            />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Copyright &copy; Lukito Andriansyah 2022</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
{/*        </div>*/}
        {/*</div>*/}
    </>
}
