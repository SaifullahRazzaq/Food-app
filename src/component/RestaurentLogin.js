import React, { Component } from 'react';
import firebase from '../Config/firebase';
import AddFooditem from './AddFoooditem';
import { Button, Col, FormGroup, Input, FormText } from 'reactstrap';
class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
  
        this.state = {
            email:'',
            password:'',
        }
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    handleLogin(){

        if(this.state.email === "" || this.state.password === ''){
            return
        }
        let { email, password} = this.state;       
        console.log(email)
        console.log(password)
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            console.log("Login hugaya")
        }).then(()=>{

            this.props.history.push("/AddFooditem");
        })
        
        
        
        
        
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        
    }


  render() {
    return (
        <div>
        
        <Col sm={{size:'10', offset:'1'}} md={{size:'6', offset:'3'}}>
            <div style={{margin:'10px auto', width:'80%'}}>
                <FormGroup>
                    <h1 style={{fontWeight:'300', marginBottom:'30px', marginTop:'20px'}}>Login to continue</h1>
                    <Input onChange={this.handleChange} value = {this.state.email} type="email" name="email" id="email" placeholder="Email" required/>
                </FormGroup>
                <FormGroup>
                    <Input onChange={this.handleChange} value = {this.state.password} type="password" name="password" id="password" placeholder="Password" required />
                </FormGroup>
        
                <FormGroup className="text-right">
                    <Button onClick={this.handleLogin}>Login</Button>
                </FormGroup>
                <FormGroup>
                    <FormText inline>
                        Don't have an account  
                    </FormText>
                    <Button color='link' onClick={()=> this.props.history.push('/')}>Register Now</Button>
            </FormGroup>
            </div>
        </Col>
      </div>
    );
  }
}
export default Login;