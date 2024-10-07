import React from 'react';

//section
import HeroProfile from './section/HeroProfile';
import Sambutan from './section/Sambutan';
import SejarahDesa from './section/SejarahDesa';

const Profil = () => {

    return(
        <>
            <div>
                <HeroProfile/>
                <Sambutan />
                <SejarahDesa />
            </div>
        </>
    );
};

export default Profil;