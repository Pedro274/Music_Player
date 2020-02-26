import React from 'react';
import './App.scss';
import Web from '../Web/Web'
import {BrowserRouter} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Web/>
            </BrowserRouter>
        </div>
    );
}
export default App;
