import s from './HomeworkBlock.module.scss';
import closeIcon from '../../assets/ui_interface_cross_cancel_remove_delete_close_icon_219791.svg'
import axios from "axios";
import {deleteHomework} from "../../redux/slices/homeworkSlice";
import {useDispatch} from "react-redux";

const HomeworkBlock = ({title, id, homework, levelDifficult}) => {
    const dispatch = useDispatch()
    const onClickDelete = (id) => {
        axios.delete(`https://63356ac08aa85b7c5d1acafc.mockapi.io/homeworks/${id}`)
            .then(res => console.log(res))
        dispatch(deleteHomework(id))
    }
    let levelStyle
    switch (levelDifficult){

        case 1: levelStyle = `green`;
            break;
        case 2: levelStyle = 'purple';
            break;
        case 3: levelStyle = 'yellow';
            break;
        case 4: levelStyle = 'orange';
            break;
        case 5: levelStyle = 'red';
            break;
        default: levelStyle = 'blue'
    }
    return (
        <div key={id} className={s.container}>
            <div className={s.homework__top}>
                <div className={s.homework__delete}>
                    <div onClick={() => onClickDelete(id)} className={s.delete__link} >
                        <img src={closeIcon} alt="delete" className={s.close__icon}/>
                    </div>
                </div>
                <h3 className={s.lesson__title}>{title}</h3>
            </div>
            <div className={s.homework__bottom}>
                <div className={s.homework__text}>{homework}</div>
            </div>
            <div className={s.level}>Уровень сложности: <span style={{color: levelStyle}} className={s.level__number}>{levelDifficult}/5</span></div>
        </div>
    )
}

export default HomeworkBlock;