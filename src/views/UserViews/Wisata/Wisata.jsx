import { Link } from "react-router-dom";
import React from 'react';

import Populer from './section/Populer';
import Lainnya from './section/Lainnya';
import Maskot from './section/Maskot';

const wisata = () => {

  return(
    <>
    <div>
        <Populer />
        <Lainnya />
        <Maskot />
    </div>
    </>
  );
};

export default wisata;