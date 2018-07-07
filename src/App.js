import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const FancyButton = (props) => (
  <button
    className="my-fancy-classname"
    onClick={props.handleClick}
  >
    Click Me!
  </button>
)
// const LogWhenClicked=(props)=>(
//   <button
//   className="logWhenClicked"
//   onclik ={props.handleClick}
//   >
//    Click Me!
//   </button>

// )
class App extends Component {
  logWhenClicked = () => {
    console.log ('my live')
  }
  render() {
    
    const Logo =(props)=>(  
     <header className="App-header">
     <img src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"className="App-logo" onClick={this.logWhenClicked} alt = "logo" />
     <h1 className="App-title">Welcome to cyf hotel</h1>
   </header>
   );
   
    class BookingsMessage extends Component {
      render() {
      return(
  //  const BookingsMessage=()=>(
    <p className="App-intro">
    there are bookings available for the {new Date().toLocaleDateString()}
    </p>
  //  )
    )
  }
}
    const SpecialDeals=(props)=>{
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
        {/* <LogWhenClicked/> */}
        <BookingsMessage/>
        <SpecialDeals/>
        <FancyButton handleClick={this.logWhenClicked} />
      </div>
    );
  }
}

export default App;

