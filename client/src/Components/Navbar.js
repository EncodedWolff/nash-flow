import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            companyName: '',
            username: '',
            permissions: ''
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Route />
                </Router>
            </div>
        );
    }
}