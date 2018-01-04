import React from 'react';
import '../assets/css/loading.css'
export default class Loading extends React.Component {
  render() {
    return (
      <main>
        <div className="loader">
          <div className="loader-inner ball-triangle-path">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>
    );
  }
}