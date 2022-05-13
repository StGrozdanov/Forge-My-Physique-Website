import './Navigation.css';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { NavLink } from 'react-router-dom';
import ModalDialogue from '../Common/ModalDialogue/ModalDialogue';
import CONTACT_FORM from '../../constants/modalContent/contactForm';
import LOGIN_FORM from '../../constants/modalContent/loginForm';

export default function Navigation() {
    let [navIsExpanded, setNavIsExpanded] = useState(false);
    let [showModal, setShowModal] = useState(false);
    let [modalContent, setModalContent] = useState({});

    function popUpHandler(e) {
        e.target.textContent == 'Contact Us' ? setModalContent(CONTACT_FORM) : setModalContent(LOGIN_FORM);
        showModal ? setShowModal(false) : setShowModal(true);
    }

    function navExpandHandler() {
        if (navIsExpanded) {
            setNavIsExpanded(false);
        } else {
            setNavIsExpanded(true);
        }
    }

    return (
        <>
            {showModal ? <ModalDialogue content={modalContent} setModalView={setShowModal} /> : null}
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
                        <NavLink to='/'>About the app</NavLink>
                    </li>
                    <li>
                        <NavLink to='/features'>Main Features</NavLink>
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
                        <a
                            className={showModal && modalContent === CONTACT_FORM ? 'active' : null}
                            onClick={popUpHandler}
                            href='#contacts'
                        >
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a
                            className={showModal && modalContent === LOGIN_FORM ? 'active' : null}
                            onClick={popUpHandler}
                            href='#demo'
                        >
                            Live Demo
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}