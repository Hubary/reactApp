import React from "react";
import Carousel from "./Carousel";
import HomeContent from "./HomeContent";
import Header from './Header';
// import {connect} from "react-redux";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      homeCarousel:[]
    }
  }
  render() { 
    let homeCarousel = this.state.homeCarousel;
    return (
      <div className="home">
        <Header/>
        <Carousel carousel={homeCarousel}/>
        <HomeContent/>
      </div>
    );
  }; 
  componentDidMount(){
    this.props.router.replace('/home');
    this.getData();
  }
  getData(){
    let url=`/data/carouselImg.json`;
    fetch(url).then(
      res => res.json()
    ).then(
      data => this.setState({homeCarousel:data.homeCarousel})
    );
  };
}

export default Home;