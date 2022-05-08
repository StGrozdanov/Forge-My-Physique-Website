import './Feature.css';

export default function Feature({ iconClass, position, title, description, animationDelay }) {
    return (
        <article
            className={position == 'left' ? 'fadeInLeft ' + 'feature' : 'fadeInRight ' + 'feature'}
            style={{ animationDelay: animationDelay }}
        >
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