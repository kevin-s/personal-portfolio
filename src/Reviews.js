import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Header} from './Header';
import {Review} from './Review';

//const API = 'https://hn.algolia.com/api/v1/search?query=';
//const DEFAULT_QUERY = 'redux';

const API = 'http://www.kevinjshannon.com.s3-website-us-east-1.amazonaws.com/data/reviews.json';

export class Reviews extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        //fetch(API + DEFAULT_QUERY)
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ reviews: data.reviews, isLoading: false }));
    }

    render() {

        const { reviews, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                <h2>Reviews</h2>

                <ul>
                    {reviews.map(review =>
                        <li key={review.id}>
                            <Review review={review}/>
                        </li>
                    )}
                </ul>
            </div>
        );

    }
}
