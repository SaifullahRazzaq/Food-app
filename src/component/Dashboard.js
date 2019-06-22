import React,{Component} from 'react';
import '../App.css'
import firebase from '../Config/firebase'
import Logo from '../Images/bar b q.jpg';
import MyRequest from '../component/MyRequest'
import UserLogin from '../component/UserLogin';
import Google from './Google';
class Dashboard extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            mapdata:[],
            result:[],
            text:''

        }
this.search=this.search.bind(this);
this.request=this.request.bind(this);
this.logout=this.logout.bind(this);
    }
  

        componentDidMount()
        {

            const db = firebase.firestore();
            var turmarkers =[];
           
           db.collection("Product").get().then((querySnapshot)=>{
             querySnapshot.forEach((doc) => {        
               turmarkers.push(doc.data())
               console.log(turmarkers)
           
             })
             this.setState({
               mapdata:turmarkers
              });
            }); 
           }


           search(e)
           {
               const {mapdata}=this.state;
               let text=e.target.value
               console.log(text)
               console.log(mapdata)
              const result=mapdata.filter((elem)=>{
               return  elem.ProductName.toLowerCase().substr(0,1).match(text.toLowerCase())
                   
           })
           this.setState({result:result,text})
           console.log(this.state.result)
           
           
           }
           request(e)
           {
               let db=firebase.firestore();
               let value=e.target.value;
               let status={
                   pending:false,
                   Deliever:false,
                   InProgress:false,

                
               }
             
            db.collection("OrderRequest").add({
               value,
               status
            }).then(()=>{
                console.log("hugaya")
            })
            .catch(()=>{
                console.log("nh hua")
            })



               
           }
           logout()
           {
               this.props.history.push('./UserLogin')
           }
  

    render(){
        const {mapdata,text,result}=this.state;
        const arr=text.length?result:mapdata
        return(
            <div className="dash">
           <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Dashboard</a>
    </li>
    <li class="nav-item text-right">
    {/* <button onClick={this.props.history.push('/MyRequest')} class="btn btn-default text-right">My Request</button> */}
  
    </li>
   
   <button onClick={this.logout} class="btn btn-default text-right">Logut</button>
  </ul>
</nav>
<br/><br/>
<div class="container">
	<div class="row">
        <div class="col-md-12">
            <div id="custom-search-input">
                <div class="input-group col-md-12">
                    <input type="text" class="form-control input-lg" onChange={this.search} placeholder="Search Here" />
                    <span class="input-group-btn">
                        <button class="btn btn-info btn-sm" onChange={this.search}>
                            <i class="glyphicon glyphicon-search">Search</i>
                           </button>
                    </span>
                </div>
            </div>
        </div>
	</div>

</div>
<br/>
{arr.map((item,i)=>{
    return <div class="card">
    <p><img src={Logo} width="310"/>
    <p><span>Product Name:{item.ProductName}</span></p>
    <p><span>Product Price:{item.ProductPrice}</span></p>
    <p><span>Restaurent Name:{item.RestaurentName}</span></p>
   <p> <button className="btn btn-default" value={item.ProductName} onClick={this.request}>Order Now</button>
</p>
    </p>
   
    </div>

    
})}
<Google/>
</div>

                
        
        )
    }
} 
export default Dashboard;