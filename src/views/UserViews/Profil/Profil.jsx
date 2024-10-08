import React from 'react';

//section
import HeroProfile from './section/HeroProfile';
import Sambutan from './section/Sambutan';
import SejarahDesa from './section/SejarahDesa';
import VisiMisi from './section/VisiMisi';
import JumlahPenduduk from './section/JumlahPenduduk';

const Profil = () => {

    return(
        <>
            <div>
                <HeroProfile/>
                <Sambutan />
                <VisiMisi />
                <SejarahDesa />
                <JumlahPenduduk />
            </div>
        </>
    );
};

export default Profil;