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

import { useGetUserInfoQuery } from './redux/api/authApi';
function App() {
    const { isLoading } = useGetUserInfoQuery();
    // const token = localStorage.getItem('token');
    // useGetUserInfoQuery(isThereAToken ? skipToken : null);
    // useEffect(() => {
    //     if (token) {
    //         setToken(true);
    //     }
    // }, []);
    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <SideNavBar />
            <MainContent>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/anime/:animeID" element={<AnimePage />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/clubs" element={<Clubs />} />
                </Routes>
            </MainContent>
            {/* <ErrorPopUp errorMessage={'dwadsssssssssssssssssss'} /> */}
        </div>
    );
}

export default App;
