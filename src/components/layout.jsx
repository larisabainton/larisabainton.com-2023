import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const pageLinks = (className) => {
    return (
        <ul className={`${className} header_links`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    )
}

const header = (
    <header>
        <div className="header_title">
            <Link to ="/">Larisa Bainton</Link>
        </div>

        {/* mobile */}
        <div className="header_menu">
            <StaticImage alt="" placeholder="none" className="menu_image" src="../images/menu.svg" />
            {pageLinks("header_menu-links")}
        </div>

        {/* desktop */}
        {pageLinks("header_desktop-links")}
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