import React from "react";
import mui from '../assets/js/mui.min.js'
class Carousel extends React.Component {
  constructor(props){
    super(props)
    this.state={
      carousel:undefined
    }
  }
  componentDidMount(){
    let carousel = [...this.props.carousel];
    if(this.props.carousel!=undefined){
      this.setState={
          carousel
      }
    }
  }
  componentDidUpdate() {
    TouchSlide({
      slideCell: "#index-banner", titCell: ".banner-tit li", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
      mainCell: ".banner-pics-list",
      effect: "left",
      autoPlay: true, //自动播放
      //autoPage:true, //自动分页
    });
    // mui.init({   swipeBack: true, //启用右滑关闭功能 });
  }
  render(){
      let carousel = this.state.carousel;
      console.log(carousel);
      return (
        <div className="banner" id="index-banner">
          <div className="banner-pics">
            <ul className="banner-pics-list OnSale-banner">
              {
                carousel.map((item)=>{
                  return(
                    <li key={item}><a href="#"><img src={item}/></a></li>
                  )
                })
              }
            </ul>
          </div>
          <ul className="banner-tit">
            <li className="on"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div>
      )
    }
  };
  
}
export default Carousel;