import './Countdown.css'

import useCountdown from '../../hooks/useCountdown'
import CountdownExpired from './CountdownExpired'
import TimeLeft from './TimeLeft';

export default function Countdown({ targetDate }) {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <CountdownExpired />;
    }

    return (
        <article id='countdown' className="counter">
            <h3>Official Beta Release</h3>
            <TimeLeft value={days} unit={'Days'} isCloseToRelease={days <= 3 && days !== 0} />
            <TimeLeft value={hours} unit={'Hours'} isCloseToRelease={days === 0 && hours !== 0} />
            <TimeLeft value={minutes} unit={'Minutes'} isCloseToRelease={hours === 0 && minutes !== 0} />
            <TimeLeft value={seconds} unit={'Seconds'} isCloseToRelease={minutes === 0 && seconds !== 0} />
        </article>
    );
};