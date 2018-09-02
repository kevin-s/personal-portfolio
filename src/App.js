import React, { Component } from 'react';
import './App.css';
import withTracker from './withTracker';

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
                    <Route exact path="/" component={withTracker(Home)}/>
                    <Route path="/resume" component={withTracker(Resume)}/>
                    <Route path="/reviews" component={withTracker(Reviews)}/>
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>

    );
  }
}
