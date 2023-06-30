import { useState } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import HomePage from './components/HomePage/HomePage';
import MainContent from './components/HOCs/MainContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <SideNavBar />

                <MainContent>
                    <Routes>
                        <Route path="/" element={<HomePage></HomePage>}></Route>
                        <Route
                            path="testPath"
                            element={<div>something</div>}
                        ></Route>
                    </Routes>
                </MainContent>
            </BrowserRouter>
        </>
    );
}

export default App;
