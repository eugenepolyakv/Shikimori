import { useEffect, useState } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import HomePage from './components/HomePage/HomePage';
import MainContent from './components/HOCs/MainContent';
import { Routes, Route, Navigate } from 'react-router-dom';
import AnimePage from './components/AnimeItems/AnimePage/AnimePage';
import Auth from './components/Auth/Auth';
import ErrorPopUp from './components/Other/ErrorPopUp/ErrorPopUp';
import Clubs from './components/Clubs/Clubs';

import { useGetUserInfoMutation } from './redux/api/authApi';
import { useSelector } from 'react-redux';
import Profile from './components/Profile/Profile';
function App() {
    // const [isInitialReqSent, setInitialReqTrue] = useState(false);
    const [getUserInfo, { isLoading }] = useGetUserInfoMutation();
    const isAuthorized = useSelector((state) => state.authSlice.isAuthorized);
    useEffect(() => {
        getUserInfo();
    }, []);
    // const token = localStorage.getItem('token');
    // useGetUserInfoQuery(isThereAToken ? skipToken : null);
    // useEffect(() => {
    //     if (token) {
    //         setToken(true);
    //     }
    // }, []);
    // console.log(isInitialReqSent);
    // console.log(isLoading);
    return isAuthorized !== null ? (
        <div>
            <SideNavBar />
            <MainContent>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/anime/:animeID" element={<AnimePage />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/clubs" element={<Clubs />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </MainContent>
            {/* <ErrorPopUp errorMessage={'dwadsssssssssssssssssss'} /> */}
        </div>
    ) : (
        <div>Loading...</div>
    );
}

export default App;
