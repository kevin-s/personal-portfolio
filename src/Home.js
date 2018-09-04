import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

export class Home extends Component {
    render() {
        return (
                    <div className="container">

                        <article className="col">
                            <div className="circle"><h1><a href="#">Problem-solver and big picture thinker.</a></h1></div>
                        </article>
                        <article className="col">
                            <div className="circle"><h1><a href="#">Technical communicator and mentor.</a></h1></div>
                        </article>
                        <article className="col">
                            <div className="circle"><h1><a href="#">Fast learner and faster at recovering from roadblocks.</a></h1></div>
                        </article>

                </div>
        );
    }
}
