import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../header/logo.png";
import './headerlogin.css';

const HeaderRes = () => {
    return (
        <>
            <section className='headlogin'>
                <div className='container d_flex'>
                    <div className='left row'>
                        <label >
                            <Link to="/">
                                {/* Thay thế thẻ h1 bằng thẻ img */}
                                <img className="logologin" src={logoImage} alt="DT5 SPORT" />
                            </Link>
                        </label>
                        <label className="dn">
                            ĐĂNG KÝ
                        </label>


                    </div>
                    <div className='right row RText'>
                        <label><Link to='/contact'>📧 Bạn cần giúp đỡ gì?</Link></label>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeaderRes;
