import React from "react";
import './home.css';
import Seccion1 from "./Seccion1/Seccion1";
import Seccion2 from './Seccion2/Seccion2';
import Seccion3 from "./Seccion3/Seccion3";
import Banner1 from "./Banner/Banner1";
import Footer from "./Footer/Footer";
const Home = () =>{
    return(
        <div>
        <div id="section1"  className="section"> <Seccion1 /> </div>
        <div id="banner1"    className="banner"> <Banner1 />  </div>
        <div id="section2"  className="section"> <Seccion2 /> </div>
        <div id="banner2"    className="banner">  <Banner1 />  </div>
        <div id="section3"  className="section"> <Seccion3 /> </div>
        <div id="banner3"    className="banner"> <Banner1 />  </div>
        <footer> <Footer /> </footer>
        {/* Agrega más secciones si es necesario */}
      </div>
    )
}

export default Home;