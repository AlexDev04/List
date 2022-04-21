import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/normalize.css';
import { App } from './App';
import { events } from './mocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App events={events} />
);

