import allServices from "../../assets/services.json";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {routeConfig} from "../../config/routeConfig";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Services = () => {
    const [ourServices, setOurServices] = useState([]);

    useEffect(() => {
        setOurServices(allServices);
    }, []);

    return (
        <section className="services text-center">
            <h1 className="my-5">Våra tjänster</h1>
            <article className="service-holder row">
                {ourServices.map((el, index) => {
                    return (
                        <div className="col-md-4" key={index}>
                            <div className="holder">
                                <LazyLoadImage src={el.path} alt="ja" style={{height: "700px"}} className="services-img"/>
                                <div id="color-overlay"></div>
                                <div className="text-holder">
                                    <p className="service-title">{el.title}</p>
                                    <p className="service-text">{el.description}</p>
                                </div>
                                <Link className="btns read-more" to={routeConfig.SERVICES.realUrl(el.title)}>Läs mer</Link>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )

}
export default Services;