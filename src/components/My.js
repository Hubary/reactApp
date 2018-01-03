import React from "react";
import {Link} from 'react-router';
class My extends React.Component {
  render() {
    return (
      <div>
        <div className="my-head">
          <div className="my-head-top">
            <a href="Account-modification.html">
              <div className="my-head-face-box">
                <div className="my-head-face"><img src="/src/assets/images/my-face.jpg"/></div>
              </div>
              <h1>13645691510</h1>
            </a>
          </div>
          <div className="notice-box">
            <span className="notice-icon"><img src="/src/assets/images/notice-icon.png"/>
              <em>2</em>
            </span>
            <span>消息</span>
          </div>
        </div>

        <div className="mui-content">
          <div className="my-group clearfix">
            <div className="my-item">
              <div className="my-item-box">
                <a href="Shopping-Cart.html">
                  <span><img src="/src/assets/images/my-order.png"/></span>
                  <h2>我的订单</h2>
                </a>
              </div>
            </div>
            <div className="my-item">
              <div className="my-item-box">
                <a href="javascript:;">
                  <span><img src="/src/assets/images/my-footprints.png"/></span>
                  <h2>我的足迹</h2>
                </a>
              </div>
            </div>
            <div className="my-item">
              <div className="my-item-box">
                <a href="javascript:;">
                  <span><img src="/src/assets/images/my-collection.png"/></span>
                  <h2>我的收藏</h2>
                </a>
              </div>
            </div>
            <div className="my-item">
              <div className="my-item-box">
                <a href="javascript:;">

                  <span><img src="/src/assets/images/my-comment.png"/></span>
                  <h2>评论记录</h2>
                </a>
              </div>
            </div>
            <div className="my-item">
              <div className="my-item-box">
                <span><img src="/src/assets/images/my-reward.png"/></span>
                <h2>邀请奖励</h2>
              </div>
            </div>
            <div className="my-item">
              <div className="my-item-box">
                <a href="Account-modification.html">
                  <span><img src="/src/assets/images/my-account-modification.png"/></span>
                  <h2>账号修改</h2>
                </a>
              </div>
            </div>
            <div className="my-item">
              <div className="my-item-box">
                <a href="Online-Service.html">
                  <span><img src="/src/assets/images/my-feedback.png"/></span>
                  <h2>问题反馈</h2>
                </a>
              </div>
            </div>
            <div className="my-item">
              <div className="my-item-box">
                <span><img src="/src/assets/images/my-set-up.png"/></span>
                <h2>综合设置</h2>
              </div>
            </div>
            <div className="my-item">
              <div className="my-item-box">
                <Link to="/login">
                  <span><img src="/src/assets/images/logout.svg"/></span>
                  <h2>退出登录</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default My;