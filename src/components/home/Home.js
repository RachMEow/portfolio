import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";
import "../../styles/Buttons.css";

const Home = () => {
    const navigate = useNavigate(); // 使用 useNavigate 钩子

    return (
        <div className="home-container">
            <div className="title-section">
                <h1 className="title">Welcome to Jiarui&apos;s World</h1>
                <p className="subtitle">A Full Stack Developer with an 8-bit twist!</p>
            </div>
            <div className="avatar-section">
                <img src="/assets/pixel_avatar_yellow.png" alt="Pixel Avatar" className="avatar"/>
            </div>
            <div className="start-button-section">
                <button
                    className="start-button"
                    onClick={() => navigate("/experience-levels")} // 点击事件
                >
                    Start Adventure
                </button>
            </div>
        </div>
    );
};

export default Home;
