import React from 'react';
import './App.css';
import LoginApp from "./components/login/LoginApp"
import { Switch } from 'react-router-dom';
import Home from "./components/home"
import{Route} from "react-router-dom"
import Button from "./components/login/logout"

class App extends React.Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={LoginApp}/>
      <Route path="/home" component={Home}/>
      <Route path="/logout" component={Button}/>
      <div className="App">
       <LoginApp/>
      </div>
      </Switch>
);
  }
}
export default App;