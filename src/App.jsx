import { useState } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <SideNavBar />
        </>
    );
}

export default App;
