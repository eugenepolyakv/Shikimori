import { useState } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import HomePage from './components/HomePage/HomePage';
import MainContent from './components/HOCs/MainContent';
import { Routes, Route, Navigate } from 'react-router-dom';
import AnimePage from './components/AnimeItems/AnimePage/AnimePage';
import Auth from './components/Auth/Auth';

function App() {
    return (
        <>
            <SideNavBar />
            <MainContent>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/anime/:animeID" element={<AnimePage />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </MainContent>
        </>
    );
}

export default App;
