import { useState } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import HomePage from './components/HomePage/HomePage';
import MainContent from './components/HOCs/MainContent';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <MainContent>
                <HomePage></HomePage>
            </MainContent>
            <SideNavBar />
        </>
    );
}

export default App;
