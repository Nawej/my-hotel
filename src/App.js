import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
     const Logo=()=>(
     <header className="App-header">
     <img src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to cyf hotel</h1>
   </header>
    );

   const BookingsMessage=()=>(
    <p className="App-intro">
    there are bookings available for the {new Date().toLocaleDateString()}
    </p>
   )
    const SpecialDeals=()=>{
     const specialDealstrings=['fruit','mango', 'orange','bananas']
     return(
     <div>
    {specialDealstrings.map((name) => (
      <p>{name}</p>
    ))} 
    </div>)  
  };
    return (
      <div className="App">
        <Logo/>
        <BookingsMessage/>
        <SpecialDeals/>
      </div>
    );
  }
}

export default App;
