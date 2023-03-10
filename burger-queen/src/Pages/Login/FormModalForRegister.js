import { useState } from "react";
import { CreateUser } from "../Requests";

const FormModalForRegister = ({ openRegisterModal, setOpenRegisterModal }) => {

    const closeRegisterModal = () => {
        setOpenRegisterModal(false)
    }

    const [emailforRegister, setEmailforRegister] = useState("");
    const [passwordforRegister, setPasswordforRegister] = useState("");
    const [roleForRegister, setRoleForRegister] = useState("");


    const onChangeEmail = (e) => {
        setEmailforRegister(e.target.value)
    }
    const onChangePassword = (e) => {
        setPasswordforRegister(e.target.value)
    }
    const onChangeRole = (e) => {
        setRoleForRegister(e.target.value)
    }

    const infoForRegister = {
        "email": emailforRegister,
        "password": passwordforRegister,
        "role": roleForRegister,
    }

    const createUserFunction = () => {
        CreateUser(infoForRegister)
            .then(res => {
                console.log(res)
                setOpenRegisterModal(false)
            })
            .catch(error => console.log(error))
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="modalHeader">
                <h1 className="principalTitle">REGISTRO</h1>
                <button
                    className="closeButton"
                    onClick={closeRegisterModal}>X</button>
            </div>
            <form onSubmit={onSubmit} className="formModal">
                <h2>Email:</h2>
                <input
                    value={emailforRegister}
                    onChange={onChangeEmail}></input>

                <h2>Contraseña:</h2>
                <input
                    value={passwordforRegister}
                    onChange={onChangePassword}></input>

                <section>
                    <h2>Rol:</h2>
                    <select className="selectType" onChange={onChangeRole}>
                        <option>Selecciona</option>
                        <option value="admin">Administrador</option>
                        <option value="waiter">Mesero</option>
                        <option value="chef">Cocinero</option>
                    </select>
                </section>

                <section>
                    <button type="submit" className="modalButtons" onClick={createUserFunction}>GUARDAR</button>
                    <button className="modalButtons" onClick={() => { setOpenRegisterModal(false) }}>CANCELAR</button>

                </section>



            </form>
        </>
    )

}

export { FormModalForRegister } 