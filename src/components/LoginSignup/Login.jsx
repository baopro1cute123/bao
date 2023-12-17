import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import { loginApi } from '../services/UserService';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import "./loginsignup.css"
import { Link } from 'react-router-dom';
//import { UserContext } from '../context/UserContext';
const Login = (onLoginSuccess) => {
    //const { loginContext } = useContext(UserContext);
    const [username, setUsername] = useState('');
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
        try {
            const response = await axios.post('/api/v1/auth/signin', {
                username,
                password,
            });

            // Xử lý phản hồi từ server ở đây
            onLoginSuccess("ádsd", response.data);

            // Lưu trạng thái đăng nhập, thông tin người dùng, vv. nếu cần
        } catch (error) {
            // Xử lý lỗi ở đây
            console.error('Lỗi khi đăng nhập:', error.message);
        }

    }

    return (
        <div className='loginn'>
        <div className='login-container '>
            <div className='title'>ĐĂNG NHẬP</div>
            <div className='text'>Email hoặc Tên đăng nhập </div>
            <input className='input' type='text' placeholder='Email/Tên đăng nhập...'
                value={username} onChange={(event) => setUsername(event.target.value)} />
            <div className='input-2'>
                <div className='text'>Mật khẩu </div>

                <input className='input' type={isShowPassword === true ? "text" : 'password'} placeholder='Mật khẩu...'
                    value={password} onChange={(event) => setpassword(event.target.value)} />
                <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={() => setIsShowPassword(!isShowPassword)}>

                </i>
            </div>
            <p className='p'>Quên mật khẩu ?</p>
            <button className={username && password ? "button-1" : ""}
                disabled={username && password ? false : true}
                onClick={() => handleLogin()}
            >
                {loadingApi && <i class="fas fa-sync fa-spin"></i>}

                &nbsp;Đăng nhập</button>

            <div className='back'>
                <i className="fa-solid fa-angles-left"></i>
                <span><Link to="/">Trang chủ</Link></span>

                <span><Link to="/register"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Đăng ký ngay </Link></span>

            </div>
        </div>
        </div>
    )
}

export default Login