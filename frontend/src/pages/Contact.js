import {FaMailBulk, FaPhoneAlt} from "react-icons/fa";

const Contact = () => {

    return (
        <section className="contact-us wrapper">
            <article className="intro page-intro">
                <div className="text">
                    <h1 className="headline text-center">Kontakta oss</h1>
                    <h2 className=" text-center">Frågor, offert, hembesök eller bara för att prata</h2>
                    <h4 className="text-center">Vi är ett städföretag som lägger stor vikt i kunddialogen, så har du
                        några
                        frågor om våra tjänster, service eller bara vill veta mer om oss. Tveka då inte på att kontakta
                        oss,
                        nedan hittar du våra kontaktuppgifter.</h4>
                </div>
            </article>
            <article className="col-md-12 container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Direktkontakt:</h3>
                        <ul>
                            <li>
                                <a className="footer-links" href="tel:042-12 81 81"><FaPhoneAlt/> &nbsp;
                                    042-12 81 81</a>
                            </li>
                            <li>
                                <a className="footer-links" href="tel:042-12 81 81"><FaMailBulk/> &nbsp;
                                    info@renax.se</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3> Jobbansökan:</h3>
                        <ul>
                            <li>
                                <a className="footer-links" href="tel:042-12 81 81"><FaMailBulk/> &nbsp;
                                    jobb@renax.se</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Press och media:</h3>
                        <ul>
                            <li>
                                <a className="footer-links" href="tel:042-12 81 81"><FaMailBulk/> &nbsp;
                                    press@renax.se</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center">Samarbetspartners och leverantörer:</h3>
                        <ul>
                            <li>
                                <a className="footer-links" href="tel:042-12 81 81"><FaMailBulk/> &nbsp;
                                    partner@renax.se</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </article>
        </section>

    )
}
export default Contact;