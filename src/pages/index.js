import React from 'react';
import '../styles/Index.css';
import Fade from "react-reveal/Fade";
import IMG from "../images/50+1logo.png";
import Imgg from "../images/Consulta.png";
import Imgc from "../images/Constancia.png";
import Imga from "../images/Actualizacion.png";

import ParticlesComponent from '../components/Particles';

const Index = () => (
        <div>
                <div className='gridtop'>
                        <div className='topgrid1'>
                                <h1 className='titulo'>50 + 1</h1>
                                <h2 className='descripcion'>Colectiva Nacional de #mujeres que nos une #AgendaDeGénero para alcanzar #IgualdadSustantiva respetando los #DDHH y #ConstruyendoSororidad.</h2>
                        </div>
                        <div className='topgrid2'>
                                <Fade bottom>
                                        <span className="scroll-btn">
                                                <a href="#home">
                                                        <span className="mouse">
                                                                <span></span>
                                                        </span>
                                                </a>
                                        </span>
                                </Fade>
                        </div>
                </div>

                <div className='parbotgrid'>
                 <div className='botgrid1'/>
                 <div className='botgrid2'>
                 <div className='log-loginfo'>
                    <div className='log-header'>
                        <img className='log-imacos' src={IMG} alt="logo fundacion 50 + 1"/>
                    </div> 
                    <form className='log-cont-form-reg' >
                        <h1 className='log-semititu'>Email</h1>  
                        <input className='log-input' type="text" name="txtEmail" placeholder="Email"/>
                        <h1 className='log-semititu'>Contraseña</h1>  
                        <input className='log-input' type="password" name="txtPass" placeholder="Contraseña"/>
                        <button className='log-boton-form'>Iniciar sesion</button>
                    </form>
                </div>

                 </div>
                 <div className='imgcard0'>
                                <img className='log-imacos' src={Imgg} alt="logo fundacion 50 + 1"/>
                                <h2 className='descripcionb'>Una vez que hayas iniciado sesión en nuestra plataforma, podrás acceder fácilmente a tus cursos inscritos y consultar tus calificaciones. Obtén información detallada sobre tu progreso académico y realiza un seguimiento de tus logros en cada curso.</h2>
                 </div>

                 <div className='imgcard1'>
                                <h2 className='descripcionb'>Una vez que hayas iniciado sesión en nuestra plataforma, podrás acceder fácilmente a tus cursos inscritos y consultar tus calificaciones. Obtén información detallada sobre tu progreso académico y realiza un seguimiento de tus logros en cada curso.</h2>
                                <img className='log-imacos' src={Imgc} alt="logo fundacion 50 + 1"/>
                </div>

                 <div className='imgcard2'>
                                <img className='log-imacos' src={Imga} alt="logo fundacion 50 + 1"/>
                                <h2 className='descripcionb'>Una vez que hayas iniciado sesión en nuestra plataforma, podrás acceder fácilmente a tus cursos inscritos y consultar tus calificaciones. Obtén información detallada sobre tu progreso académico y realiza un seguimiento de tus logros en cada curso.</h2>
                 </div>
                        <div className='botgrid3'>
                               

                        </div>
                </div>

                
                <div className='particlesindex'><ParticlesComponent /></div>


        </div>
);

export default Index;