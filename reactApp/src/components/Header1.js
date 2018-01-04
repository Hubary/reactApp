import React from "react";
import {Link} from 'react-router';
class Header1 extends React.Component {
  render() {
    return (
      <div id="header" className="search-head header mui-bar mui-bar-nav">
        <h1 className="mui-title">{this.props.title}</h1>
        <div className="notice-box">
          <span className="notice-icon"><img src="/src/assets/images/notice-icon.png"/>
            <em>2</em>
          </span>
          <span>消息</span>
        </div>
      </div>
      
    )
  }
};
export default Header1;
