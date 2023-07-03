
import { useDispatch, useSelector } from "react-redux";
import "./reg.css";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { register } from "../Action/userAction";
import { useNavigate } from "react-router-dom";




const RegisterPage = () => {

    const { isAuthenticated } = useSelector((state) => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
    }, [isAuthenticated])

    const dispatch = useDispatch();



    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (fname == "") {
            return toast.error("First Name cannot be empty.");
        }
        if (lname == "") {
            return toast.error("Last Name cannot be empty.");
        }
        if (email == "") {
            return toast.error("Email cannot be empty.");
        }
        if (username == "") {
            return toast.error("Username cannot be empty.");
        }
        if (password == "") {
            return toast.error("Password cannot be empty.");
        }

        const reg_data = {
            fname,
            lname,
            email,
            username,
            password
        }

        dispatch(register(reg_data));


    }
    return (
        <div className="registerPageContainer">
            <div className="form-container p-4">
                <div className="text-cn text-center">
                    <h3>Register</h3>
                    <p>Please Fill Out This Form</p>
                </div>
                <form >
                    <div className="inp-container" id="name-container">
                        <input type="text" name='fname' id="fname" placeholder='First Name' required onChange={(e) => setFname(e.target.value)} />
                        <input type="text" name='lname' id="lname" placeholder='Last Name' required onChange={(e) => setLname(e.target.value)} />
                    </div>

                    <div className="inp-container">
                        <input type="email" name='email' id="email" placeholder='Email Address' required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inp-container">
                        <input type="text" name='username' id="username" placeholder='Username' required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="inp-container">
                        <input type="password" name='password' id="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="btn-container text-center">
                        <button type='submit' className='btn btn-warning text-white' onClick={(e) => handleSubmit(e)}> Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage