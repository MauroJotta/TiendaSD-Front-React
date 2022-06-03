import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const title = "3DArt";
document.title = title;

root.render(
    <React.StrictMode>
        <HashRouter hashType="hashbang">
            <App />
        </HashRouter>
  </React.StrictMode>
);
