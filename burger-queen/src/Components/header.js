import React from 'react';
import logoBQ from '../Resources/LogoBQ.png';
import { Link, useNavigate } from 'react-router-dom';


function HeaderBQ() {

    const navigate = useNavigate();

    const returnFunction = () => {
        navigate(-1)
    }

    return (
        <React.Fragment>
            <header className='mainHeader'>
                <button onClick={returnFunction} className="returnButton" />
                <img src={logoBQ} alt="" className='mainLogo'></img>
                <nav>
                    <ul>
                        <li>
                            <Link to="/waiter">Home</Link>
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