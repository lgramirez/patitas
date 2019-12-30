import React from 'react';
import { auth, provider } from '../utils/firebase';

const Login = () => {

    const loginFacebook = () => {
        auth().signInWithPopup(provider)
            .then(({ user }) => {
                console.log(user);
            });
    }

    const logoutFacebook = () => {
        auth().signOut()
            .then(() => {
                console.log('cerrar sesion');
            });
    }

    return(
    <div className="Login">
        <div className="Login-container">
            <div className="Login-content">
                <h2>Crear cuenta o Iniciar sesión</h2>
                <button onClick={loginFacebook}>
                    <i className="fab fa-facebook-square" />
                    <span>Iniciar sesión con Facebook</span>
                </button>
                <button onClick={logoutFacebook}>
                    Cerrar Sesión
                </button>
            </div>
        </div>
    </div>
    );
}

export default Login;