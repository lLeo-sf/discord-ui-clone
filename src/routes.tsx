import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Screens/Home';
import Teste from './components/Screens/Teste';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Teste" exact component={Teste} />
            </Switch>
        </Router>
    );
}

export default Routes;