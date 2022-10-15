import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import allServices from "../assets/services.json";


const Service = () => {
    const [service, setService] = useState({});
    const [isParamsValid, setIsParamsValid] = useState(true);
    const params = useParams();

    //     const getService = () => {
    //     fetch(params.productId)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 setService(res.data);
    //             }
    //             if (!res.data) {
    //                 setIsParamsValid(false)
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //         .finally(() => {
    //             setIsApiFinished(true);
    //         });
    // };

    useEffect(()=>{
        allServices.map((singleService,index)=>{
            if (singleService.title === params.serviceTitle){
                setService(singleService);
            }
        })
    },[params.serviceTitle]);

    return (
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
            <div>
            </div>
        </section>
    )
}
export default Service;