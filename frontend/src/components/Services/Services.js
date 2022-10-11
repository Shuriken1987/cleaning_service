import allServices from "../../assets/services.json"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Services = () => {
    const [all, setAll] = useState([]);

    useEffect(() => {
        setAll(allServices);
    }, []);

    return (
        <div className="services text-center">
            <h1>Tjänster</h1>
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
                                <p className="service-text">{el.text}</p>
                            </div>
                            <Link className="read-more">Läs mer</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default Services;