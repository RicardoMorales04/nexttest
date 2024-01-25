"use client"
import { useState } from "react"

const Counter = () => {
    const [counter,setCounter] = useState(0)
    const [showMessage,setShowMessage] = useState(false) 
    return(
       <div>
        <p>Haz hecho click {counter} veces</p>
        <button onClick={() => {
            setCounter(counter+1)
        }}>Click</button>
<br /><br />
        <button onClick={()=>{
            setShowMessage(!showMessage)
        }}>{
        !showMessage ? "Mostrar Mensaje" : "Ocultar Mensaje"}</button>
        {
            showMessage && <p>¡¡Hola Mundo!!</p>
        }
       </div>
    )
}

export default Counter;