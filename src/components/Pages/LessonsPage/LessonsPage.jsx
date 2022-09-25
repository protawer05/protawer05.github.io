import { useState, useEffect } from 'react';
import { times, lessons, lessonEndTime } from './lessonsList';
import s from './lessonsPage.module.scss';
import useTime from '../../../hooks/useTime';
const LessonsPage = () => {
  const { dayNow, totalTime } = useTime();
  const [refreshComponent, setRefreshComponent] = useState(totalTime);

  useEffect(() => {
    setTimeout(() => setRefreshComponent(totalTime + 1), 1000);
  }, [refreshComponent]);

  const renderItems = (arr, title, day, dayNow) => {
    const array = arr[day];
    return (
      <div className={s.lesson__item}>
        <div className={s.lesson__item_title} style={day === dayNow ? { color: 'red' } : null}>
          {title}
        </div>
        <div className={s.item__column}>
          <ul className={s.item__list}>
            {array.map((item, i) => {
              return (
                <li
                  key={i}
                  className={s.list__item}
                  style={
                    totalTime <= lessonEndTime[i] &&
                    lessonEndTime[i] - totalTime < 2400 &&
                    (day === dayNow || day === 'times')
                      ? { color: 'red' }
                      : { color: '#fff' }
                  }>
                  {i + 1}. {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className={s.lessons__wrapper}>
      <div className={s.lessons__content}>
        {renderItems(times, 'Звонки', 'times', dayNow)}
        {renderItems(lessons, 'Понедельник', 'monday', dayNow)}
        {renderItems(lessons, 'Вторник', 'tuesday', dayNow)}
        {renderItems(lessons, 'Среда', 'wednesday', dayNow)}
        {renderItems(lessons, 'Четверг', 'thursday', dayNow)}
        {renderItems(lessons, 'Пятница', 'friday', dayNow)}
      </div>
    </div>
  );
};

export default LessonsPage;
