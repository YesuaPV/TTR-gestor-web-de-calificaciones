import React from 'react';
import {AiFillHome, AiOutlineReconciliation} from 'react-icons/ai';
import {GoThreeBars, GoGraph} from 'react-icons/go';
import {BiSearchAlt, BiEdit} from 'react-icons/bi';
import {SiMicrosoftexcel} from 'react-icons/si';
import descarga from '../images/descarga.png';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

function Navbar({visible, show, page}) {
	return (
        <div className="sticky">
            <div className="mobile-nav">
                <button
                    className="mobile-nav-btn"
                    onClick={() => show(!visible)}
                >
                <GoThreeBars size={24}  />
                </button>
            </div>
            <nav className={!visible ? 'navbart' : ''}>
                <button
                    type="button"
                    className="nav-btn"
                    onClick={() => show(!visible)}
                >
                    { <GoThreeBars size={30}/>}
                </button>
                <div>
                    <NavLink
                        className="logo"
                    >
                    <img
                        src={descarga}
                        alt="logo"
                    />
                    </NavLink>
                    <div className="links nav-top">
                        <Link to="/home" className={page==="Dashboard" ? "nav-link-selected" : "nav-link" }>
                            <div className='icones shadow-box'> <AiFillHome/></div> 
                            <span>Inicio</span>
                        </Link>
                        <Link to="/solicitudes" className={page==="Consulta" ? "nav-link-selected" : "nav-link" }>
                            <div className='icones shadow-box'> <BiSearchAlt/></div> 
                            <span>Consulta</span>
                        </Link>
                        <Link to="/estadisticas" className={page==="Estadisticas" ? "nav-link-selected" : "nav-link" }>
                            <div className='icones shadow-box'> <GoGraph/></div> 
                            <span>Estadísiticas</span> 
                        </Link>
                        <NavLink className={page==="Manual" ? "nav-link-selected" : "nav-link" }>                            
                            <div className='icones shadow-box'> <BiEdit/></div> 
                            <span>Ingreso manual</span> 
                        </NavLink>
                        <NavLink className={page==="Excel" ? "nav-link-selected" : "nav-link" }>                            
                            <div className='icones shadow-box'> <SiMicrosoftexcel/></div> 
                            <span>Cargar información</span> 
                        </NavLink>
                        <Link to="/solicitudes" className={page==="Solicitudes" ? "nav-link-selected" : "nav-link" }>                            
                            <div className='icones shadow-box'> <AiOutlineReconciliation/></div> 
                            <span>Solicitudes</span> 
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;