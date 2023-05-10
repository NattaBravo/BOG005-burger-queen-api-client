import React from 'react';
import logoBQ from '../Resources/LogoBQ.png';
import { Link } from 'react-router-dom';

function HeaderBQ() {

    return (
        <React.Fragment>
            <header className='mainHeader'>
                <img src={logoBQ} alt="" className='mainLogo'></img>
                <nav>
                    <ul>
                        <li>
                            <Link to="/waiter">Waiter Page</Link>
                        </li>
                        <li>
                            <Link to="/Breakfast">Desayunos</Link>
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