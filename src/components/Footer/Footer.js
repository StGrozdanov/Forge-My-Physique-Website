import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <article className="site-footer-contacts">
                <ul>
                    <li>
                        <i className="fa-solid fa-envelope"></i>
                    </li>
                    <li>
                        <i className="fa fa-linkedin"></i>
                    </li>
                    <li>
                        <i className="fa fa-github"></i>
                    </li>
                </ul>
            </article>
            <article className="site-footer-rights">
                All Rights Reserved. © 2022 Forge My Physique
            </article>
        </footer>

    );
}