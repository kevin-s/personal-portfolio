import React, { Component } from 'react';
import {Header} from './Header';
import {ContactForm} from './ContactForm';
import './Contact.css';


/*  <ContactForm />  re-add when ready  */

export class Contact extends Component {
    render() {
        return (
            <div className="App">
                <p className="contactTable">
                    <b>Kevin Shannon</b><br />
                    Des Moines, IA  50309 <br />
                    <a href="tel:+15159840004">+1 (515) 984-0004</a><br />
                    <a href="mailto:kevinshannon0@gmail.com">Send me an e-mail!</a>
                </p>

            </div>
        );
    }
}
