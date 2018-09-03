import React, { Component } from 'react';
import './Review.css';
import StarRatingComponent from 'react-star-rating-component';



export class Review extends Component {
    //constructor(props) {
    //    super(props);
    //}

    render() {
        if (typeof this.props.review === 'undefined') {
            return <div/>;
        } else {
            return <div className="aReview">
                <div className="reviewRating"><StarRatingComponent
                    name="rate"
                    editing={false}
                    starCount={5}
                    value={this.props.review.rating}
                /></div>

                <div className="reviewComment">"{this.props.review.comment}"</div>
                <div className="reviewReviewer">Reviewer: {this.props.review.reviewer}</div>

                <div className="reviewDate">Date: {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(this.props.review.date))}</div>
            </div>;
        }
    }
}

