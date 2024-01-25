"use client"
import Link from "next/link";
import { useState } from "react";
/*import formStyles from "@/styles/formStyles.module.css"*/

const Registro = ({onClose} : { onClose: () => void }) => {
    const [email,setEmail] = useState('micorreo@micorreo.com')
    const [password,setPassword] = useState('')
    const handleRegistro= ()=>{
        console.log(`Registro con correo: ${email} y contraseña: ${password}`);
    }
    return(
        <div /*className={formStyles.modal}*/>
            <div /*className={formStyles.modal_content}*/>
                <h2>Registro</h2>
                <label htmlFor="email">Correo:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e)=>{
                    e.preventDefault
                    setEmail(e.target.value)
                }}/>
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e)=>{
                    e.preventDefault
                    setPassword(e.target.value)
                }}/>
                <button onClick={handleRegistro}>Registrar</button>
                <p>¿Ya tienes cuenta? <Link href="/pages/login">Inicia Sesión</Link></p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default Registro