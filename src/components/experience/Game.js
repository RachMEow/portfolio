import React, {useState, useEffect} from "react";
import "./Game.css";

const Game = ({objectives}) => {
    const [playerPos, setPlayerPos] = useState({x: 5, y: 5});
    const [completed, setCompleted] = useState(0);

    // 办公室网格布局 (10x10)
    const officeLayout = [
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall', 'floor', 'desk', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ];

    // 互动物品位置
    const items = [
        {x: 2, y: 2, type: 'computer', name: '电脑'},
        {x: 7, y: 3, type: 'door', name: '门'},
    ];

    useEffect(() => {
        const handleKeyPress = (e) => {
            const {x, y} = playerPos;
            let newX = x, newY = y;
            switch(e.key) {
                case 'ArrowUp': newY = Math.max(0, y - 1); break;
                case 'ArrowDown': newY = Math.min(9, y + 1); break;
                case 'ArrowLeft': newX = Math.max(0, x - 1); break;
                case 'ArrowRight': newX = Math.min(9, x + 1); break;
            }
            if (officeLayout[newY][newX] !== 'wall') {
                setPlayerPos({x: newX, y: newY});
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [playerPos]);

    const handleItemClick = (item) => {
        if (Math.abs(playerPos.x - item.x) <= 1 && Math.abs(playerPos.y - item.y) <= 1) {
            alert(`你靠近了${item.name}！这里可以添加谜题。`);
            // 这里可以添加谜题逻辑
        } else {
            alert('太远了，靠近一点！');
        }
    };

    return (
        <div className="game">
            <h1>逃出老板办公室</h1>
            <div className="office">
                {officeLayout.map((row, y) => (
                    <div key={y} className="row">
                        {row.map((cell, x) => {
                            const item = items.find(i => i.x === x && i.y === y);
                            const isPlayer = playerPos.x === x && playerPos.y === y;
                            return (
                                <div key={x} className={`cell ${cell} ${isPlayer ? 'player' : ''}`}>
                                    {item && <div className={`item ${item.type}`} onClick={() => handleItemClick(item)}></div>}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="objectives">
                <h2>目标</h2>
                <ul>
                    {objectives.map((obj, index) => (
                        <li key={index} className={index < completed ? "completed" : ""}>
                            {obj}
                        </li>
                    ))}
                </ul>
                <p>进度: {completed}/{objectives.length}</p>
            </div>
        </div>
    );
};

export default Game;
