import { useEffect, useState } from "react";
const Timer = ({deadLine}) => {
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
 
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }
    
    const birthday = getTimeRemaining(deadLine)
    const days = getZero(birthday.days);
    const hours = getZero(birthday.hours);
    const minutes = getZero(birthday.minutes);
    const seconds = getZero(birthday.seconds);

    const [refreshTimer, setRefreshTimer] = useState(seconds);
    
    useEffect(() => {
        setTimeout(() => setRefreshTimer(seconds + 1), 1000)
    }, [refreshTimer])

    return (
        <div className="header__timer">
            <div className="timer__text">
                <div className="timer__text_day">Дни/</div>
                <div className="timer__text_day">Часы/</div>
                <div className="timer__text_day">Минуты/</div>
                <div className="timer__text_day">Секунды</div>
            </div>
            <div className="timer__count">{`${days} : ${hours} : ${minutes} : ${    seconds}`}</div>
        </div>
    )
}

export default Timer;