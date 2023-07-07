import { useState } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import HomePage from './components/HomePage/HomePage';
import MainContent from './components/HOCs/MainContent';
import { Routes, Route, Navigate } from 'react-router-dom';
import AnimePage from './components/AnimeItems/AnimePage/AnimePage';

function App() {
    return (
        <>
            <MainContent>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/anime/:animeID" element={<AnimePage />} />
                </Routes>
            </MainContent>
            <SideNavBar />
        </>
    );
}

export default App;
