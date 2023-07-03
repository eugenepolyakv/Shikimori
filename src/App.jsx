import { useState } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import HomePage from './components/HomePage/HomePage';
import MainContent from './components/HOCs/MainContent';
// import TestCard from './components/testCard';
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <MainContent>
                {/* <TestCard /> */}
                <HomePage></HomePage>
            </MainContent>
            <SideNavBar />
        </>
    );
}

export default App;
