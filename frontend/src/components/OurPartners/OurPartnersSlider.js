import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourClients from "../../assets/clients.json"
import {useState, useEffect} from "react";

const OurPartnersSlider = () => {
    const [clients, setAllClients] = useState([]);

    useEffect(() => {
        setAllClients(ourClients);
    }, []);

    // Slider config
    const setts = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }

            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    };


    return <>
        <div className="our-clients">
            <Slider {...setts}>
                {clients.map((client, index) => {
                    return <div className="slider-card" key={index}>
                        <img src={client.imgPath} alt=""/>
                    </div>
                })}
            </Slider>
        </div>

    </>
}
export default OurPartnersSlider;