import useCountdown from '../../hooks/useCountdown'
import CountdownExpired from './CountdownExpired'
import TimeLeft from './TimeLeft';

export default function Countdown({ targetDate }) {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <CountdownExpired />;
    }

    return (
        <article className="counter">
            <TimeLeft value={days} unit={'Days'} isCloseToRelease={days <= 3} />
            <p>:</p>
            <TimeLeft value={hours} unit={'Hours'} isCloseToRelease={days === 0} />
            <p>:</p>
            <TimeLeft value={minutes} unit={'Minutes'} isCloseToRelease={false} />
            <p>:</p>
            <TimeLeft value={seconds} unit={'Seconds'} isCloseToRelease={false} />
        </article>
    );
};