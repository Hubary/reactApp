import React from "react";
import Header2 from "./Header2";
// import '../assets/css/reg.css'; //没有index.css
import {Link, hashHistory} from 'react-router';
class Reg extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "注册"
    }
  };
  
  render() {
    let title = this.state.title;
    return (
      <div>
        <Header2 title={title}/>
        <div className="mui-content">
          <form>
            <div className="register-group">
              <div className="register-input mui-input-row user-icon">
                <input
                  type="text"
                  className="mui-input-clear"
                  placeholder="请输入手机号"
                  autoFocus="autofocus"/>
              </div>
              <div className="register-input mui-input-row yzm-icon">
                <input type="text" className="mui-input-clear" placeholder="请输入验证码"/>
                <a className="hqyzm" href="#">获取验证码</a>
              </div>
              <div className="register-input mui-input-row paddword-icon">
                <input type="password" className="mui-input-clear" placeholder="密码"/>
              </div>
            </div>
            <div className="user-agreement">
              <label>
                <input
                  name="checkbox"
                  type="checkbox"
                  id=""
                  className="checkbox"
                  defaultChecked="checked"/>同意此《<a href="#" id="df_xieyi" className="tigger">用户协议</a>》</label>
            </div>
            <div className="settings-btn">
              <button className="btn" type="button">注册</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}
export default Reg;