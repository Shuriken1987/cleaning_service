import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import OurPartnersSlider from "../components/OurPartners/OurPartnersSlider";

const Home = () => {

    return (
        <>
            <Header/>
            <div className="container">
                <Intro/>
                <Services/>
                <OurPartnersSlider/>
            </div>
        </>
    )
}

export default Home;