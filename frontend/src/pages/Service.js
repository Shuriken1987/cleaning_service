import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import allServices from "../assets/services.json";
import {LazyLoadImage} from "react-lazy-load-image-component";
import happyCustomerImg from "../img/nojd-kund.jpg";
import {useInView} from "framer-motion"
import {useRef} from "react";
import {motion, useScroll} from "framer-motion";

const Service = () => {
    const [service, setService] = useState({});
    const [isParamsValid, setIsParamsValid] = useState(true);
    const params = useParams();
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});


    const styles = {
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }

    useEffect(() => {
        allServices.map((singleService, index) => {
            if (singleService.title === params.serviceTitle) {
                return setService(singleService);
            }
        })
    }, [params.serviceTitle]);


    return (
        <>
            <section className="services-page wrapper">
                <article className="intro page-intro">
                    <div className="text">
                        <h1 className="headline text-center">Våra tjänster</h1>
                        <h4 className="text-center">
                            Renax AB är ett städföretag som har länge erbjudit industriledande och
                            miljöcertifierad städservice inom industristädning, fabriksstädning, livsmedelsstädning och
                            kontorsstädning.
                            Vi är verksamma i hela Sverige och anställer idag runt 100 anställda med uppdrag åt stora
                            livsmedelsföretag och mindre lokalvård.
                        </h4>
                    </div>
                </article>

                <article className="section" >
                    <div className="container is--services">
                        <div className="sticky-parrent">
                            <div className="sticky-box">
                                <LazyLoadImage src={service.path} alt={service.title}/>
                            </div>
                            <div id="more" className="tab-content is--services" ref={ref} >
                                <div className="benefits__left-block" style={styles}>
                                    <div id="live-update" className="colored-headings" >
                                        <h2 className="heading-white">{service.title}</h2>
                                        <h2 className="heading-colored">{service.description}</h2>
                                    </div>
                                    <p className="main-p is--padding sm-width">
                                        {service.text}
                                    </p>
                                </div>
                                <motion.div className="benefits__left-block"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }} >
                                    <div id="live-update" className="colored-headings" >
                                        <h2 className="heading-colored">{`Varför välja Renax för er ${service.title}?`}</h2>
                                    </div>
                                    <p className="main-p is--padding sm-width">
                                        Med vår långa historia daterat sedan 1993, stor lista av referenskunder och
                                        samtliga certifikat som behövs, så är det en självklarhet att välja Renax som er
                                        partner inom er fabriksstädning. Vår organisation är sammansvetsad med fokuset
                                        att vara ledande inom företagsstäd och i den kategorin så faller fabriksstädning
                                        in. Konkurrenskraftiga priser, en direkt kontaktperson och en service som alltid
                                        är anpassad efter just er fabriks behov, är några av anledningarna till att du
                                        ska välja just oss.

                                    </p>
                                </motion.div>
                                <motion.div className="benefits__left-block" initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}>
                                    <div id="live-update" className="colored-headings">
                                        <h2 className="heading-colored">{`Hur bokar jag ${service.title} av Renax?`}</h2>
                                    </div>
                                    <p className="main-p is--padding sm-width">
                                        1. Du kontaktar oss för ett möte, antingen genom att ringa.
                                    </p>
                                    <p className="main-p is--padding sm-width">
                                        2. Vi diskuterar utmaningarna som finns för just er fabrik och bestämmer ett
                                        datum
                                        för ett besök.
                                    </p><p className="main-p is--padding sm-width">
                                    3. Vid besöket så dokumenterar vi alla områden och processor som ska medföras i vår
                                    städning av er fabrik.
                                </p><p className="main-p is--padding sm-width">
                                    4. Vi gör en beräkning på priset och erbjuder er en kostnadsfri offert.
                                </p>
                                    <p className="main-p is--padding sm-width">
                                        5. När ni accepterat offerten så sätter vi ihop ett team av städare med rätt
                                        erfarenhet och kompetens och kan påbörja städningen med kort varsel.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}
export default Service;