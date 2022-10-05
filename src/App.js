import Header from './components/Header/Header';
import LessonsPage from './components/Pages/LessonsPage/LessonsPage';
import HomeworkPage from './components/Pages/HomeworkPage/HomeworkPage';
import HomeworkAddPage from './components/Pages/HomeworkAddPage/HomeworkAddPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import { Routes, Route, HashRouter } from 'react-router-dom';
function App() {
  return (
      <HashRouter>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<LessonsPage />} />
            <Route path="homework" element={<HomeworkPage />} />
            <Route path="homeworkAdd" element={<HomeworkAddPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      </HashRouter>
  );
}

export default App;
