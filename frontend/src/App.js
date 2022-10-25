import "../src/style/style.scss";
import {Routes, Route} from "react-router-dom";
import {routeConfig} from "./config/routeConfig";
import {motion, useScroll} from "framer-motion";

import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from './pages/NotFound';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
    const {scrollYProgress} = useScroll();

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={routeConfig.HOME.url} element={<Home/>}/>
                <Route path={routeConfig.SERVICES.url} element={<Service/>}/>
                <Route path={routeConfig.ABOUT.url} element={<About/>}/>
                <Route path={routeConfig.CONTACT.url} element={<Contact/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
            {/*SCROLL PROGRESS DIV AT THE TOP OF THE PAGE*/}
            <motion.div className="progress-bar" style={{scaleX: scrollYProgress}}/>
        </div>
    );
}

export default App;
