import gif from "../img/icons8-services.gif";

const Services = () => {

    return (
        <section className="services-page wrapper">
            <article className="intro page-intro">
                <div className="text">
                    <h1 className="headline text-center">Våra tjänster</h1>
                    <h4 className="text-center">Renax AB är ett städföretag som har länge erbjudit industriledande och
                        miljöcertifierad städservice inom industristädning, fabriksstädning, livsmedelsstädning och
                        kontorsstädning.

                        Vi är verksamma i hela Sverige och anställer idag runt 100 anställda med uppdrag åt stora
                        livsmedelsföretag och mindre lokalvård.</h4>
                </div>
            </article>
            <div className="comming-soon">
                <img src={gif} alt="Comming soon..." style={{width: 200, height: 200}}/>
            </div>
        </section>
    )
}
export default Services;