import React from "react";
import SkillCategory from "./SkillCategory";
import "./styles/SkillsBook.css";

const skillsData = {
    Languages: ["Java", "JavaScript", "HTML5", "CSS3", "SQL", "NoSQL"],
    Frameworks: ["Angular", "React", "React Native", "Spring Boot"],
    Tools: ["Postman", "JUNIT tests", "Git", "Docker", "Kubernetes", "RabbitMQ"],
    Platforms: ["Azure", "AWS"],
    Methodologies: ["Agile / Scrum", "devOps", "CICD"],
    Databases: ["MongoDB"],
    Monitoring: ["Grafana", "Selenium"],
    Networking: ["SIP", "REST API"],
};

const SkillsBook = () => {

    return (
        <div className="skills-book-container">
            <div className="skills-content">
                {Object.keys(skillsData).map((category, index) => (
                    <SkillCategory key={index} category={category} skills={skillsData[category]}/>
                ))}
            </div>
        </div>
    );
};

export default SkillsBook;