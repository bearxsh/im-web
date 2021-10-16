import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './Login.scss';
import instance from "../axios-config";

function Login() {
    function getWxQr() {
        let id: string = uuidv4().replaceAll('-', '');
        let interval = setInterval(function () {
            instance.get("/login/check?loginid=" + id)
                .then(function (response: any) {
                    let data = response.data;
                    console.log(data);
                    if (data.code === 200) {
                        clearInterval(interval);
                        window.location.href = 'chat';
                    }
                })
                .catch(function (error: any) {
                    console.log("出现错误！");
                    console.log(error);
                })
                .then(function () {
                    //console.log("我总是被执行！")
                })
        }, 3000);
        return 'https://www.bearxsh.com/wx/qr?id=' + id;
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
