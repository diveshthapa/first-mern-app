import React, { useEffect, useState } from 'react'
import "./reg.css";

const RegisterPage = () => {
    return (
        <div className="registerPageContainer">
            <div className="form-container p-4">
                <div className="text-cn text-center">
                    <h3>Register</h3>
                    <p>Please Fill Out This Form</p>
                </div>
                <form >
                    <div className="inp-container" id="name-container">
                        <input type="text" name='fname' id="fname" placeholder='First Name' required />
                        <input type="text" name='lname' id="lname" placeholder='Last Name' required />
                    </div>

                    <div className="inp-container">
                        <input type="email" name='email' id="email" placeholder='Email Address' required />
                    </div>
                    <div className="inp-container">
                        <input type="text" name='username' id="username" placeholder='Username' required />
                    </div>
                    <div className="inp-container">
                        <input type="password" name='password' id="password" placeholder='Password' required />
                    </div>
                    <div className="btn-container text-center">
                        <button type='submit' className='btn btn-warning text-white' > Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage