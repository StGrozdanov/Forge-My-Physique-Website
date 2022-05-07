import './TimeLeft.css';

export default function TimeLeft({ value, unit, isCloseToRelease }) {
    return (
        <div className="countdown">
            <div className="bloc-time" data-init-value="24">
                <span className="count-title">{unit}</span>

                <div className="figure">
                    <span className="top" style={isCloseToRelease ? {color: 'red'} : {color: ''}}>{value}</span>
                    <span className="top-back">
                        <span>{value}</span>
                    </span>
                    <span className="bottom" style={isCloseToRelease ? {color: 'darkred'} : {color: ''}}>{value}</span>
                    <span className="bottom-back">
                        <span>{value}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};