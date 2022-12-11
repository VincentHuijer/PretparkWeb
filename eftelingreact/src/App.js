import { useEffect, useState } from "react";
import "./App.css"; 
import FrontPage from "./FrontPage";
import logo from './logo.svg';
import OverOns from "./OverOns";
import TicketVerkoop from "./TicketVerkoop";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from "react";
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';


export default function Routing() {
  return (
    <Router>
      <Routes>
        
          <Route exact path="/" index element={<FrontPage />} />
          <Route path="/OverOns" element={<OverOns/>} />
          <Route path="/Tickets" element={<TicketVerkoop />} />
        
      </Routes>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing/>, document.getElementById('root'));