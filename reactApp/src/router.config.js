import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  browserHistory,
  IndexRoute,
  Redirect
} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import My from './components/My';
import Cashback from './components/Cashback';
import Shopping from './components/Shopping';
import Reg from './components/Reg';
import Login from './components/Login';
// import Login from './components/Login'; import Reg from './components/Reg';
import Error from './components/Error';
//路由配置
const RouterConfig = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="cashback" component={Cashback}/>
      <Route path="Shopping" component={Shopping}/>
      <Route path="my" component={My}/>
      <Route path="reg" component={Reg}/>
      <Route path="login" component={Login}/>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
);

export default RouterConfig;