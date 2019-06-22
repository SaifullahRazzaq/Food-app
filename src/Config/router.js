import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Header from '../component/header';
import Dashboard from '../component/Dashboard'
import Admin from '../component/admin';
import User from '../component/user';
import RestaurentLogin from '../component/RestaurentLogin'
import UserLogin from '../component/UserLogin';
import AddFooditem from '../component/AddFoooditem'
// import MyRequest from '../component/MyRequest'


class App extends Component {
  render() {
    return (
   

    <Router>
   <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
<a class="navbar-brand" href="#">Food Delievery App</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavbar">
  <ul class="navbar-nav text-right">
    <li class="nav-item">
      {/* <li><Link to={'/'} className="nav-link">Header </Link></li> */}
    </li>
    <li class="nav-item">
  <li><Link to={'/Admin'} className="nav-link">Admin Registration</Link></li>
    </li>
    <li class="nav-item">
  <li><Link to={'/User'} className="nav-link">User Registration</Link></li>
    </li>    
  
   

  </ul>
</div>  
</nav>
  
        <Switch>
              {/* <Route exact path='/' component={Header} /> */}
              <Route path='/Admin' component={Admin} />
              <Route path='/User' component={User} />
              <Route path="/RestaurentLogin" component={RestaurentLogin}/>
              <Route path="/UserLogin" component={UserLogin}/>
              <Route path="/AddFooditem" component={AddFooditem}/>
              <Route path='/Dashboard' component={Dashboard} />
              {/* <Route path='/MyRequest' component={MyRequest}/> */}
          
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;