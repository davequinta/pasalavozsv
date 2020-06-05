import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeScreen from "./screens/Home";
import OrganizationsScreen from "./screens/Organizations/organizations";
import OrganitacionProfileScreen from "./screens/OrganizationProfile/organizationProfile"
import './App.css'
const App = () => {
  return (
    <div  >
      <Switch >

        <Route exact path="/" >
          <Route path="/" component={HomeScreen} />
        </Route>

        <Route exact path="/organizations">
          <Route path="/organizations" component={OrganizationsScreen} />
        </Route>

        <Route exact path="/organizationProfile">
          <Route path="/organizationProfile" component={OrganitacionProfileScreen} />
        </Route>

      </Switch>
    </div >
  );
}

export default App;
