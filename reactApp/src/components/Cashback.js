import React from "react";
import Carousel from "./Carousel";
import HomeContent from "./HomeContent";
import Header1 from './Header1';
import "../assets/css/cashback.css"
// import {connect} from "react-redux";
class Cashback extends React.Component {
  constructor() {
    super();
    this.state = {
      title:'超级返',
      cashbackCarousel:[]
    }
  }
  render() {
    return (
      <div>
        <Header1 title={this.state.title}/>
        <div className="mui-content" style={{paddingBottom:"60px"}}>
          <div className="nav-out">
            <div className="hot-pro-nav">
              <div className="mui-scroll-wrapper">
                <ul className="mui-scroll clearfix">
                  <li>
                    <a className="active" href="javascript:void(0)">全部</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">服饰</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">美妆</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">居家</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">食品</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">全部</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">服饰</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">居家</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">食品</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">全部</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">服饰</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="nav-con">
            <ul className="clearfix">
              <li>
                <a href="javascript:void(0)">全部</a>
              </li>
              <li>
                <a href="javascript:void(0)">全部</a>
              </li>
              <li>
                <a href="javascript:void(0)">全部</a>
              </li>
              <li>
                <a href="javascript:void(0)">全部</a>
              </li>
              <li>
                <a href="javascript:void(0)">全部</a>
              </li>
              <li>
                <a href="javascript:void(0)">全部</a>
              </li>
              <li>
                <a href="javascript:void(0)">全部</a>
              </li>
              <li>
                <a href="javascript:void(0)">全部</a>
              </li>
            </ul>
          </div>
          <Carousel Carousel={this.state.cashbackCarousel}/>
          <div className="sort-list">
            <ul className="goods-all-tit-list clearfix">
              <li>
                <a className="on" href="javascript:void(0)">最新上线</a>
              </li>
              <li>
                <a href="javascript:void(0)">销量优先</a>
              </li>
              <li>
                <a href="javascript:void(0)">价格排序</a>
                <div className="up-down-icon">
                  <span className="sort-up active"></span>
                  <span className="sort-down"></span>
                </div>
              </li>
            </ul>
          </div>
          <div className="cash-back-group">
            <div className="cash-back-item">
              <div className="cash-back-img">
                <a href="Cash-back-details.html">
                  <img src="/src/assets/images/cash-back-img.jpg"/>
                </a>
              </div>
              <div className="cash-back-tit">
                <a href="Cash-back-details.html">
                  <h2>古尔莎（Gulsha）晨露玫瑰滋养套装</h2>
                  <span>让肌肤沐浴在玫瑰花丛中，肌肤享受恋爱与呵护</span>
                </a>
              </div>
              <div className="cash-back-bot clearfix">
                <div className="comments-list-bot-price fl">
                  <em>￥
                    <b>198</b>
                  </em>
                  <span>返</span>
                  <strong>11.84</strong>
                </div>
                <div className="fr clearfix">
                  <div className="percentage-out">
                    <div className="percentage-in" style={{width:'30%'}}></div>
                    <em>24%</em>
                  </div>
                  <div className="cash-back-robbed">已抢
                    <em>2371</em>件</div>
                </div>
              </div>
            </div>

            {/* mongodb数据循环 */}
            <div className="cash-back-item">
              <div className="cash-back-img">
                <a href="Cash-back-details.html">
                  <img src="/src/assets/images/cash-back-img.jpg"/>
                </a>
              </div>
              <div className="cash-back-tit">
                <h2>古尔莎（Gulsha）晨露玫瑰滋养套装古尔莎（Gulsha）晨露玫瑰滋养套装</h2>
                <span>让肌肤沐浴在玫瑰花丛中，肌肤享受恋爱与呵护让肌肤沐浴在玫瑰花丛中，肌肤享受恋爱与呵护</span>
              </div>
              <div className="cash-back-bot clearfix">
                <div className="comments-list-bot-price fl">
                  <em>￥
                    <b>198</b>
                  </em>
                  <span>返</span>
                  <strong>11.84</strong>
                </div>
                <div className="fr clearfix">
                  <div className="percentage-out">
                    <div className="percentage-in" style={{width:'30%'}}></div>
                    <em>24%</em>
                  </div>
                  <div className="cash-back-robbed">已抢
                    <em>2371</em>件</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  componentDidMount(){
    this.getData();
  };
  getData(){
    let url=`/data/carouselImg.json`;
    fetch(url).then(
      res => res.json()
    ).then(
      data => this.setState({cashbackCarousel:data.cashbackCarousel})
    );
    
  };
}

export default Cashback;