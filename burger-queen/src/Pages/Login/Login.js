import background from '../../Resources/background.png';
import logoBQ from '../../Resources/LogoBQ.png';
import BQtitle from '../../Resources/BQtitle.png'
import '../../Css/Login.css';
import { React, useState } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';
import { Modal } from '../Admin/Modal.js/Modal'
import { FormModalForRegister } from './FormModalForRegister';


const AdminPage = "/admin"
const WaiterPage = "/waiter"


export function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showError, setShowError] = useState(false);

  const [incompleteLogin, setIncompleteLogin] = useState(false);

  const [openRegisterModal, setOpenRegisterModal] = useState(false);

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
        const role = response.data.user.role;
        console.log(role);
        window.localStorage.setItem("token", response.data.accessToken);
        switch (role) {
          case "admin":
            console.log("Dentro de switch");
            navigate(AdminPage);
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
        setIncompleteLogin(true)
      )
  }

  const validationsForLogin = () => {
    const regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regExp.test(email)) {
      setShowError(false)
    } else { setShowError(true) }
  }

  const goingToRegister = () => {
    setOpenRegisterModal(true)

  }

  return (

    <>
      <section className="LoginContainer">
        <img src={background} className="backgroundImg" alt="" />

        <section className='LoginForm'>

          <img src={logoBQ} alt="" className='logoBQ' />
          <img src={BQtitle} alt="" className='BQtitle' />


          <form onSubmit={submit}>

            <h2 className='pLogin'>Email</h2>

            <input
              className={`inputLogin ${!showError ? 'inputLoginTrue' : 'inputLoginError'} ${!incompleteLogin ? 'inputLoginTrue' : 'inputLoginError'}`}
              name="email"
              onChange={emailController}
              onBlur={validationsForLogin}
            ></input>

            {showError && <p className='showError'>El email ingresado es incorrecto</p>}

            <h2 className='pPassword'>Contraseña</h2>

            <input
              className={`inputLogin ${!incompleteLogin ? 'inputLoginTrue' : 'inputLoginError'}`}
              name='password'
              onChange={passwordController}
              type="password"
              autoComplete="on"
            ></input>

            <button className='buttonLogin' onClick={loginFunction}>LOGIN</button>
            {incompleteLogin && <p className='showError'>El usuario y/o la contraseña son incorrectos</p>}
            <br></br>
            <h4
              className="optionRegister"
              onClick={goingToRegister}
            >¿No tienes cuenta? ¡Registrate!</h4>

            {!!openRegisterModal && (
              <Modal>
                <FormModalForRegister
                  openRegisterModal={openRegisterModal}
                  setOpenRegisterModal={setOpenRegisterModal} />
              </Modal>
            )}

          </form>

        </section>
      </section>

    </>
  )

}
export default Login;
