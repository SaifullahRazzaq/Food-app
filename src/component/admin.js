import React, { Component } from 'react';
import admin from '../Images/admin.png';
import RestaurentLogin from '../component/RestaurentLogin'
import firebase from '../Config/firebase';
import loader from '../Images/loader.gif'
class Admin extends Component {
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
         isloader:'',
         Certificate:''
  
      }
      this.handleSubmit=this.handleSubmit.bind(this)
      this.handleChange=this.handleChange.bind(this)
      this.EmailVerify=this.EmailVerify.bind(this);

  }
  handleChange(e)
  {
      this.setState({[e.target.name]:e.target.value})
     
     
      

  }

    handleSubmit(event) {
        event.preventDefault();
    let Fullname= this.state.Fullname
    let email = this.state.email;
    let country= this.state.country;
    let pass=this.state.Password;
    let city= this.state.city;
   let Certificate=this.state.Certificate
    let db=firebase.firestore();
      firebase.auth().createUserWithEmailAndPassword(email, pass).then((user)=>{
    console.log(user);
    let adminfo=
    {
        Fullname,
        email,
        country,
        pass,
        city
    }
    db.collection("Restaurentinfo").add({
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
   this.props.history.push('/RestaurentLogin.js')

    })      
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    // [END set_document]
});
    }
    EmailVerify()
    {
        let user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("successfully sent email");
}).catch(function(error) {
  // An error happened.
  console.log("error");
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
   <h2>Admin Login</h2>
   <p>Please enter your email and password</p>
   </div>
    <form onSubmit={this.handleSubmit} >
        <div class="form-group">
            <input type="text" class="form-control" onChange={this.handleChange} name="Fullname" placeholder="Enter a full name" required/>
            </div>   
            
            <div class="form-group">
    
            <input type="text" class="form-control"  onChange={this.handleChange}  name="email" placeholder="Email Address"  required/>
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

        <div class="form-group">

<input type="file" class="form-control"onChange={this.handleChange} name="Certificate" placeholder="Upload a Certificate"  required/>

</div>

        <div class="forgot">
        <a href="reset.html">Forgot password?</a>
</div>
        <button type="submit"   class="btn btn-primary">Submit</button>
        <button onClick={this.EmailVerify}>sendEmailVerification </button>

    </form>
    </div>
</div>
</div>

</div>

   )
 
  }
}

export default Admin;
