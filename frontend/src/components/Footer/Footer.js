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
import {useEffect, useState} from "react";

function Footer() {
    const [isMedia, setIsMedia] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', listenToResize)
    }, [])

    const listenToResize = () => {
        window.innerWidth < 601 ? setIsMedia(true) : setIsMedia(false);
    }

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
                                <a href="https://www.facebook.com/Renaxab"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                    <FaFacebookF/>
                                </a>
                                <a href="https://twitter.com/" target="_blank"
                                   rel="noopener noreferrer">
                                    <FaTwitter/>
                                </a>
                                <a href="https://www.instagram.com/renax.ab/"
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
                        <div className="text-wrapper row">
                            <div className={`about ${!isMedia ? 'col-md-6' : 'col-md-12'}`}>
                                <h6>Om oss</h6>
                                <p>Renax AB bedriver h??ghygieniskt st??d som ??r verksamma i f??rsta hand inom
                                    Livsmedelsindustri. V??r styrka ??r att vi kan utifr??n v??ra kunders befintliga milj??
                                    skapa
                                    s??ker hygienmilj??. Renax AB syssels??tter i dag runt 100 anst??llda med uppdrag inom
                                    Sk??ne, Halland och andra delar av landet. ??r det s?? att ni vill ha jobb utf??rt
                                    utanf??r
                                    dessa orter, kontakta g??rna oss och fr??ga om det ??r m??jligt!</p>
                            </div>

                            <div className={`contact ${!isMedia ? 'col-md-3' : 'col-md-12'}`}>
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
                                        <span className="footer-links"><FaRegAddressCard/> &nbsp;NORRT??LJEGATAN 9, Helsingborg</span>
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