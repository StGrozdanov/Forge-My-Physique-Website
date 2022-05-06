export default function TimeLeft({ value, unit, isCloseToRelease }) {
    return (
        <div className={isCloseToRelease ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{unit}</span>
        </div>
    );
};