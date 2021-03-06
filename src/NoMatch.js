import React, { Component } from 'react';


export class NoMatch extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <h2>HTTP 404: Page not found</h2>
                    <h3>
                        No match for <code>{window.location.pathname}</code>
                    </h3>
                    <p>Try going back to <a href="/">the home page.</a></p>
                </div>
            </div>
        );
    }
}
