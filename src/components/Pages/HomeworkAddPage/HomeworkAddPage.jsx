import s from './homeworkAddPage.module.scss';
import {useState} from 'react'
import axios from "axios";
import {uid} from "uid";
const HomeworkAddPage = () => {
  const [lessonName, setLessonName] = useState('')
  const [lessonHomework, setLessonHomework] = useState('')

    const onSubmit = () => {
      const newObj = {
          lesson: lessonName,
          lessonHomework: lessonHomework,
          id: uid()
      }
      axios.post('https://63356ac08aa85b7c5d1acafc.mockapi.io/homeworks', newObj)

      setLessonName('')
      setLessonHomework('')
    }
  return (
      <div className={s.container}>
        <form action="" className={s.form}>
            <div className={s.lessonName}>
                <div className={s.lessonName__title}>Название предмета</div>
                <input value={lessonName} onChange={(e) => setLessonName(e.target.value)} type="text" className={s.lessonName__input}/>
            </div>
            <div className={s.lessonHomework}>
                <div className={s.lessonHomework__title}>Домашнее задание</div>
                <input value={lessonHomework} onChange={(e) => setLessonHomework(e.target.value)}type="text" className={s.lessonHomework__input}/>
            </div>
            <div onClick={onSubmit} className={s.button}>Отправить</div>
        </form>

      </div>
  )
};

export default HomeworkAddPage;
