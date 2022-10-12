import carImg from "../img/renax-bil.jpeg";
import happyCustomerImg from "../img/nojd-kund.jpg";
import {useEffect, useState} from "react";

const About = () => {
    const [isMedia, setIsMedia] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', listenToResize)
    }, [])

    const listenToResize = () => {
        window.innerWidth < 601 ? setIsMedia(true) : setIsMedia(false);
    }
    return (
        <section className="about-us wrapper">
            <article className="intro page-intro">
                <div className="text">
                    <h1 className="headline text-center">Om oss</h1>
                    <h4 className="text-center">Renax har sedan 1993 samlat erfarenhet, certifikat och kompetens inom
                        alla områden som avser
                        städning. Vi har ett starkt fokus på industristädning, fabriksstädning och livsmedelsstädning,
                        men
                        har även grenat ut för att fokusera på kontorsstädning, hemstädning, sanering, butiksstädning
                        och
                        massa andra tjänster inom städ.</h4>
                </div>
            </article>
            <article className="section-first container">
                <div className="row ">
                    <div className="img col-md-6 px-0">
                        <img src={carImg} alt=""/>
                    </div>
                    <div className="about-text col-md-6 ">
                        <h1>Industriledande städföretag</h1>
                        <p>Vårt starka fokus är i våra kundrelationer, där vi arbetar långsiktigt och med fokus att en
                            kund
                            ska vara kund så länge dem har behovet av en städfirma, något som har varit otroligt lönsamt
                            för
                            oss. Organisationen har utvecklats och skalats i samband med behoven som presenterat sig och
                            våra anställda är välutbildade och vi har lyckats skapa en arbetsmiljö där anställda stannar
                            i
                            flera år.</p>
                    </div>
                </div>
            </article>
            <article className="section-first container">
                <div className="row">
                    <div className={`about-text col-md-6 ${!isMedia ? 'order-first':'order-last'}`}>
                        <h1>Nöjda kunder och nöjd personal går hand i hand</h1>
                        <p>Nöjda kunder och nöjd personal går hand i hand

                            Renax AB sysselsätter idag över 100 anställda, med kontor i Helsingborg, XXX, XXX, XX och
                            vår
                            organisation är utvecklad för att kunna hantera kunder i hela Sverige.

                            Vi är en aktiv affärsorienterad verksamhet, ständigt utvecklande och anpassad efter kundens
                            och
                            branschens krav. Den högsta kvalitén är det enda vi nöjer oss med och våra referenser talar
                            väl
                            för oss.</p>
                    </div>
                    <div className="img second col-md-6 px-0">
                        <img src={happyCustomerImg} alt=""/>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default About;