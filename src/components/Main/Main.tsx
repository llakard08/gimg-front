import React, {FC, useState} from 'react';
import "../../App.css"
import Hero from "../Hero/Hero";
import WhyGIMG from "../WhyGIMG/WhyGIMG";
import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import GIMGCarousel from "../GIMGCarousel/GIMGCarousel";

interface MainProps {
}

const Main: FC<MainProps> = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);

    return (<>
            <Header mobileMenuActive={mobileMenuActive}
                    setMobileMenuActive={setMobileMenuActive}/>
            <Hero/>
                <>
                    <WhyGIMG/>
                    <AboutProject/>
                    <GIMGCarousel/>
                    <Contact/>
                    <Footer/>
                </>

        </>
    )
};

export default Main;
