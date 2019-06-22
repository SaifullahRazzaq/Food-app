import React, { Component } from 'react';
import admin from '../Images/admin.png';
import firebase from '../Config/firebase';
import UserLogin from '../component/UserLogin'
import { update_user } from '../Store/action';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class user extends Component {
  constructor()
  {
      super();
      this.state=
      {
        Fullname:'',
        email:'',
         country:'',
         city:'',
         Password:'',
  
      }
      this.handleSubmit=this.handleSubmit.bind(this)
      this.handleChange=this.handleChange.bind(this)

  }
  handleChange(e)
  {
      this.setState({[e.target.name]:e.target.value})
     
     
      

  }

    handleSubmit(event) {
        event.preventDefault();
    let Fullname= this.state.Fullname
    let email = this.state.email;
    console.log(email);
    let country= this.state.country;
    let pass=this.state.Password;
    let city= this.state.city;
  
    let db=firebase.firestore();
      firebase.auth().createUserWithEmailAndPassword(email, pass).then((user)=>{
    console.log(user);
    let userinfo=
    {
        Fullname,
        email,
        country,
        pass,
        city
    }
    db.collection("Userinfo").add({
        Fullname,
        email,
        country,
        pass,
        city
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .then(()=>{
     this.props.history.push('/UserLogin');
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    // [END set_document]
});
    }
 
  render() {
      
   return(
  <div>
<div class="container">
<h1 class="form-heading">login Form</h1>
<div class="login-form">
<div class="main-div">
    <div class="panel">
    <img src={admin} width='100px' height='100px'/>
   <h2>User Login</h2>
   <p>Please enter your email and password</p>
   </div>
    <form onSubmit={this.handleSubmit} >
        <div class="form-group">
            <input type="text" class="form-control" onChange={this.handleChange} name="Fullname" placeholder="Enter a full name" required/>
            </div>   
            
            <div class="form-group">
    
            <input type="email" class="form-control"  onChange={this.handleChange}  name="email" placeholder="Email Address"  required/>
            </div>
            
            <div class="form-group">
            <select input type="text" class="form-control"   onChange={this.handleChange}  name="country"  required>
            <option value="Select a Country"></option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Austrlia">Australia</option>
            <option value="Newzelend">Newzelend</option>
            <option value="South Africa">South Africa</option>
            <option value="England">England</option>
            <option value="Afghanistan">Aghanistan</option>
</select>   
            </div>
            <div class="form-group">
            
            <select input type="text" class="form-control" onChange={this.handleChange}  name="city"  required>
            <option value="Select a Country"></option>
            <option value="Karachi">Karachi</option>
            <option value="Dhakha">Dhakha</option>
            <option value="Sydney">Sydney</option>
            <option value="Auckland">Auckland</option>
            <option value="Johansburg">Johansburg</option>
            <option value="Manchester">Manchester</option>
            <option value="Kabul">Kabul</option>
</select>   
        </div>

        <div class="form-group">

            <input type="password" class="form-control"onChange={this.handleChange} name="Password" placeholder="Password"  required/>

        </div>
        <div class="forgot">
        <a href="reset.html">Forgot password?</a>
</div>
        <button type="submit"   class="btn btn-primary">Submit</button>

    </form>
    </div>
</div>
</div>
</div>

   )
 
  }
}
const mapStateToProps = state => {
    console.log(user)
    return {
        user: state.userReducer.user,
      
    }
}

const mapDispatchToProps = dispatch => {
    return {
        store_user: (user) => dispatch(update_user(user)),
        
}

}

export default connect(mapStateToProps, mapDispatchToProps)(user);