import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './Login.scss';
import github from "../github.svg";

function Login() {
    function getWxQr() {
        return 'https://www.bearxsh.com/wx/qr?id=' + uuidv4().replaceAll('-', '');
    }
   return (
       <div className="login-wrap">
           <div className="login-header">微信扫一扫登录</div>
           <img src={getWxQr()} className="login-photo" alt="qr"/>
           <div className="login-footer">Login with WeChat</div>
       </div>
   );
}

export default Login;
