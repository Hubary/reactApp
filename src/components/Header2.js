import React from "react";
import {hashHistory} from 'react-router';
class Header2 extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <header className="header mui-bar mui-bar-nav"  style={{background:"#f8f8f8"}} >
        <a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onClick={()=>{hashHistory.go(-1)}}></a>
        <h1 style={{lineHeight:'50px', color:'#000',}} className="mui-title">{this.props.title}</h1>
      </header>
    )
  }
};
export default Header2;