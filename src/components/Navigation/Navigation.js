import { useState } from 'react';
import './Navigation.css';

export default function Navigation() {
    let [navIsExpanded, setNavIsExpanded] = useState(false);

    function navExpandHandler() {
        if (navIsExpanded) {
            setNavIsExpanded(false);
        } else {
            setNavIsExpanded(true);
        }
    }

    return (
        <nav className='site-header-navigation'>
            <a className='header-logo' href="#">
                <img src="/assets/pictures/forge.png" alt="" />
                Forge My Physique
            </a>
            <button className='nav-dropdown-btn' onClick={navExpandHandler}>
                <i style={navIsExpanded ? { display: 'none' } : { display: '' }} className="fa-solid fa-bars"></i>
                <i style={navIsExpanded ? { display: 'flex' } : { display: 'none' }} className="fa-solid fa-xmark"></i>
            </button>
            <ul style={navIsExpanded ? { display: 'flex' } : { display: '' }} className='nav-ul'>
                <li>
                    <a href='#' className='active'>About the app</a>
                </li>
                <li>
                    <a href='#'>Main Features</a>
                </li>
                <li>
                    <a href='#'>Download</a>
                </li>
                <li>
                    <a href='#'>Contact Us</a>
                </li>
                <li>
                    <a href='#'>Live Demo</a>
                </li>
            </ul>
        </nav>
    );
}