import React from "react";
import "./AboutMeDialog.css";
import "../../styles/Common.css";
import "../../styles/Buttons.css";

interface AboutMeDialogProps {
    onClose: () => void; // onClose 函数类型
    position: { top: number; left: number }; // 动态设置对话框位置
    closing: boolean;
}

const AboutMeDialog: React.FC<AboutMeDialogProps> = ({onClose, position, closing}) => {
    return (
        <div className="dialog-overlay">
            <div className={`dialog-box ${closing ? "closing" : ""}`}>
                <button className="pixel-button close-button" onClick={onClose}>
                    X
                </button>
                <h1>About Me</h1>
                <ul>
                    <li><strong>Name:</strong> Javacado Sun</li>
                    <li><strong>Profession:</strong> Full Stack Developer</li>
                    <li><strong>Skills:</strong> Java, Angular, React, more</li>
                    <li><strong>Hobbies:</strong> Painting, Photography</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutMeDialog;

