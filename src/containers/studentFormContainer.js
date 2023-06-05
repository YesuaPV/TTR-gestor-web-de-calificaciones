import React from 'react';
import StudentForm from '../pages/studentForm';
import { useState } from 'react';

const StudentFormContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page = "Registrar Estudiante";


    return(
        <StudentForm visible={ navVisible } show={ showNavbar } page = { page }/>
    )
};

export default StudentFormContainer;