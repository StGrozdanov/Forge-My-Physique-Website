import './Feature.css';

export default function Feature({ iconClass, position = 'left', title, description }) {
    return (
        <article className="feature">
            <header className={'feature-header ' + position}>
                <i className='fa fa-flask'></i>
            </header>
            <main className='feature-main'>
                <h4>I am feature</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla fuga ut odio quisquam harum magnam tempore!</p>
            </main>
        </article>
    );
}