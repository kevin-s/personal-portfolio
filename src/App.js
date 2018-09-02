import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {Home} from './Home';
import {Resume} from './Resume';
import {Reviews} from './Reviews';
import {NoMatch} from './NoMatch';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/reviews" component={Reviews}/>
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>

    );
  }
}
