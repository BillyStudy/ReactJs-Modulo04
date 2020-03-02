import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import TechList from './components/TechList';

function App(){

    return (
        <>
            <div className="logoDiv">
                <img src={logo} className="logo" />
                <h1>RocketSeat</h1>
            </div>
            <TechList/>
        </>
    )
}

export default App;