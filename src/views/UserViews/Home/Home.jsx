import { Link } from "react-router-dom";
import React from 'react';

// section
import Landing from "./section/Landing";
import AboutDesa from "./section/AboutDesa";
// import WisataUMKM from "./section/WisataUMKM";
// import KotakSaran from "./section/KotakSaran";
// import Kalender from "./section/Kalender";
// import KataMereka from "./section/KataMereka";

const Home = () => {

    return(
        <>
        <div>
            <Landing />
            <AboutDesa />
            {/* 
            <WisataUMKM/>
            <KotakSaran/>
            <Kalender/>
            <KataMereka/> */}
        </div>
        </>
    );
};

export default Home;