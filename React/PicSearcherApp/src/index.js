import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/imagesCtx';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <AppProvider>
        <App />
    </AppProvider>
);
