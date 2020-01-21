import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Websites
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/add" className="nav-link">
                Add Website
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/edit:id" className="nav-link">
                Edit Website
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
