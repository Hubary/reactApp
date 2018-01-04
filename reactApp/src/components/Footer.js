import React from "react";
import {Link} from 'react-router';
const Footer = () => (
  <footer className="footer ind-footer mui-bar-tab" id="footer">
    <ul className="display-box-middle">
      <li>
        <Link to="/home" activeClassName="on">
          <span className="footer-icon footer-index"></span>
          <span>首页</span>
        </Link>
      </li>
      {/* <li>
        <a href="classNameification.html">
          <span className="footer-icon footer-classification"></span>
          <span>分类</span>
        </a>
      </li> */}
      <li>
        <Link to="/cashback" activeClassName="on">
          <span className="footer-icon footer-cash-back"></span>
          <span>超级返</span>
        </Link>
      </li>
      <li>
      <Link to="/shopping" activeClassName="on">
          <span className="footer-icon footer-cart"></span>
          <span>购物车</span>
        </Link>
      </li>
      <li>
        <Link to="/my" activeClassName="on">
          <span className="footer-icon footer-my"></span>
          <span>我的首购</span>
        </Link>
      </li>
    </ul>
  </footer>
);
export default Footer;