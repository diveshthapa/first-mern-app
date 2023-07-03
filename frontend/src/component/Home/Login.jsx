
import { useEffect, useState } from "react";
import "./reg.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Action/userAction";
import { useNavigate } from "react-router-dom";




const LoginPage = () => {

    const { isAuthenticated } = useSelector((state) => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
    }, [isAuthenticated])



    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username == "") {
            return toast.warn("Username Can not be Empty")
        }
        if (password == "") {
            return toast.warn("Password Can not be Empty")
        }
        dispatch(login(username, password))
    }

    return (
        <div className="registerPageContainer">
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
                        <button type='submit' className='btn btn-warning text-white' onClick={(e) => handleLogin(e)}> Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage