import React from "react";
import Carousel from "./Carousel";
import HomeContent from "./HomeContent";
import Header from './Header';
// import {connect} from "react-redux";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      homeCarousel:[
        "/src/assets/images/4.jpg",
        "/src/assets/images/5.jpg",
        "/src/assets/images/6.jpg",
        "/src/assets/images/7.jpg",
        "/src/assets/images/banner640x386.jpg"
      ]
    }

  }
  render() {

    return (
      <div className="home">
        <Header />
        <Carousel carousel= {this.state.homeCarousel}/>
        <HomeContent />
      </div>
    );
  };
  componentDidMount() {
    this
      .props
      .router
      .replace('/home');
   
  }
}

export default Home;