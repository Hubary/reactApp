import React from 'react';
import Banner from "./Banner";
import HomeContent from "./HomeContent";
import Header1 from './Header1';
// import {connect} from "react-redux";
class Shopping extends React.Component {
  constructor() {
    super();
    this.state = {
      title:'购物车'
    }
  }
  render() {
    return (
      <div className="home">
        <Header1 title={this.state.title}/>
        <div className="mui-content">
          <div className="shopcart-group">
            <div className="shopcart-tit clearfix">
              <div className="check-box fl">
                <label>
                  <input
                    type="checkbox"
                    value=""
                    name="newslist"
                    id="newslist-1"
                    className="newslist"/>
                </label>
              </div>
              <span className="fl">
                <a href="#">帮宝适</a>
              </span>
              <span className="fr clearfix">
                <a href="#">领券</a>
                <a href="#">编辑</a>
              </span>
            </div>
            <ul className="shopcart-item">

              <li className="clearfix">
                <div className="check-box">
                  <label>
                    <input
                      type="checkbox"
                      value=""
                      name="newslist"
                      id="newslist-1"
                      className="newslist"/>
                  </label>
                </div>
                <div className="pro-details">
                  <div className="pro-details-l">
                    <a href="#">
                      <img src="/src/assets/images/pro-img-small.jpg"/>
                    </a>
                    <p>已降0.10元</p>
                  </div>
                  <div className="pro-details-r">
                    <div className="pro-details-top">
                      <a href="#">
                        <h2 className="pro-details-text-tit">帮宝适（pampers）超薄干爽 纸尿裤帮宝适（pampers）超薄干爽 纸尿裤</h2>
                        <p className="pro-details-text-des">绿帮 尿不湿 大号L164片（9-14绿帮 尿不湿 大号L164片（9-14KG）KG）</p>
                      </a>
                    </div>
                    <div className="pro-details-tips clearfix">
                      <em>￥219.00</em>
                      <del>￥308</del>
                      <span>手机专享价</span>
                      <div className="pro-number fr">x1</div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <div id="shopcart-footer" className="shopcart-footer">
            <div className="check-box">
              <label className="checkall">
                <input id="checkAll" className="allselect" type="checkbox"/>&nbsp;全选</label>
            </div>
            <div className="total">
              <em>合计：￥00.00</em>
              <span>不含运费</span>
            </div>
            <div className="closing">
              <a href="#" className="btn-sub">去结算</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shopping;