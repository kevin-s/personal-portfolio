import React, { Component } from 'react';
import './App.css';
import withTracker from './withTracker';

import {Home} from './Home';
import {Resume} from './Resume';
import {Header} from './Header';
import {Footer} from './Footer';
import {Reviews} from './Reviews';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={withTracker(Home)}/>
                        <Route path="/resume" component={withTracker(Resume)}/>
                        <Route path="/reviews" component={withTracker(Reviews)}/>
                        <Route path="/contact" component={withTracker(Contact)}/>
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </HashRouter>
            <Footer />
        </div>

    );
  }
}
