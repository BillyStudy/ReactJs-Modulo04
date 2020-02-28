import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import TechList from './components/TechList';

function App(){

    return (
        <>
            <img src={logo} className="logo" />
            <TechList/>
        </>
    )
}

export default App;