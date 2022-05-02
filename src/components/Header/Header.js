import './Header.css'

export default function Header() {
    return (
        <header className='site-header'>
            <section className='site-header-section'>
                <article className='site-header-section-description'>
                    <h1 className='slideFadeInUp animateAfter500'>NOT YOUR AVERAGE FITNESS APP</h1>
                    <h3 className='slideFadeInUp animateAfter800'>Forged for professionals and beginners</h3>
                    <h3 className='slideFadeInUp animateAfter1100'>Forged for scientific tracking</h3>
                    <h3 className='slideFadeInUp animateAfter1400'>Forged for performance</h3>
                    <h3 className='slideFadeInUp animateAfter1700'>Forged to perfection</h3>
                    <p className='slideFadeInUp animateAfter2000'>
                        Our multiplatform application supports both android and apple devices.
                    </p>
                    <p className='slideFadeInUp animateAfter2000'>
                        No limitations, no compromise both in quality and accessibility.
                    </p>
                </article>
                <article>
                    <img className='site-header-section-img' src="/assets/pictures/header-img.png" alt="" />
                </article>
            </section>
        </header>
    );
}