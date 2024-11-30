import React from "react";
import Level from "./Level";
import "./ExperienceLevels.css";
import {useNavigate} from "react-router-dom";
import "../../styles/Buttons.css";

const ExperienceLevels = () => {
    const navigate = useNavigate(); // 使用 useNavigate 钩子
    const levels = [
        {
            id: 1,
            company: "Motorola Solutions",
            year: "2020-2024",
            description: "Full Stack Developer",
            objectives: [
                "Develop cloud-based Angular web apps",
                "Implement Java-based microservices",
                "Automate pipelines with Azure and AWS",
            ],
        },
        {
            id: 2,
            company: "Barracuda Networks",
            year: "2019",
            description: "Software Developer & QA",
            objectives: [
                "Build remote monitoring systems",
                "Design TypeScript-based features",
                "Optimize data with SQL queries",
            ],
        },
        {
            id: 3,
            company: "Innovative Data Technology",
            year: "2017",
            description: "Android Developer",
            objectives: [
                "Create an air quality monitoring app",
                "Enhance UI for better user experience",
            ],
        },
    ];

    return (
        <div className="experience-levels">
            <h1 className="title">Experience Levels</h1>
            <div className="timeline">
                {levels.map((level) => (
                    <Level key={level.id} level={level}/>
                ))}
            </div>
            <button
                className="start-button"
                onClick={() => navigate("/")}
            >
                Back to Home
            </button>
        </div>
    );
};

export default ExperienceLevels;
