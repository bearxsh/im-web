import React from "react";
import "./Chat.scss";
import avatar from "./avatar.png";


function Chat() {
    return (
        <div className="wrap">
            <div className="menu">
                <img src={avatar} className="avatar" alt="avatar"/>
            </div>
            <div className="message-list">
                <div className="message-item-wrap">
                    <img src={avatar} className="avatar" alt="avatar"/>
                    <div className="message-item-right">
                        <div className="name-time-wrap">
                            <div className="">张三</div>
                            <div className="time">14:05</div>
                        </div>
                        <div className="message-latest">一起去爬山吧</div>
                    </div>
                </div>
                <div className="message-item-wrap">
                    <img src={avatar} className="avatar" alt="avatar"/>
                    <div className="message-item-right">
                        <div className="name-time-wrap">
                            <div className="">李四</div>
                            <div className="time">17:16</div>
                        </div>
                        <div className="message-latest">摆烂是吧</div>
                    </div>
                </div>
            </div>
            <div className="chat">
                <div className="chat-name"><div>张三</div></div>
                <div className="chat-body">
                    <div className="message-wrap">
                        <img src={avatar} className="avatar" alt="avatar"/>
                        <div className="message">一起去爬山吧</div>
                    </div>
                    <div className="message-wrap-right">
                        <div className="message">不去</div>
                        <img src={avatar} className="avatar" alt="avatar"/>
                    </div>
                </div>
                <div className="chat-bottom">
                    <textarea className="text"/>
                </div>
            </div>
        </div>
    );
}

export default Chat;