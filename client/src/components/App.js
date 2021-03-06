import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import About from './about'
import {Login} from './RegisterLogin'


function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
