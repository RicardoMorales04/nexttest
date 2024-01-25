import Link from "next/link";
import { useState } from "react";
/*import formStyles from "@/styles/formStyles.module.css"*/

const Login = ({onClose}) => {
    const [email, setEmail] = useState('micorreo@micorreo.com');
    const [password, setPasword] = useState('');

    const handleLogin = () => {
        console.log(`Login con correo: ${email} y contraseña: ${password}`);
    }

    return (
        <div /*className={formStyles.modal}*/>
            <div /*className={formStyles.modal_content}*/>
                <h2>Iniciar Sesión</h2>
                <label htmlFor="email">Correo:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        e.preventDefault(); // Invoca la función preventDefault
                        setEmail(e.target.value);
                    }}
                />
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        e.preventDefault(); // Invoca la función preventDefault
                        setPasword(e.target.value);
                    }}
                />
                <button onClick={handleLogin}>Iniciar Sesión</button>
                <p>¿No tienes cuenta? <Link href="/pages/registro">Regístrate</Link></p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default Login;
