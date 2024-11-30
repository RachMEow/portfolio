import React, {useState} from "react";
import "./Game.css";

const Game = ({objectives}) => {
    const [completed, setCompleted] = useState(0);

    const handleObjectiveClick = () => {
        if (completed < objectives.length) {
            setCompleted(completed + 1);
        }
    };

    return (
        <div className="game">
            <h1>Complete the Objectives</h1>
            <ul>
                {objectives.map((obj, index) => (
                    <li
                        key={index}
                        className={index < completed ? "completed" : ""}
                        onClick={handleObjectiveClick}
                    >
                        {obj}
                    </li>
                ))}
            </ul>
            <p>Progress: {completed}/{objectives.length}</p>
            {completed === objectives.length && <p>Congratulations! Level Complete!</p>}
        </div>
    );
};

export default Game;
