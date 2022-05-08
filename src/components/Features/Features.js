import './Features.css';

import Feature from "./Feature";

export default function Features() {
    return (
        <section className="features-section">
            <header className='features-section-header'>
                <h2>FEATURES O<span className='features-forge-heading'>F OUR FORGE</span></h2>
                <p className='features-header-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ipsam repellendus laboriosam et delectus, obcaecati aspernatur quod velit architecto iusto! Ex culpa ducimus doloremque sed. Nam sunt quae quam nihil?</p>
            </header>
            <main className='features-main-section'>
                <aside>
                    <Feature />
                    <Feature />
                    <Feature />
                </aside>
                <div className='features-main-section-picture-container'>
                    <img className='features-main-section-picture' src="assets/pictures/phone.png" alt="" />
                </div>
                <aside>
                    <Feature />
                    <Feature />
                    <Feature />
                </aside>
            </main>
        </section>
    );
}