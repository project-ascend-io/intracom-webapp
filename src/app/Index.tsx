import React from 'react';
import ReactDom from 'React-Dom/client';
import App from './App';


const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
         </React.StrictMode>
);