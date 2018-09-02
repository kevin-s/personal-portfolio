import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Header} from './Header';
import {Review} from './Review';


export class Reviews extends Component {
    render(match) {
        return (
            <div>
                <Header />
                <h2>Reviews</h2>
                <ul>
                    <li>
                        <Link to={'${match.url}/rendering'}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={'${match.url}/components'}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={'${match.url}/props-v-state'}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Route path={'${match.path}/:topicId'} component={Review}/>
                <Route exact path='{match.path}' render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        );
    }
}
