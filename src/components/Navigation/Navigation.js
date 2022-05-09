import './Navigation.css';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { NavLink } from 'react-router-dom';

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
        <nav id='site-nav' className='site-header-navigation'>
            <NavLink to='/' className='header-logo'>
                <img src="/assets/pictures/forge.png" alt="" />
                Forge My Physique
            </NavLink>
            <button className='nav-dropdown-btn' onClick={navExpandHandler}>
                <i style={navIsExpanded ? { display: 'none' } : { display: '' }} className="fa-solid fa-bars"></i>
                <i style={navIsExpanded ? { display: 'flex' } : { display: 'none' }} className="fa-solid fa-xmark"></i>
            </button>
            <ul style={navIsExpanded ? { display: 'flex' } : { display: '' }} className='nav-ul' onClick={navExpandHandler}>
                <li>
                    <NavLink to='/' >About the app</NavLink>
                </li>
                <li>
                    <NavLink to='/features' >Main Features</NavLink>
                </li>
                <li>
                    <Link
                        to='countdown'
                        alt=''
                        smooth={true}
                        duration={1400}
                        activeClass='active'
                        spy={true}
                        className='scroll-link'
                    >Download</Link>
                </li>
                <li>
                    <NavLink to='/contacts'>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to='/demo'>Live Demo</NavLink>
                </li>
            </ul>
        </nav>
    );
}