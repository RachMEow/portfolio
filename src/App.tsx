import React from "react";
import Home from "./components/home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ExperienceLevels from "./components/experience/ExperienceLevels";
import SkillsBook from "./components/skills/SkillsBook";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experience-levels" element={<ExperienceLevels/>}/>
                    <Route path="/skills-book" element={<SkillsBook/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
