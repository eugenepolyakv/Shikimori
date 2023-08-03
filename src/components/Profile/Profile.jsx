import React, { useEffect, useState } from 'react';
// import { useLogoutMutation } from '../../redux/api/authApi';
// import { SkipToken } from '@reduxjs/toolkit/dist/query';
import { useSelector } from 'react-redux';
// import loadingCircle from '../../assets/loadingCircle.gif';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.scss';
import BIO from './ProfileElements/BIO';
import LinearProgress from '@mui/material/LinearProgress';

const Profile = () => {
    // const isAuthorized = useSelector((state) => state.authSlice.isAuthorized);
    const data = useSelector((state) => state.authSlice);
    console.log(data);
    // const [logout, { isLoading }] = useLogoutMutation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!data.isAuthorized) {
            navigate('/auth');
        }
    }, [data.isAuthorized]);
    // console.log('isAuthorized');
    // console.log(isAuthorized);
    // if (!isAuthorized) {
    //     navigate('/auth');
    // }
    return (
        <div className={styles.container}>
            {/* <div className={styles.mainTitle}>Profile</div> */}
            {/* <h1>Profile</h1> */}
            <div className={styles.pictureContainer}>
                <img
                    className={styles.profilePicture}
                    src="https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg"
                />
                {/* <div className={styles.username}>
                    {data.username} */}
                <BIO
                    username={data.username}
                    regDate={data.registrationDate[0]}
                />
                {/* </div> */}
                {/* <div className={styles.metaData}>no bio yet / </div> */}
            </div>
            <LinearProgress valueBuffer={100} />
            {/* 
            <button onClick={() => logout()}>
                {isLoading ? <img src={loadingCircle} /> : 'Logout'}
            </button> */}
        </div>
    );
};

export default Profile;
