import {lessons, times, lessonEndTime} from '../../lessonsList';
import useTime from '../../../hooks/useTime';
import { useEffect, useState} from 'react';
import './timetablePage.css';
const TimetablePage = () => {
    const {dayNow, hours, minutes, seconds, totalTime} = useTime();
    const [refreshComponent, setRefreshComponent] = useState(totalTime);

    useEffect(() => {
        setTimeout(() => setRefreshComponent(totalTime + 1), 1000)
    })
    
    const renderItems = (arr, title, day, dayNow) => {
        const array = arr[day];
        return(
            <div className="timetable__item item">
                <div className="item__title" style={day === dayNow ? {'color': 'red'} : null}>{title}</div>
                <div className="item__column">
                    <ul className="column__list">
                        {array.map((item, i) => {
                            return (
                                <li key={i} className="list__item" style={(totalTime <= lessonEndTime[i] && lessonEndTime[i] - totalTime < 2400) && (day === dayNow || day === 'times') ? {color: 'red'} : {color: '#fff'}}>{i + 1}. {item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }


    return(
        <div className="timetable-wrapper">
            <h1 className="timetable__title">Расписание 10A класса</h1>
            <div className="lesson">Идёт урок</div>
            <div className="timetable__content">
                <div className="timetable__container">
                    {renderItems(times, 'Звонки', 'times', dayNow)}
                    {renderItems(lessons, 'Понедельник', 'monday', dayNow)}
                    {renderItems(lessons, 'Вторник', 'tuesday', dayNow)}
                    {renderItems(lessons, 'Среда', 'wednesday', dayNow)}
                    {renderItems(lessons, 'Четверг', 'thursday', dayNow)}
                    {renderItems(lessons, 'Пятница', 'friday', dayNow)}
                </div>
            </div>
        </div>
    )
}
export default TimetablePage;