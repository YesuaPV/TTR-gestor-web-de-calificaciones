import React, { useState } from 'react';
import '../styles/solicitudes.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BsGearFill} from 'react-icons/bs';
import Navbar from '../components/navbar';
import Header from '../components/header';
import IMG from "../images/descarga.png";


const Consulta = ({visible, show, page}) => (
    <>
        <Navbar visible={visible} show={show} page={page} /> 
        <div className='s-body_index'>
            <div className="main-container">
               <Header page={page} page2={page}/> 
                <div className="s-content">
                    <div className='s-box-head'>
                        <div className='s-text-head'>Solicitudes de certificados</div>
                    </div>
                    <div className='s-box-list'>
                         <div className="s-box-element">
                            <div className='s-box-name'>
                                <div className='s-box-foto'>
                                    <img
                                        src={IMG}
                                        alt="estadistica1"
                                        className='s-img'
                                    />
                                </div> 
                                <div className='s-box-nombre'>Luis Pérez</div>
                                <div className='s-box-email'>luisperez@gmail.com</div> 
                            </div>
                            <div className='s-status-generada s-status'>Generada</div>
                            <div className='s-txt-fecha'>18/05/2023</div>
                            <div className='s-txt-edit'>Editar</div>
                        </div>
                        <div className="s-box-element">
                            <div className='s-box-name'>
                                <div className='s-box-foto'>
                                    <img
                                        src={IMG}
                                        alt="estadistica1"
                                        className='s-img'
                                    />
                                </div> 
                                <div className='s-box-nombre'>Luis Pérez</div>
                                <div className='s-box-email'>luisperez@gmail.com</div> 
                            </div>
                            <div className='s-status-pendiente s-status'>Pendiente</div>
                            <div className='s-txt-fecha'>18/05/2023</div>
                            <div className='s-txt-edit'>Editar</div>
                        </div>
                        <div className="s-box-element">
                            <div className='s-box-name'>
                                <div className='s-box-foto'>
                                    <img
                                        src={IMG}
                                        alt="estadistica1"
                                        className='s-img'
                                    />
                                </div> 
                                <div className='s-box-nombre'>Luis Pérez</div>
                                <div className='s-box-email'>luisperez@gmail.com</div> 
                            </div>
                            <div className='s-status-pendiente s-status'>Pendiente</div>
                            <div className='s-txt-fecha'>18/05/2023</div>
                            <div className='s-txt-edit'>Editar</div>
                        </div>
                        <div className="s-box-element">
                            <div className='s-box-name'>
                                <div className='s-box-foto'>
                                    <img
                                        src={IMG}
                                        alt="estadistica1"
                                        className='s-img'
                                    />
                                </div> 
                                <div className='s-box-nombre'>Luis Pérez</div>
                                <div className='s-box-email'>luisperez@gmail.com</div> 
                            </div>
                            <div className='s-status-pendiente s-status'>Pendiente</div>
                            <div className='s-txt-fecha'>18/05/2023</div>
                            <div className='s-txt-edit'>Editar</div>
                        </div>
                       <div className="s-box-element">
                            <div className='s-box-name'>
                                <div className='s-box-foto'>
                                    <img
                                        src={IMG}
                                        alt="estadistica1"
                                        className='s-img'
                                    />
                                </div> 
                                <div className='s-box-nombre'>Luis Pérez</div>
                                <div className='s-box-email'>luisperez@gmail.com</div> 
                            </div>
                            <div className='s-status-pendiente s-status'>Pendiente</div>
                            <div className='s-txt-fecha'>18/05/2023</div>
                            <div className='s-txt-edit'>Editar</div>
                        </div>
                        <div className="s-box-element">
                            <div className='s-box-name'>
                                <div className='s-box-foto'>
                                    <img
                                        src={IMG}
                                        alt="estadistica1"
                                        className='s-img'
                                    />
                                </div> 
                                <div className='s-box-nombre'>Luis Pérez</div>
                                <div className='s-box-email'>luisperez@gmail.com</div> 
                            </div>
                            <div className='s-status-pendiente s-status'>Pendiente</div>
                            <div className='s-txt-fecha'>18/05/2023</div>
                            <div className='s-txt-edit'>Editar</div>
                        </div>
                        <div className="s-box-element">
                            <div className='s-box-name'>
                                <div className='s-box-foto'>
                                    <img
                                        src={IMG}
                                        alt="estadistica1"
                                        className='s-img'
                                    />
                                </div> 
                                <div className='s-box-nombre'>Luis Pérez</div>
                                <div className='s-box-email'>luisperez@gmail.com</div> 
                            </div>
                            <div className='s-status-pendiente s-status'>Pendiente</div>
                            <div className='s-txt-fecha'>18/05/2023</div>
                            <div className='s-txt-edit' type="button">Editar</div>
                        </div>
                    </div>
                </div>
                <div className='s-float-icon shadow-box'>
                    <BsGearFill /> 
                </div>
            </div>
            
        </div>
    </>
);

export default Consulta;