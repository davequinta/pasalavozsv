import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeScreen from "./screens/Home";
import './App.css'
const App = () => {
  return (
    <div  >
      <Switch >
        <Route exact path="/" >
          <Route path="/" component={HomeScreen} />
        </Route>

      </Switch>
    </div >
  );
}

export default App;
