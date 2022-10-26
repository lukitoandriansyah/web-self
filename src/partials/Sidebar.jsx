export default function Sidebar(){
    return<>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            {/*<div className="sb-sidenav-menu-heading">Core</div>*/}
                            <a className="nav-link" onClick={()=>localStorage.setItem("counter","1")} href="/#/home">
                                <div className="sb-nav-link-icon"><i className="fas fa-home"></i></div>
                                Home
                            </a>
                            <a className="nav-link" onClick={()=>localStorage.setItem("counter","1")} href="/#/profile">
                                <div className="sb-nav-link-icon"><i className="fas fa-user"></i></div>
                                Profile
                            </a>
                            <a className="nav-link collapsed" href={"/#/project/lukito"} onClick={()=>localStorage.setItem("counter","1")}
                               data-bs-toggle="collapse" data-bs-target="#collapseProject" aria-expanded="false" aria-controls="collapseProject">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Projects
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseProject" aria-labelledby="headingOne"
                                 data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/#/project/lukito/backend">BackEnd</a>
                                    <a className="nav-link" href="/#/project/lukito/frontend">FrontEnd</a>
                                    <a className="nav-link" href="/#/project/lukito/novel">Novel</a>
                                    <a className="nav-link" href="/#/project/lukito/song">Song</a>
                                </nav>
                            </div>
                            {/*<div className="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                 data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                                       data-bs-target="#pagesCollapseAuth" aria-expanded="false"
                                       aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i>
                                        </div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                                         data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/login.html">Login</a>
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/register.html">Register</a>
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                                       data-bs-target="#pagesCollapseError" aria-expanded="false"
                                       aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i>
                                        </div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                                         data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/401.html">401 Page</a>
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/404.html">404 Page</a>
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>*/}
                            {/*<div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                               data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                                 data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="src/sb-admin-7.0.4/dist/layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="src/sb-admin-7.0.4/dist/layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>*/}
{/*                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                               data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                 data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                                       data-bs-target="#pagesCollapseAuth" aria-expanded="false"
                                       aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i>
                                        </div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                                         data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/login.html">Login</a>
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/register.html">Register</a>
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                                       data-bs-target="#pagesCollapseError" aria-expanded="false"
                                       aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i>
                                        </div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                                         data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/401.html">401 Page</a>
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/404.html">404 Page</a>
                                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>*/}
                            {/*<div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a className="nav-link" href="src/sb-admin-7.0.4/dist/tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a>*/}
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Lukito Andriansyah
                    </div>
                </nav>
            </div>
        </div>
    </>
}
