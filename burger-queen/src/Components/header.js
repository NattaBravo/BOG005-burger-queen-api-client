import React from 'react';
import logoBQ from '../Resources/LogoBQ.png';
import BQtitle from '../Resources/BQtitle2.png'
import { Link, useNavigate } from 'react-router-dom';


function HeaderBQ() {

    const navigate = useNavigate();

    const returnFunction = () => {
        navigate(-1)
    }

    const nav = document.querySelector("#nav");

    const openCloseRespMenu = () =>{
        nav.classList.toggle("nav-visible")
        console.log("Ven mirame")
    }



    return (
        <React.Fragment>
            <header className='mainHeader'>
                <button onClick={returnFunction} className="returnButton" />
                <section className='logo'>
                <img src={logoBQ} alt="" className='mainLogo'></img>
                <img src={BQtitle} alt="" className='mainTitleBQ'></img>
                </section>
                <button className="responsiveMenu" id="openCloseResponsiveMenu" onClick={openCloseRespMenu}>abrir</button>
                <nav className='nav' id="nav">
                    <ul className='navList'>
                        <li>
                            <Link to="/waiter">Home</Link>
                        </li>
                        <li>
                            <Link to="/waiter">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/waiter">Contacto</Link>
                        </li>
                        <li>
                            <Link to="/">Cerrar sesión</Link>
                        </li>
                    </ul>
                </nav>

            </header>
        </React.Fragment>
    )

}

export { HeaderBQ }