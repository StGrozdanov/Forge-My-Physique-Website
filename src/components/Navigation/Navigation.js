import './Navigation.css';

export default function Navigation() {
    return (
        <nav className='site-header-navigation'>
            <a className='header-logo' href="#">
                <img src="/assets/pictures/forge.png" alt="" />
                Forge My Physique
            </a>
            <ul className='nav-ul'>
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