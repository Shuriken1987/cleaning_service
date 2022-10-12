import {
    FaFacebookF,
    FaInstagramSquare,
    FaLinkedinIn,
    FaMailBulk,
    FaPhoneAlt,
    FaRegAddressCard,
    FaTwitter
} from "react-icons/fa";
import {Link} from "react-router-dom";
import {routeConfig} from "../../config/routeConfig";
import logoImg from "../../img/Logo-renax-1.png"

function Footer() {

    return (
        <>
            <footer>
                <article className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="footer-title">
                                <Link to={routeConfig.HOME.url}>
                                    <img src={logoImg} alt="Renax" style={{width: "200px"}}/>
                                </Link>
                            </div>

                            <div className="footer-social-links">
                                <a href="https://www.facebook.com/Food-Florist-Helsingborg-102803464926190"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                    <FaFacebookF/>
                                </a>
                                <a href="https://twitter.com/" target="_blank"
                                   rel="noopener noreferrer">
                                    <FaTwitter/>
                                </a>
                                <a href="https://www.instagram.com/foodfloristhelsingborg"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                    <FaInstagramSquare/>
                                </a>
                                <a href="https://www.linkedin.com"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <FaLinkedinIn/>
                                </a>
                            </div>
                        </div>
                        <div className="text-wrapper">
                            <div className="about">
                                <h6>Om oss</h6>
                                <p>Renax AB bedriver höghygieniskt städ som är verksamma i första hand inom
                                    Livsmedelsindustri. Vår styrka är att vi kan utifrån våra kunders befintliga miljö
                                    skapa
                                    säker hygienmiljö. Renax AB sysselsätter i dag runt 100 anställda med uppdrag inom
                                    Skåne, Halland och andra delar av landet. Är det så att ni vill ha jobb utfört
                                    utanför
                                    dessa orter, kontakta gärna oss och fråga om det är möjligt!</p>
                            </div>

                            <div className="contact">
                                <h6>Kontakta oss</h6>
                                <ul>
                                    <li>
                                        <a className="footer-links" href="tel:042-12 81 81"><FaPhoneAlt/> &nbsp;
                                            <span>Phone: </span> 042-12 81 81</a>
                                    </li>
                                    <li>
                                        <a className="footer-links"
                                           href="mailto:info@ourdomain.com"><FaMailBulk/> &nbsp;
                                            <span>Email:{" "}</span> info@renax.se</a>
                                    </li>
                                    <li>
                                        <span className="footer-links"><FaRegAddressCard/> &nbsp;NORRTÄLJEGATAN 9, Helsingborg</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </article>
            </footer>

            <section className="bottomBar text-center  p-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} Renax-AB. | Design by Milan
                    Stanojevic.</p>
            </section>
        </>
    )
}

export default Footer;