import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div >
                <div className="ribbon">
                    <NavLink exact to="/"  activeClassName="active"><span className="title">Startup</span></NavLink>
                    <NavLink to="/Medium" activeClassName="active"><span className="title">Medium</span></NavLink>
                    <NavLink to="/Large"  activeClassName="active"><span className="title">Large</span></NavLink>
                </div>
            </div>
        );
    }
}

export default Header;