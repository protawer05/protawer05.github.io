import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './homeworkPage.module.scss';
import {fetchHomeworks} from "../../../redux/slices/homeworkSlice";
import HomeworkBlock from "../../HomeworkBlock/HomeworkBlock";


const HomeworkPage = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector(state => state.homeworks.status)
  const homeworks = useSelector(state => state.homeworks.homeworks)

  useEffect(() => {
    dispatch(fetchHomeworks())
  }, [])


  const elements = homeworks.map(item => <HomeworkBlock title={item.lesson} homework={item.lessonHomework} key={item.id} id={item.id} levelDifficult={item.levelDifficult}/>)
  const content = fetchStatus === 'loading' ? <h1>Abob</h1> : elements
  return (
      <div className={s.container}>
        {content}
      </div>

  )
};

export default HomeworkPage;
