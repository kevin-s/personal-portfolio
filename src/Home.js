import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Header} from './Header';


export class Home extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>Link to Resume <Link to="/resume">Resume</Link></p>
            </div>
        );
    }
}
