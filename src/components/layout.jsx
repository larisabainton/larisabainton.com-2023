import React from 'react';
import { Link } from 'gatsby';

const header = (
    <header>
        <div className="header_title">Larisa Bainton</div>
        <div className="header_links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/media">Media</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </header>
)

const Layout = ({ children }) => {
    return (
        <div className="global-wrapper">
            {header}
            {children}
            <footer>© {new Date().getFullYear()} Larisa Bainton</footer>
        </div>
    )
};

export default Layout;