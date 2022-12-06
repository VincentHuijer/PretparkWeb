import React from 'react';
import ReactDOM from 'react-dom/client';
import './PretparkWebsite.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FrontPage from './FrontPage';
import BodyFP from './BodyFP';
import HeaderFP from './HeaderFP';
import OverOns from './OverOns';
import TicketVerkoop from './TicketVerkoop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
