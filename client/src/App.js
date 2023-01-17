import React, { Fragment } from "react";
import './App.css';


import InputClub from "./compenents/InputClub";
import ListClubs from "./compenents/ListClubs";
import InputEvent from "./compenents/InputEvent";
import ListEvents from "./compenents/ListEvents";
function App() {
  return <Fragment>
          <div className="container-fluid">
            <InputClub/>
            <br></br>
            <ListClubs />
            
            <InputEvent/> 
            <br></br>
            <ListEvents />
            <br></br>

          </div>
          
        </Fragment>; 
 
}

export default App;
