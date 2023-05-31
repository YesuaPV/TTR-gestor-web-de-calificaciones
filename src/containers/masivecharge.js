import React from 'react';
import Masive from '../pages/masivecharge';
import { useState } from 'react';

const MasiveContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page = "Cargar Informacion";

    return(
        <Masive visible={ navVisible } show={ showNavbar } page = { page }/>
    )
};

export default MasiveContainer;