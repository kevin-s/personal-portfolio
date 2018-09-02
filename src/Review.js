import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Header} from './Header';


export class Review extends Component {
    render(match) {
        return (
            <div className="App">
                <Header />
                <div>
                    <h3>{match.params.topicId}</h3>
                </div>
            </div>
        );
    }
}
