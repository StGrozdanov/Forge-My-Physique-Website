import './Features.css';

import Feature from "./Feature";
import keyFeatures from '../../constants/keyFeatures';

export default function Features() {
    return (
        <section className="features-section">
            <header className='features-section-header'>
                <h2>FEATURES O<span className='features-forge-heading'>F OUR FORGE</span></h2>
                <p className='features-header-paragraph'>
                    Our application features are innovative and market defining. They all forge into a single plan that
                    is personalised for each user, for each gender, for each body composition. It's flexible, easy to follow 
                    and provides advanced features of which both professionals and beginners can bennefit from.
                </p>
            </header>
            <main className='features-main-section'>
                <aside>
                    <Feature {...keyFeatures.theForgeTracker} />
                    <Feature {...keyFeatures.theForgeLab} />
                    <Feature {...keyFeatures.theForgeInn} />
                </aside>
                <div className='features-main-section-picture-container'>
                    <img className='features-main-section-picture' src="assets/pictures/phone.png" alt="" />
                </div>
                <aside>
                    <Feature {...keyFeatures.theForgeBodyComposition} />
                    <Feature {...keyFeatures.theForgeBodyScale} />
                    <Feature {...keyFeatures.theForgeRanklist} />
                </aside>
            </main>
        </section>
    );
}