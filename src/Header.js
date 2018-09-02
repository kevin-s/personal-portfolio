import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="./index.html" className="name">Kevin J. Shannon</a>
                <div className="header-right">
                    <a className="active" href="./index.html">Home</a>
                    <a href="./resume.html">Resume</a>
                    <a href="https://github.com/kevin-s" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="./reviews.html">Reviews</a>
                    <a href="./contact.html">Contact</a>
                </div>
            </div>
        );
    }
}
