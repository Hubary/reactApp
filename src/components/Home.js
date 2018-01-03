import React from "react";
import Banner from "./Banner";
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
        <Banner/>
        <HomeContent/>
      </div>
    );
  }
}

export default Home;