import './BackToTop.css';

export default function BackToTop() {
    return (
        <a href="#" id="scrollToTop" className="button-to-top" style={{ display: "block" }}>
            <i className="fa-solid fa-angle-up"></i>
        </a>
    );
}