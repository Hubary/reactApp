import React from "react";
import {Link} from 'react-router';
class Header extends React.Component {
  componentDidMount() {
    $(window)
      .bind("scroll", function () {
        if ($(document).scrollTop() > 100) {
          $(".home .header").css({'background-color': '#dd2727', 'transition': '0.4s'});
        } else {
          $(".home .header").css({'background-color': 'transparent', 'transition': '0.4s'});
        }
      });
  }
  render() {
    return (
      <header className="header mui-bar mui-bar-nav">
        <a className="ind-search" href="Search-page.html">
          <span>搜索想要的宝贝</span>
        </a>
        <div className="notice-box">
          <span className="notice-icon"><img src="/src/assets/images/notice-icon.png"/>
            <em>2</em>
          </span>
          <span>消息</span>
        </div>
      </header>
    )
  }
};
export default Header;
