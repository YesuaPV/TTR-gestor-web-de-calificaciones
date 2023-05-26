import React from 'react';
import Consultas from '../pages/consulta';
import { useState } from 'react';

const ConsultasContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page = "Consultas";


    return(
        <Consultas visible={ navVisible } show={ showNavbar } page = { page }/>
    )
};

export default ConsultasContainer;