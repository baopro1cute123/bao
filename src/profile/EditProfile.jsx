import React, { useState } from 'react';
import imgProfile from "./shop1.png";

const EditProfile = () => {
    const [formData, setFormData] = useState({
        email: 'nguyenbao@example.com',
        username: 'nguyenbao123',
        fullName: 'Nguyễn Bảo',
        phoneNumber: '0123456789',
        gender: 'male',
        birthDate: '1990-01-01',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='edit-profile'>
            <div className='text-edit'>
                <div className='label-input-container'>
                    <label className='lable-edit'>
                        <p>Email:</p>
                    </label>
                    <input className='input-edit'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='label-input-container'>
                    <label className='lable-edit'>
                        <p>Username:</p>
                    </label>
                    <input className='input-edit'
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className='label-input-container'>
                    <label className='lable-edit'>
                        <p>Họ và tên:</p>
                    </label>
                    <input className='input-edit'
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className='label-input-container'>
                    <label className='lable-edit'>
                        <p>Số điện thoại:</p>
                    </label>
                    <input className='input-edit'
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className='label-input-container'>
                    <label className='lable-edit'>
                        <p>Giới tính:</p>
                    </label>
                    <select className="gender" value={formData.gender} onChange={handleChange}>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                </div>
                <div className='label-input-container'>
                    <label className='lable-edit'>
                        <p>Ngày sinh:</p>
                    </label>
                    <input className='input-edit'
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                </div>
                <button className="edit-button" type="submit">Lưu</button>
            </div>
            <div className='img-edit'>
                <img src={imgProfile} alt="" />
                <div className='text'>Ảnh của bạn </div>
                <input className='input-img' type="file" id="profileImage" />
            </div>
        </div >
    );
};

export default EditProfile;
