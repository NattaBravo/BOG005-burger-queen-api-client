import background from '../Resources/background.png';
import logoBQ from '../Resources/LogoBQ.png';
import BQtitle from '../Resources/BQtitle.png'
import '../Css/Login.css';
import React from 'react';
// import state from 'react';

class Login extends React.Component {

  manejadorSubmit = (e) => {
    e.preventDefault();
  };

  state = {
    form: {
      username: "",
      password: ""
    }
  };

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form)
  }

  manejadorBoton(){
    console.log("enviado")
  }



  render() {
    return (



        <React.Fragment>
        <section className="LoginContainer">
          <img src={background} className="backgroundImg" alt="" />

          <section className='LoginForm'>

            <img src={logoBQ} alt="" className='logoBQ' />
            <img src={BQtitle} alt="" className='BQtitle' />

            <h1>Login</h1>
            <form onSubmit= {this.manejadorSubmit}></form>
            <input placeholder='Usuario' className='inputLogin' name="username" onChange={this.handleChange}></input>
            <input placeholder='Contraseña' className='inputLogin' password='password' onChange={this.handleChange}></input>
            <button className='buttonLogin' onClick={this.manejadorBoton}>Login</button>
            <p>¿Olvidaste tu constraseña?</p>
          </section>
        </section>

      </React.Fragment>
    )

  };
}
export default Login;