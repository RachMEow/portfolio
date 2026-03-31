import React from "react";
import "./Level.css";
import "../../styles/Buttons.css";

const Level = ({level, onPlay}) => {
    return (
        <div className="level">
            <h2>{level.company}</h2>
            <p>{level.year}</p>
            <p>{level.description}</p>
            <button
                className="pixel-button"
                onClick={() => onPlay(level)}
            >
                Play
            </button>
        </div>
    );
};

export default Level;