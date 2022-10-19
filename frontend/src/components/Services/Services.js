import allServices from "../../assets/services.json";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {routeConfig} from "../../config/routeConfig";

const Services = () => {
    const [all, setAll] = useState([]);

    useEffect(() => {
        setAll(allServices);
    }, []);

    return (
        <section className="services text-center">
            <h1>Våra tjänster</h1>
            <div className="service-holder">
                {all.map((el, index) => {
                    return (
                        <div className="col-md-4" key={index}>
                            <div className="holder">
                                <img src={el.path} alt="ja" style={{height: "100%"}} className="services-img"/>
                                <div id="color-overlay"></div>
                            </div>
                            <div className="text-holder">
                                <p className="service-title">{el.title}</p>
                                <p className="service-text">{el.description}</p>
                            </div>
                            <Link className="btns read-more" to={routeConfig.SERVICES.realUrl(el.title)}>Läs mer</Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )

}
export default Services;