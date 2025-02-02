import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">© 2025 Naresh Tiwari. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="https://www.linkedin.com/in/naresh-tiwari/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/Nareshtiwari74" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;