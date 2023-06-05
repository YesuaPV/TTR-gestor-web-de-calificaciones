import React from 'react';
import TeacherForm from '../pages/teacherForm';
import { useState } from 'react';

const TeacherFormContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page = "Registrar Profesor";


    return(
        <TeacherForm visible={ navVisible } show={ showNavbar } page = { page }/>
    )
};

export default TeacherFormContainer;