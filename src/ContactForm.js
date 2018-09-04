import React, { Component } from 'react';
import './ContactForm.css';


export class ContactForm extends Component {
    render() {
        return (
            <div className="contactForm">
                <form>
                    <table>
                        <tbody>
                            <tr id="divName">
                                <td>
                                    <label htmlFor="name">Name:</label>
                                </td>
                                <td>
                                    <input type="text" name="name" />
                                </td>
                            </tr>
                            <tr id="divTelephone">
                                <td>
                                    <label htmlFor="telephone">Number:</label>
                                </td>
                                <td>
                                    <input type="tel" name="telephone" />
                                </td>
                            </tr>
                            <tr id="divEmail">
                                <td>
                                    <label htmlFor="email">Email:</label>
                                </td>
                                <td>
                                    <input type="email" name="email" />
                                </td>
                            </tr>
                            <tr id="divMessage">
                                <td>
                                    <label htmlFor="message">Message:</label>
                                </td>
                                <td>
                                    <textarea name="message" rows="4" cols="35" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}
