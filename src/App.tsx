import React from 'react';
import './App.css';
import Accordion from './components/Acordion';
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}





export default App;

