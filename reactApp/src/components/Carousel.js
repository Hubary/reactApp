import React from "react";
import mui from '../assets/js/mui.min.js'
class Carousel extends React.Component {
  componentDidMount() {
    TouchSlide({
      slideCell: "#index-banner", 
      titCell: ".banner-tit li", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
      mainCell: ".banner-pics-list",
      effect: "left",
      autoPlay: true, //自动播放
      //autoPage:true, //自动分页
    });
    mui.init({
      swipeBack: true, //启用右滑关闭功能
    });
  }
  render() {
    return (
      <div className="banner" id="index-banner">
        <div className="banner-pics">
          <ul className="banner-pics-list OnSale-banner">
            {/* mongodb数据循环 */}
            <li>
              <a href="#">
                <img src="/src/assets/images/banner640x386.jpg" alt=""/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/images/4.jpg" alt=""/>
              </a>
            </li>       
          </ul>
        </div>
        <ul className="banner-tit">
          <li className="on"></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
export default Carousel;