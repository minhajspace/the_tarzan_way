import React from 'react';
import Login from './component/login'
import Terroist from './component/Terrorist';
import Soldier from './component/Soldier'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/terrorist" component={Terroist} />
        <Route path="/soldier" component={Soldier} />

      </Switch>
    </BrowserRouter>

  );
}

export default App;
