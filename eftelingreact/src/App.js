import { useEffect, useState } from "react";
import "./App.css"; 


const App = () => { //Als ik hier nu <Person /> toon krijg je alles van de persoon te zien.
 const[counter, setCounter] = useState(0); //wanneer je iets aanroept als een functie en het start met 'use' in React noemen we dat een 'hook'
 //de eerste parameter in [] zal de naam zijn van de 'state'



// useEffect = deze code word uitgevoerd wanneer de pagina laad

//voorbeeld1.
/////////////////useEffect(() => {setCounter(100);},[]); 
 //zonder tweede parameter [] (dependency array) word het constant uitgevoerd (op 100 gezet). 
 //als er een tweede parameter [] is (de dependency array is leeg) gebeurt de uitvoer van de eerste parameter maar 1x.


//voorbeeld 2.
//////////////useEffect(() => {alert("You've changed the counter to "+ counter)}); 


  return(
  <div className="App">
    <button onClick={() => setCounter((prevCount)=> prevCount -1)}>-</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter((prevCount)=> prevCount +1)}>+</button>
    </div>
    );
};

export default App;
