import React, { Component } from 'react';
import './App.css';
import withTracker from './withTracker';

import {Home} from './Home';
import {Resume} from './Resume';
import {Reviews} from './Reviews';
import {NoMatch} from './NoMatch';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={withTracker(Home)}/>
                    <Route path="/resume" component={withTracker(Resume)}/>
                    <Route path="/reviews" component={withTracker(Reviews)}/>
                    /*<Route path='/data/reviews.json' component={() => window.location = 's3bucket/data/reviews.json'}/>  */
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </HashRouter>

    );
  }
}
