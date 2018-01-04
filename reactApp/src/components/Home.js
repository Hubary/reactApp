import React from "react";
import Carousel from "./Carousel";
import HomeContent from "./HomeContent";
import Header from './Header';
// import {connect} from "react-redux";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: []
    }
  }
  render() {
    return (
      <div className="home">
        <Header/>
        <Carousel/>
        <HomeContent/>
      </div>
    );
  }
}

export default Home;