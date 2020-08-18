import React from 'react';
import {  Route, Switch } from 'react-router-dom'
import './App.css';
import Welcome from"./components/welcome/Welcome"
import Error from "./components/error/Error"
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";



function App() {
  return (
    <div className="App">
       
        <Switch>
            <Route  
            path="/welcome/:name"
            render={(props)=> <Welcome {...props} name=""/>}
           
             />
        
            <Route component={Error} />

        </Switch>

       
    </div>
  );
}

export default App;
