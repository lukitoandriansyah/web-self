export default function Topbar() {

    window.addEventListener('DOMContentLoaded', event => {

        // Toggle the side navigation
        /*const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            // Uncomment Below to persist sidebar toggle between refreshes
            // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            //     document.body.classList.toggle('sb-sidenav-toggled');
            // }
            sidebarToggle.addEventListener('click', event => {
                event.preventDefault();
                document.body.classList.toggle('sb-sidenav-toggled');
                localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            });
        }*/

    });

    function toggleSet() {
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            // Uncomment Below to persist sidebar toggle between refreshes
            // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            //     document.body.classList.toggle('sb-sidenav-toggled');
            // }
            sidebarToggle.addEventListener('click', event => {
                event.preventDefault();
                document.body.classList.toggle('sb-sidenav-toggled');
                localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            });
        }
    }

    return <>
        <nav className="sb-topnav navbar navbar-expand navbar-brand navbar-dark bg-dark align-content-center">
           {/* <a className="navbar-brand ps-3" href="#">Lukito Andriansyah</a>*/}
            {/* <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#" onDOMContentLoaded = {(event) => {toggleSet(event)}}><i
                className="fas fa-bars"></i></button>*/}
            {/*<form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..."
                           aria-describedby="btnNavbarSearch"/>
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i
                        className="fas fa-search"></i></button>
                </div>
            </form>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" onClick={()=>localStorage.setItem("counter","1")} href="#/home">Settings</a></li>
                        <li><a className="dropdown-item" onClick={()=>localStorage.setItem("counter","1")} href="#/home">Activity Log</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" onClick={()=>localStorage.setItem("counter","1")} href="#/home">Logout</a></li>
                    </ul>
                </li>
            </ul>*/}
            {/*<div className="sb-sidenav-menu-heading">Core</div>*/}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className={" text-white"} href="/#/home">
                Home
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className={" text-white"} href="/#/profile">
                Profile
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className={" text-white"} href={"/#/project/lukito"}
               /*onClick={() => localStorage.setItem("counter", "1")}
               data-bs-toggle="collapse" data-bs-target="#collapseProject" aria-expanded="false"
               aria-controls="collapseProject"*/>
                Projects
            </a>
            {/*<div className="collapse" id="collapseProject" aria-labelledby="headingOne"
                 data-bs-parent="#sidenavAccordion">
                <nav className="nav">
                    <a className="nav-link" href="/#/project/lukito/backend">BackEnd</a>
                    <a className="nav-link" href="/#/project/lukito/frontend">FrontEnd</a>
                    <a className="nav-link" href="/#/project/lukito/novel">Novel</a>
                    <a className="nav-link" href="/#/project/lukito/song">Song</a>
                </nav>
            </div>*/}
        </nav>
        <br/>
        <br/>
        <br/>
    </>
}
