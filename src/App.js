import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Welcome from "./components/welcome/Welcome"
import Error from "./components/error/Error"
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from './components/jeopardy/Jeopardy';


function App() {
  return (
    <div className="App">

      <Navigation />

      <Switch>

        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Orpa" />}
        />

        <Route
          path="/Welcome/:orpadata"
          render={(props) => <Welcome {...props} name="Orpa" />}
        />

        <Route
          path="/clock"
          component={Clock}
        />

        <Route
          path="/contact"
          component={Contact}
        />

<<<<<<< HEAD
      <Route
          path="/jeopardy"
          component={Jeopardy}
        />

=======
>>>>>>> 991ef9c3728202c75723b88fbffaa2ff2dd7357e
        <Route component={Error} />

      </Switch>


    </div>
  );
}

export default App;
