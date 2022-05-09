import './Footer.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Footer() {
    return (
        <footer className="site-footer">
            <article className="site-footer-contacts">
                <ul>
                    <li>
                        <AnimationOnScroll animateIn='fadeInUp' delay={200} offset={40}>
                            <a href='mailto:st.grozdanov.developer@gmail.com'>
                                <i className="fa fa-envelope"></i>
                            </a>
                        </AnimationOnScroll>
                    </li>
                    <li>
                        <AnimationOnScroll animateIn='fadeInUp' delay={300} offset={40}>
                            <a href="https://www.linkedin.com/in/stoyan-grozdanov-533b4b1bb" target="blank">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </AnimationOnScroll>
                    </li>
                    <AnimationOnScroll animateIn='fadeInUp' delay={400} offset={40}>
                        <li>
                            <a href="https://github.com/StGrozdanov" target="blank">
                                <i className="fa fa-github"></i>
                            </a>
                        </li>
                    </AnimationOnScroll>
                </ul>
            </article>
            <article className="site-footer-rights">
                All Rights Reserved. © 2022 Forge My Physique
            </article>
        </footer>
    );
}