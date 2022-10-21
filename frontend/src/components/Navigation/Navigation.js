import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {routeConfig} from "../../config/routeConfig";
import {FaBars} from "react-icons/fa";
import allServices from "../../assets/services.json";

const Navigation = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isHamburger, setIsHamburger] = useState(false);

    //Listening to scroll, if is > 1000px 'sticky-nav' classname is added to .navbar
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        window.scrollY > 1200 ? setIsSticky(true) : setIsSticky(false);
    }

    // If responsive , oncklick changes state of isHamburger and ads or removes classname 'collapse' from #navbarNav
    const showHamburger = () => {
        isHamburger ? setIsHamburger(false) : setIsHamburger(true);
    }

    // Service link dropdown layout
    const serviceDropdownLayout = () => {
        return allServices.map((el, index) => {
            return <li className="nav-item" key={index}>
                <Link to={routeConfig.SERVICES.realUrl(el.title)}
                      className="dropdown-item ">
                    {el.title}
                </Link>
            </li>
        })
    };

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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle user"
                           href="/"
                           id="navbarDropdown"
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Tjänster
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"
                            style={{margin: 0}}>
                            {serviceDropdownLayout()}
                        </ul>
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