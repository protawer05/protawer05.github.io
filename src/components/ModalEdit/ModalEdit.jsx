import s from './modalEdit.module.scss'
import closeIcon from '../../assets/ui_interface_cross_cancel_remove_delete_close_icon_219791.svg'
import {useEffect, useState} from "react";
import axios from "axios";
import {editHomework} from "../../redux/slices/homeworkSlice";
import {useDispatch} from "react-redux";
const ModalEdit = ({title, homework, id, setModalOpen, levelOfDifficult}) => {
    const dispatch = useDispatch()
    const [lessonName, setLessonName] = useState(title)
    const [lessonHomework, setLessonHomework] = useState(homework)
    const [levelDifficult, setLevelDifficult] = useState(levelOfDifficult)
    const selectStyle = ['green', 'purple', 'yellow', 'orange', 'red'];

    const onSubmit = () => {
        const newObj = {
            lesson: lessonName,
            lessonHomework: lessonHomework,
            levelDifficult,
        }
        axios.put(`https://63356ac08aa85b7c5d1acafc.mockapi.io/homeworks/${id}`, newObj)
        dispatch(editHomework({title: lessonName, homework: lessonHomework, levelDifficult, id}))
        setLessonName('')
        setLessonHomework('')
        setLevelDifficult(1)

        setModalOpen(false)
    }

    const submitOnPressEnter = (e) => {
        if (e.key === "Enter"){
            onSubmit()
            setModalOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', submitOnPressEnter)
        return () => {
            document.removeEventListener('keydown', submitOnPressEnter)
        }
    }, [lessonHomework, lessonName, levelDifficult])
    return (

        <div className={s.wrapper}>
            <form action="" className={s.form}>
                <div className={s.edit__container}>
                    <div className={s.edit__title}>Редактирование д/з</div>
                    <div onClick={() => setModalOpen(false)} className={s.close}><img src={closeIcon} alt="close"/></div>
                </div>
                <div className={s.lessonName}>
                    <div className={s.lessonName__title}>Название предмета</div>
                    <input value={lessonName} onChange={(e) => setLessonName(e.target.value)} type="text" className={s.lessonName__input}/>
                </div>
                <div className={s.lessonHomework}>
                    <div className={s.lessonHomework__title}>Домашнее задание</div>
                    <input value={lessonHomework} onChange={(e) => setLessonHomework(e.target.value)}type="text" className={s.lessonHomework__input}/>
                </div>
                <div className={s.level}>
                    <div className={s.level__title}>Уровень сложности</div>
                    <select value={levelDifficult} style={{backgroundColor: selectStyle[levelDifficult - 1]}} className={s.level__select} onChange={(e) => setLevelDifficult(parseInt(e.target.value))}>
                        <option style={{backgroundColor: selectStyle[0]}} value={1}>1</option>
                        <option style={{backgroundColor: selectStyle[1]}} value={2}>2</option>
                        <option style={{backgroundColor: selectStyle[2]}} value={3}>3</option>
                        <option style={{backgroundColor: selectStyle[3]}} value={4}>4</option>
                        <option style={{backgroundColor: selectStyle[4]}} value={5}>5</option>
                    </select>
                </div>
                <div onClick={onSubmit} className={s.button}>Отправить</div>
            </form>
        </div>
    );
};

export default ModalEdit;