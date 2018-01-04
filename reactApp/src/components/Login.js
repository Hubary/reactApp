import React from "react";
import Header2 from "./Header2";
// import '../assets/css/login.css'; //没有index.css
import {Link} from 'react-router';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "登录"
    }
  };
  render() {
    return (
      <div>
        <Header2 title={this.state.title} />
        <div className="mui-content">
          <form>
            <div className="register-group">
              <div className="register-input mui-input-row user-icon"><input
                type="text"
                className="mui-input-clear"
                placeholder="请输入手机号码"
                autoFocus="autofocus"/></div>
              <div className="register-input mui-input-row paddword-icon"><input
                type="password"
                className="mui-input-clear"
                maxLength="16"
                placeholder="请输入6-16位密码"/></div>
            </div>
            <div className="settings-btn">
              <button className="btn" type="button">登录</button>
            </div>
            <p className="register-now">忘记密码?
              <Link to="/reg">立即注册</Link>
            </p>
          </form>
        </div>

      </div>

    );
  }
}
export default Login;