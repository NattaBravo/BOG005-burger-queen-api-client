import background from '../Resources/background.png';
import logoBQ from '../Resources/LogoBQ.png';
import BQtitle from '../Resources/BQtitle.png'
import '../Css/Login.css';
import React from 'react';

function Login() {
  return (
    <React.Fragment>
      <section className="LoginContainer">
        <img src={background} className="backgroundImg" alt="" />
        
        <section className='LoginForm'>
         
            <img src={logoBQ} alt="" className='logoBQ' />
            <img src={BQtitle} alt="" className='BQtitle' />
      
            <h1>Login</h1>
            <input placeholder='Usuario' className='inputLogin'></input>
            <input placeholder='Contraseña' className='inputLogin'></input>
            <button className='buttonLogin'>Login</button>
            <p>¿Olvidaste tu constraseña?</p>

        </section>
      </section>

    </React.Fragment>
  );
}

export default Login;


/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/