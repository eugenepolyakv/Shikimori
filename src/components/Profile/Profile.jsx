import React, { useEffect, useState } from 'react';
import { useLogoutMutation } from '../../redux/api/authApi';
// import { SkipToken } from '@reduxjs/toolkit/dist/query';
import { useSelector } from 'react-redux';
import loadingCircle from '../../assets/loadingCircle.gif';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    // const [sendRequest, setPermission] = useState(false);
    const isAuthorized = useSelector((state) => state.authSlice.isAuthorized);
    const [logout, { isLoading }] = useLogoutMutation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthorized) {
            navigate('/auth');
        }
    }, [isAuthorized]);
    console.log('isAuthorized');
    console.log(isAuthorized);
    // if (!isAuthorized) {
    //     navigate('/auth');
    // }
    return (
        <div>
            Profile
            <button onClick={() => logout()}>
                {isLoading ? <img src={loadingCircle} /> : 'Logout'}
            </button>
        </div>
    );
};

export default Profile;
