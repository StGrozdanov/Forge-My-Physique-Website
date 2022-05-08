import './Feature.css';

export default function Feature({ iconClass, position, title, description }) {
    return (
        <article className="feature">
            <header className={'feature-header ' + position}>
                <i className={iconClass}></i>
            </header>
            <main className='feature-main'>
                <h4>{title}</h4>
                <p>{description}</p>
            </main>
        </article>
    );
}