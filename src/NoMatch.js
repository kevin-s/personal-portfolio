import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Header} from './Header';


export class NoMatch extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div>
                    <h2>HTTP 404: Page not found</h2>
                    <h3>
                        No match for <code>{window.location.pathname}</code>
                    </h3>
                </div>
            </div>
        );
    }
}
