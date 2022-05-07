import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../components/appHeader/AppHeader"
import { InProcessPage, MainPage, TimetablePage } from "../components/pages";
import './app.css'
const App = () => {
    return(
        <Router>
            <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/timetable" element={<TimetablePage/>}/>
                        <Route path="/*" element={<InProcessPage/>}/>
                    </Routes>
                    <div className="background-img"/>
                </main>
            <footer>
            </footer>
        </Router>
      
    )
}

export default App;
