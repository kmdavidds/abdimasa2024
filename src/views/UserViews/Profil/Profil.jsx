import React from 'react';

//section
import HeroProfile from './section/HeroProfile';
import Sambutan from './section/Sambutan';

const Profil = () => {

    return(
        <>
            <div>
                <HeroProfile/>
                <Sambutan />
            </div>
        </>
    );
};

export default Profil;