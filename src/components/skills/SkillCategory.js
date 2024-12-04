import React from "react";
import "./styles/SkillCategory.css";

const SkillCategory = ({category, skills}) => {
    return (
        <div className="skill-category">
            <h2 className="category-title">{category}</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCategory;