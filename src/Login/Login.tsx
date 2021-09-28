import React from "react";
import './Login.scss';
import github from "../github.svg";

function Login() {
    function login() {
        window.location.href = "https://github.com/login/oauth/authorize?client_id=02de8a8864665033cc15";
    }
   return (
       <div className="login-wrap">
           <div className="login-header">第三方登录</div>
           <img src={github} className="github" alt="github" onClick={login}/>
           <div className="login-footer">Login with Github</div>
       </div>
   );
}

export default Login;