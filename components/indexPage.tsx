"use client"
import { useState } from "react"
import Login from "./login"
import Registro from "./registro"

const IndexPage= () => {
    const [showLogin,setShowLogin] = useState(false)
    const [showRegistro,setShowRegistro] = useState(false)

    const handleLoginClick = () => {
        setShowLogin(true)
    }

    const handleRegistroClick = () => {
        setShowRegistro(true)
    }

    const handleCloseLogin = () => {
        setShowLogin(false)
    }
    const handleCloseRegistro = () => {
        setShowRegistro(false)
    }

    return(
        <div>
            <button onClick={handleLoginClick}>Iniciar Sesión</button>
            <br />
            <button onClick={handleRegistroClick}>Registro</button>
            { showLogin && <Login onClose={handleCloseLogin}/>}
            { showRegistro && <Registro onClose={handleCloseRegistro}/>}
        </div>
    )
}

export default IndexPage