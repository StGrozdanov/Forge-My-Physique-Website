import './BackToTop.css';
import { Link } from 'react-scroll/modules';

export default function BackToTop() {
    return (
        <Link
            to='site-nav'
            smooth={true}
            duration={1000}
            activeClass='hidden'
            spy={true}
            className='button-to-top'
        >
            <i className="fa-solid fa-angle-up"></i>
        </Link>
    );
}