import React from "react";
import Header2 from "./Header2";
// import '../assets/css/reg.css'; //没有index.css
import { Link, hashHistory } from 'react-router';
class Reg extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "综合设置"
    }
  };

  render() {
    let title = this.state.title;
    return (
      <div>
        <Header2 title={title}>
          <div className="am-dropdown" data-am-dropdown>
            <span className="am-btn am-dropdown-toggle" data-am-dropdown-toggle><em className="header-notice-tips"></em></span>
            <ul className="am-dropdown-content">
              <li className="clearfix"><a href="#"><i><img src="images/header-notice.png" />></i>消息<em className="header-notice-tips fr"></em></a></li>
              <li><a href="Index.html"><i><img src="images/header-home.png" />></i>首页</a></li>
            </ul>
          </div>
        </Header2>/>
        <div className="mui-content">
          <div className="settings-group">
            <div className="settings-item">
              <span>消息通知开关</span>
              <div className="mui-switch mui-switch-mini">
                <div className="mui-switch-handle"></div>
              </div>
            </div>
            <div className="settings-item highlight right-arrow"><span>清除缓存</span><em className="fr">4.65M</em></div>
            <div className="settings-item highlight"><span>当前版本</span><em className="fr">V.12.1</em></div>
            <div className="settings-item highlight right-arrow"><span>喜欢首购？打分鼓励一下吧</span></div>
          </div>
          <div className="settings-btn"><button className="btn" type="button">退出登录</button></div>
        </div>


      </div>
    );
  }

  componentDidMount() {
    this.props.router.replace('/setting');

  }
}
export default Reg;