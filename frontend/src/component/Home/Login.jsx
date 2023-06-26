import React, { useEffect, useState } from 'react'
import "./login.css";
import { Toast } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefult();
        if (username == "") {
            return Toast.warn("Username can not be empyt")

        }
        if (username == "") {
            return Toast.warn("Username can not be empyt")

        }
        dispatchlLogin(username, password)
    }





    return (
        <div className="loginContainer">
            <div className="form-container p-4">
                <div className="text-cn text-center">
                    <h3>Login</h3>
                    <p>Please Fill Out This Form</p>
                </div>
                <form >

                    <div className="inp-container">
                        <input type="text" name='username' id="username" placeholder='Username' required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="inp-container">
                        <input type="password" name='password' id="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="btn-container text-center">
                        <button type='submit' className='btn btn-warning text-white' onClick={(e) => handleLogin(e)} > Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login