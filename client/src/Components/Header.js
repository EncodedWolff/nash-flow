import React from "react";
import Navbar from './Navbar';


class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        userName: this.props.name,
        company: this.props.company
    };

    render() {
        return (
            <div>
                <h5>{this.userName} Username here</h5>
                <h6>{this.company} Company here</h6>
                <Navbar />
            </div>
        );
    }
}

export default Header;