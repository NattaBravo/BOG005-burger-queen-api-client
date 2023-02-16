import background from '../Resources/background.png';
import logoBQ from '../Resources/LogoBQ.png';
import BQtitle from '../Resources/BQtitle.png'
import '../Css/Login.css';
import { React, useState } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';

const AdmPage = "/admin"
const WaiterPage = "/waiter"


export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = 'http://localhost:8080/login'

  const emailController = (e) => {
    setEmail(e.target.value);
  };

  const passwordController = (e) => {
    setPassword(e.target.value)
  };

  const submit = (e) => {
    e.preventDefault();
  }

  const loginFunction = () => {
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem("token", response.data.accessToken);
        const role = response.data.user.role;
        alert("Entrando")
        switch (role) {
          case "admin":
            console.log("Dentro de switch");
            navigate(AdmPage);
            break;
          case "waiter":
            navigate(WaiterPage);
            break;
          case "":
            console.log("funcionéeeeeeee");
            break;
          default:

        }
      })
      .catch(error => 
        window.confirm("El usuario y/o la contraseña son incorrectos")
      
      
      )
  }
  return (

    <>
      <section className="LoginContainer">
        <img src={background} className="backgroundImg" alt="" />

        <section className='LoginForm'>

          <img src={logoBQ} alt="" className='logoBQ' />
          <img src={BQtitle} alt="" className='BQtitle' />


          <form onSubmit={submit}></form>
          <p className='pLogin'>Email</p>
          <input
            className='inputLogin'
            name="email"
            onChange={emailController}
          ></input>
          <p className='pPassword'>Contraseña</p>
          <input
            className='inputLogin'
            name='password'
            onChange={passwordController}
          ></input>
          <button className='buttonLogin' onClick={loginFunction}>Login</button>
      
        </section>
      </section>

    </>
  )

}
export default Login;
