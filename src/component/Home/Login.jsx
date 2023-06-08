import React, { useEffect, useState } from 'react'
import "./login.css";

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="form-container p-4">
                <div className="text-cn text-center">
                    <h3>Login</h3>
                    <p>Please Fill Out This Form</p>
                </div>
                <form >
                    
                                        <div className="inp-container">
                        <input type="text" name='username' id="username" placeholder='Username' required />
                    </div>
                    <div className="inp-container">
                        <input type="password" name='password' id="password" placeholder='Password' required />
                    </div>
                    <div className="btn-container text-center">
                        <button type='submit' className='btn btn-warning text-white' > Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage