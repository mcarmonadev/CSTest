import React, { Component } from "react";
import SideBar   from './SideBar/SideBar.js';
import CentralPanel   from './CentralPanel/CentralPanel.js';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MainContainer">     
        <SideBar/>    
        <CentralPanel/> 
      </div>
    );
  }

}
  
export default CounterApp;