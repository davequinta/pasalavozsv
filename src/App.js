import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeScreen from "./screens/Home";
import './App'
function App() {
  return (
    <div className='App'>
      <Switch >
        <Route exact path="/" >
          <Route path="/" component={HomeScreen} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
