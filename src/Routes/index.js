import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Map from '../pages/map';
import Login from '../pages/login';
import Activities from '../pages/activities';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/404';
import ProviderRoute from './ProviderRoutes';

const Routes = (
  <Switch>
    <Route path={"/login"} component={Login}/>
    <Route path={"/volunteer"} render={() => <h1>Volunteer</h1>}/>
    <Route path={"/activities"} component={Activities}/>
    <ProviderRoute path={"/dashboard"} component={Dashboard}></ProviderRoute>
    <Route path={"/"} exact component={Map}/>
    <Route path={"/page3"} render={() => <h1>PAGE 3</h1>}/>
    <Route path="*" component={NotFound}></Route>
  </Switch>
)

export default Routes;