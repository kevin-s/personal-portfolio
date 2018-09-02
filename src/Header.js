import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="/" className="name">Kevin J. Shannon</a>
                <div className="header-right">
                    <a href="/">Home</a>
                    <a href="/resume">Resume</a>
                    <a href="https://github.com/kevin-s" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="/reviews">Reviews</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        );
    }
}
