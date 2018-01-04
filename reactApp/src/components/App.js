import React from "react";
import '../assets/css/loading.css';
import Footer from './Footer';
import Loading from './Loading';

class App extends React.Component{
  render(){
    return (
      <div className="app">
       
        {this.props.children}
        <Footer/>
        {/* <Loading/> */}
      </div>
    );
  }
};
export default App;