import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourClients from "../../assets/clients.json"
import {useState, useEffect} from "react";

const OurPartnersSlider = ()=>{
    const [clients, setAllClients] = useState([]);

    useEffect(() => {
        setAllClients(ourClients);
    }, []);

        const setts = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true, dots: true
    };



    return <>
        <div className="our-clients">
            <div className="section-header">
                <h1 className="text-center">Våra klienter</h1>
            </div>
            <Slider {...setts}>
                {clients.map((client, index) => {
                    return <div className="slider-card" key={index}>
                        <img src={client.imgPath} alt=""  />
                    </div>
                })}
            </Slider>
        </div>

    </>
}
export default OurPartnersSlider;