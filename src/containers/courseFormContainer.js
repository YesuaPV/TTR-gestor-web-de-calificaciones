import React from 'react';
import CourseForm from '../pages/courseForm';
import { useState } from 'react';

const CourseFormContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page = "Nuevo Curso";


    return(
        <CourseForm visible={ navVisible } show={ showNavbar } page = { page }/>
    )
};

export default CourseFormContainer;