import './App.css';
import React, {Component} from 'react';
import Homepage from './pages/homepage/homepage.component';
class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
    <div>
      <Homepage/>    
  </div>);
  };
} 

export default App;
