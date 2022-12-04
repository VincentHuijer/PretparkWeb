import "./App.css";



const TicketSoort = (props) => { 
  return (  //Dit is onze Person component! (een stuk code dat "returned" of "rendert" een stukje JSX)
    <>
    <h1>Leeftijdsgroep: {props.name}</h1> 
    <h2>Prijs ticket: € {props.TicketPrijs}</h2>
    <h3>Age: {props.age}</h3></>
  )
}

const App = () => { //Als ik hier nu <Person /> toon krijg je alles van de persoon te zien.
  const name = "john";
  const isUserLoggedIn = true;
 const isNameShowing = true;
  return(
  <div className="App">
    <TicketSoort name={'baby'} TicketPrijs ={5} age ={"0-3"}/>
    <TicketSoort name={'Kind'} TicketPrijs ={30} age ={"4-17"}/>
    <TicketSoort name={'volwassen'} TicketPrijs ={40} age ={"18-64"}/>
    <TicketSoort name={'gepensioneerd'} TicketPrijs = {30} age ={"65+"}/>
    <h1>Hello, {2+2}!</h1>
    {name ? (
    <>  <h1> {name}</h1>
    </>
    ) : (
    <>
   <h1> test</h1>
    <h2> there is no name</h2>
    </>)}
    </div>);
};

export default App;