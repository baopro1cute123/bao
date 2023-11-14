import React, { useEffect, useState } from 'react'
//import { loginApi } from '../services/UserService';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
//import { UserContext } from '../context/UserContext';
const Login = () => {
    //const { loginContext } = useContext(UserContext);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    const [loadingApi, setloadingApi] = useState(false)

    // useEffect(() => {
    //     let token = localStorage.getItem("token");
    //     if (token) {
    //         navigate("/")
    //     }
    // })

    const handleLogin = async () => {
        // if (!email || !password) {
        //     toast.error("Email/Password is requied");
        //     return;
        // }
        // setloadingApi(true);

        // let res = await loginApi(email, password);

        // if (res && res.token) {
        //     loginContext(email, res.token);
        //     navigate("/");

        // }
        // else {
        //     //error
        //     if (res && res.status === undefined) {
        //         toast.error(res.data.error);
        //     }
        // }
        // setloadingApi(false);

    }

    return (
        <div className='login-container col-12 col-sm-4'>

            <div className='title'>Log in</div>
            <div className='text'>Email or Username  </div>
            <input className='input' type='text' placeholder='Email or username...'
                value={email} onChange={(event) => setemail(event.target.value)} />
            <div className='input-2'>
                <div className='text'>Mật khẩu </div>

                <input className='input' type={isShowPassword === true ? "text" : 'password'} placeholder='Password...'
                    value={password} onChange={(event) => setpassword(event.target.value)} />
                <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={() => setIsShowPassword(!isShowPassword)}>

                </i>
            </div>
            <p className='p'>forgot password?</p>
            <button className={email && password ? "button-1" : ""}
                disabled={email && password ? false : true}
                onClick={() => handleLogin()}
            >
                {loadingApi && <i class="fas fa-sync fa-spin"></i>}

                &nbsp;Login</button>

            <div className='back'>
                <i className="fa-solid fa-angles-left"></i>
                <span><Link to="/">Trang chủ</Link></span>

                <span><Link to="/register"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Đăng ký ngay </Link></span>

            </div>
        </div>
    )
}

export default Login