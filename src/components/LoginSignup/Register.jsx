// import React from 'react';
// import { Link } from 'react-router-dom';
// import './stylee.css';

// const Register = () => {
//     return (
//         <div className="register-container">
//             <form className="register-form">
//                 <h2 className="form-title">ĐĂNG KÝ</h2>
//                 <div className="form-group">
//                     <label htmlFor="name">Họ và tên</label>
//                     <input
//                         type="text"
//                         id="name"
//                         className="form-control"
//                         placeholder="Nhập họ và tên của bạn"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email của bạn</label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="form-control"
//                         placeholder="Nhập địa chỉ email"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Mật khẩu</label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="form-control"
//                         placeholder="Nhập mật khẩu"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="profileImage">Ảnh Profile</label>
//                     <input
//                         type="file"
//                         id="profileImage"
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <button type="submit" className="btn btn-primary">
//                         Đăng ký
//                     </button>
//                 </div>
//                 <p>
//                     Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Register;





import React, { useEffect, useState } from 'react'
//import { loginApi } from '../services/UserService';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import "./loginsignup.css"
import { Link } from 'react-router-dom';
//import { UserContext } from '../context/UserContext';
const Register = () => {
    //const { loginContext } = useContext(UserContext);
    const [email, setemail] = useState("");
    const [name, setname] = useState("");

    const [password, setpassword] = useState("");

    const [repassword, setrepassword] = useState("");

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

            <div className='title'>ĐĂNG KÝ</div>
            <div className='text'>Nhập họ và tên </div>
            <input className='input' type='text' placeholder='Nhập họ và tên...'
                value={name} onChange={(event) => setname(event.target.value)} />
            <div className='text'>Email or Username  </div>
            <input className='input' type='text' placeholder='Email or username...'
                value={email} onChange={(event) => setemail(event.target.value)} />
            <div className='input-2'>
                <div className='text'>Mật khẩu </div>
                <input className='input' type={isShowPassword === true ? "text" : 'password'} placeholder='Password...'
                    value={password} onChange={(event) => setpassword(event.target.value)} />
                <div className='text'>Nhập lại Mật khẩu </div>
                <input className='input' type={isShowPassword === true ? "text" : 'password'} placeholder='Password...'
                    value={repassword} onChange={(event) => setrepassword(event.target.value)} />
                <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                    onClick={() => setIsShowPassword(!isShowPassword)}>
                </i>
                <div className='text'>Ảnh của bạn </div>

                <input className="input" type="file" id="profileImage" />
            </div>
            <p className='p'>forgot password?</p>
            <button className={email && password ? "button-1" : ""}
                disabled={email && password && name && repassword  ? false : true}
                onClick={() => handleLogin()}
            >
                {loadingApi && <i class="fas fa-sync fa-spin"></i>}

                &nbsp;Đăng ký</button>

            <div className='back'>
                <i className="fa-solid fa-angles-left"></i>
                <span><Link to="/">Trang chủ</Link></span>

                <span><Link to="/login"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Đăng nhập ngay </Link></span>

            </div>
        </div>
    )
}

export default Register