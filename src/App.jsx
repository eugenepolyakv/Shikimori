import { useState } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import HomePage from './components/HomePage/HomePage';
import MainContent from './components/HOCs/MainContent';
import { Routes, Route, Navigate } from 'react-router-dom';
// import TestCard from './components/testCard';
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <MainContent>
                {/* <TestCard /> */}
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                </Routes>
            </MainContent>
            <SideNavBar />
        </>
    );
}

export default App;
