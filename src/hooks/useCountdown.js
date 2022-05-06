import { useEffect, useState } from 'react';

export default function useCountdown(targetDate) {
    const targetDateTime = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(targetDateTime - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(targetDateTime - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);

    }, [targetDateTime]);

    return calculatedTimeLeft(countDown);
};

function calculatedTimeLeft(countDown) {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};