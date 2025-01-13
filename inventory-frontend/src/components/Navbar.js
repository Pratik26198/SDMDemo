import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">Inventory App</Link>
            <div>
                <Link className="btn btn-primary me-2" to="/">Home</Link>
                <Link className="btn btn-secondary" to="/add">Add Item</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;
