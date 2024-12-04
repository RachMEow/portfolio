import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";
import "../../styles/Buttons.css";
import AboutMeDialog from "../aboutme/AboutMeDialog";
import PixelButton from "../common/PixelButton";

const Home = () => {
    const navigate = useNavigate(); // 使用 useNavigate 钩子
    const [showDialog, setShowDialog] = useState(false); // 控制对话框显示
    const [dialogPosition, setDialogPosition] = useState({top: 500, left: 500});
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true); // 设置关闭状态
        setTimeout(() => {
            setClosing(false);
            setShowDialog(false); // 延迟移除组件
        }, 50); // 延迟时间应与动画时长一致
    };

    const handleAvatarClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const avatarRect = event.currentTarget.getBoundingClientRect()
        console.log("avatarRect.top", avatarRect.top)
        setDialogPosition({
            top: avatarRect.top - 15, // 考虑页面滚动
            left: avatarRect.left - 15, // 头像右边 + 20px 间距
        });
        setShowDialog(true);
    };

    return (
        <div className="home-container">
            <div className="title-section">
                <h1 className="title">Welcome to Javacado&apos;s World</h1>
                <p className="subtitle">A Full Stack Developer with an 8-bit twist!</p>
            </div>
            <div className="avatar-section">
                <img src="/assets/pixel_avatar_yellow.png"
                     alt="Pixel Avatar"
                     className="avatar"
                     onClick={handleAvatarClick}
                />
            </div>
            <div className="start-button-section">
                <PixelButton onClick={() => navigate("/experience-levels")}
                             title={"Start Adventure"}/>
            </div>
            <div>
                <PixelButton onClick={() => navigate("/skills-book")}
                             title={"Skills Book"}/>
            </div>
            {showDialog && (
                <AboutMeDialog
                    onClose={handleClose}
                    position={dialogPosition}
                    closing={closing}
                />
            )}
        </div>
    );
};

export default Home;
