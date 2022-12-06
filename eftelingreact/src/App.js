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


// function App(){ //hier doe ik dus echt helemaal niks mee.
//   return(
//     <div className="App">
// <routes><route path ="/frontpage" Component = {FrontPage}/></routes>
// <routes><route path ="/overons" Component = {OverOns}/></routes>
// <routes><route path= "/tickets" Component = {TicketVerkoop}/></routes>

//       {/* <header className="App-header">
//         <img src={logo} className = "App-logo" alt="logo"></img>
//       </header> */}
//     </div>
//   );
// }

// const App = () => { //Als ik hier nu <Person /> toon krijg je alles van de persoon te zien.
//  const[counter, setCounter] = useState(0); //wanneer je iets aanroept als een functie en het start met 'use' in React noemen we dat een 'hook'
//  //de eerste parameter in [] zal de naam zijn van de 'state'



// // useEffect = deze code word uitgevoerd wanneer de pagina laad

// //voorbeeld1.
// /////////////////useEffect(() => {setCounter(100);},[]); 
//  //zonder tweede parameter [] (dependency array) word het constant uitgevoerd (op 100 gezet). 
//  //als er een tweede parameter [] is (de dependency array is leeg) gebeurt de uitvoer van de eerste parameter maar 1x.


// //voorbeeld 2.
// //////////////useEffect(() => {alert("You've changed the counter to "+ counter)}); 


//   return(
//   <div className="App">
//     <button onClick={() => setCounter((prevCount)=> prevCount -1)}>-</button>
//     <h1>{counter}</h1>
//     <button onClick={() => setCounter((prevCount)=> prevCount +1)}>+</button>
//     </div>
//     );
// };
// export default App;



// function Navigatiebalk(){
//   return
//   <nav>
//         <a href="PretparkOverOns.html" class="nav">Over Ons</a>
//         <a href="PretparkTickets.html" class="nav">Bestel nu tickets!</a>
//   </nav>
 
// }

// function EftelingLogo(){
// return
//   <div class="nav">
//     <a href="PretparkFrontPage.html"><img src="Afbeeldingen\EftelingLogo.png" alt=Terug naar het hoofdmenu />
//       <div>
//       </nav>
// }

// function videoFrontpage(){
//   return
// <div id="EngeVideo">
//   <video width="2480" controls autoplay>
//     <source src="Afbeeldingen\EftelingHalloweenVideo.mp4" type="video/mp4"> 
//    </video>
//   </div>
// }


//   <div id="Pompoenplaatje">
//     <a href="PretparkOverOns.html"><img src="Afbeeldingen\FrontpagePompoenen.png" alt="Pompoenen voor de frontpagel"
//         height="700px;" title="Happy Halloween!" />
//       <!-- <img src="Afbeeldingen\FrontpagePompoenen.png" height="700" alt="Pompoenen voor de frontpage" -->
//     </a>
//   </div>
//   <main>

//     <article>
//       <h1 style="color: red"> BESTEL NU TICKETS VOOR HET HALLOWEEN EVENEMENT!)</h1>

//       <h2>Beleef enge avonturen in het spookhuis!</h2>
//       <img src="\Afbeeldingen\FrontPageSpookhuis.png" />
//       <h3>Speciaal Halloween snoep voor kinderen!</h3>
//       <img src="Afbeeldingen\FrontPageSnoep.png" />
//     </article>
//   </main>
// </body>

// </html>