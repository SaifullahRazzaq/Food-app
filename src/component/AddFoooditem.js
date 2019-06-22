import React, { Component } from 'react';
import firebase from '../Config/firebase';
import RestaurentLogin from '../component/RestaurentLogin';
import "../App.css";
class AddItem extends Component {
  constructor()
  {
      super();
      this.state=
      {
          ProductName:"",
          ProductPrice:"",
          ProductImage:"",
          RestaurentName:"",
        
      }
      this.handleSubmit=this.handleSubmit.bind(this)
      this.handleChange=this.handleChange.bind(this)
      this.logout=this.logout.bind(this);

  }
  handleChange(e)
  {
      this.setState({[e.target.name]:e.target.value})
     
     
      

  }

    handleSubmit(event) 
    {
        event.preventDefault();
        let ProductName=this.state.ProductName
        console.log(ProductName)
        let ProductPrice=this.state.ProductPrice;
        console.log(ProductPrice)
        let ProductImage=this.state.ProductImage;
        console.log(ProductImage)
        let RestaurentName=this.state.RestaurentName;
        console.log(RestaurentName)
        
    let db=firebase.firestore();
 let Productinfo=
    {
        ProductName,
        ProductPrice,
        ProductImage,
        RestaurentName
        
    }
    db.collection("Product").add({
        ProductName,
        ProductPrice,
        ProductImage,
        RestaurentName,
    })

    .then(function() {
        console.log("Succesfully");
    })
    .then(()=>{
        // this.props.history.push('/Login');
       })
       
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    // [END set_document]
    }
   logout()
   {
       this.props.history.push('/RestaurentLogin')
   }
 
  render() {
      
   return(

  <div class="Add">
  <h1>Add Item
    <button className="btn btn-default text-right" onClick={this.logout}>Signout</button>  
  </h1>
  <br/><br/>
  <center>
      <form class="addform" onSubmit={this.handleSubmit}>
  <div class="col-md-12">
  <label>Product Name
<input type="text" class="form-control" name="ProductName" onChange={this.handleChange}/>
  </label>
  </div>
<br/>

 <div class="col-md-12">
  <label>Product Price
  <input type="text" class="form-control" name="ProductPrice" onChange={this.handleChange}/>
  </label>
  </div>
  <br/>



   <div class="col-md-12">
  <label>Product Image
<input type="file" class="form-control" name="ProductImage" onChange={this.handleChange}/>
  </label>
  </div>
  <br/>
  
  <div class="col-md-12">
  <label>Restaurent Name
<input type="text" class="form-control" name="RestaurentName" onChange={this.handleChange}/>
  </label>
  </div>
  <br/>


<button class="btn btn-success">Add Product</button>
</form>
</center>

</div>
   )
 
  }
}

export default AddItem;
