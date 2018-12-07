import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import Nav from './nav';
import '../assets/css/app.css';
import {Route, Switch} from 'react-router-dom';
import Chat from './chat';
import logo from '../assets/images/fish.png';
import Home from './home';
import NotFound from './404';
import SetName from './set_name';

const App = () => (
    <div>
        <Nav/>
        <div className="center">
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route path ="/chat" component={Chat}/>
                <Route path = "/set-name" component={SetName}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
        <div className="center">
            <img src={logo}/>
        </div>
    </div>
);

export default App;
