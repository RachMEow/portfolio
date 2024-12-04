import React, {useEffect, useState} from "react";
import "../../styles/Buttons.css";

// 定义组件的 Props 类型
interface PixelButtonProps {
    onClick: () => void; // 点击事件回调函数
    title: React.ReactNode; // 按钮中的内容
    onMouseEnter?: () => void; // 可选的鼠标悬停回调
}

const PixelButton: React.FC<PixelButtonProps> = ({onClick, title, onMouseEnter}) => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    useEffect(() => {
        // Create the audio object once the component mounts
        const hoverAudio = new Audio("/assets/music/hover.mp3");
        setAudio(hoverAudio);
    }, []);
    const handleHover = () => {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch((err) => {
                console.error("Audio play error:", err.message);
            });
        }
    };

    const unlockAudio = () => {
        // This ensures audio can play after the first user interaction
        if (audio) {
            audio.play().catch(() => {
                console.log("Audio unlocked for future playback.");
            });
        }
    };
    useEffect(() => {
        document.addEventListener("click", unlockAudio, {once: true});
        return () => document.removeEventListener("click", unlockAudio);
    }, [audio]);

    return (
        <button
            className="pixel-button"
            onClick={onClick}
            onMouseEnter={handleHover} // 播放音效的回调
        >
            {title}
        </button>
    );
};

export default PixelButton;