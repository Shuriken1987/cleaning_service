import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {routeConfig} from "../../config/routeConfig";
import {FaBars} from "react-icons/fa";

const Navigation = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isHamburger, setIsHamburger] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        window.scrollY > 1000 ? setIsSticky(true) : setIsSticky(false);
    }

    const showHamburger = () => {
        isHamburger ? setIsHamburger(false) : setIsHamburger(true);
    }

    // const userBtnLayout = () => {
    //     <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle user"
    //                href="/"
    //                id="navbarDropdown"
    //                role="button"
    //                data-bs-toggle="dropdown"
    //                aria-expanded="false"
    //             >
    //                 Tjänster
    //             </a>
    //             <ul className="dropdown-menu dropdown-menu-end"
    //                 aria-labelledby="navbarDropdown"
    //             >
    //                 <li>
    //                     <Link to={routeConfig.USER_PROFILE.url}
    //                           className="dropdown-item user-dropdown"
    //                     >
    //                         <i className="bi bi-person-workspace me-2"></i>
    //                         Profile
    //                     </Link>
    //                 </li>
    //                 <li>
    //                     <Link to={routeConfig.MY_ORDERS.url}
    //                           className="dropdown-item user-dropdown">
    //                         <i className="bi bi-box me-2"></i>
    //                         My orders
    //                     </Link>
    //                 </li>
    //             </ul>
    //         </li>
    // };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isSticky ? 'sticky-nav' : ''}`}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={showHamburger}>
                  <FaBars/>
            </button>
            <div className={`${!isHamburger ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={routeConfig.HOME.url}>Hem</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={routeConfig.SERVICES.url}>Tjänster</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={routeConfig.ABOUT.url}>Om oss</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={routeConfig.CONTACT.url}>Kontakta oss</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navigation;