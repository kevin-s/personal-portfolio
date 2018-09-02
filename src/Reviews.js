import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Header} from './Header';
import {Review} from './Review';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export class Reviews extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => this.setState({ hits: data.hits, isLoading: false }));
    }

    render() {

        const { hits, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                <Header />
                <h2>Reviews</h2>

                <ul>
                    {hits.map(hit =>
                        <li key={hit.objectID}>
                            <a href={hit.url}>{hit.title}</a>
                        </li>
                    )}
                </ul>
            </div>
        );


        return (
            <div>
                <Header />
                <h2>Reviews</h2>



                <Route path='{this.path}/:topicId' component={Review}/>
                <Route exact path={this.path} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        );
    }
}
