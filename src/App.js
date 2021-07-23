import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";


class App extends Component {
  constructor() {
    super();
  }

  render() {
    
    return (
      
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/Shop" component={ShopPage}/>

        </Switch>
       
        
      </div>
    );
  }
}

// function App(){
//   return(
//     <div>
//       <Switch>
//         <Route exact path="/" component={Homepage}/>
//         <Route exact path="/hats" component={HatsPage}/>
//       </Switch>
      
      
//     </div>
//   );
// }

export default App;
