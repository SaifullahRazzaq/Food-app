import React,{Component} from 'react';
import firebase from '../Config/firebase';
class MyRequest extends Component{
    constructor()
    {
        super();
        this.state=
        {
            Deliever:false,
            InProgress:false,
            Pending:false,
            list:[]


        }
        
    }
    
    componentDidMount()
    {

        const db = firebase.firestore();
        var turmarkers =[];
       
       db.collection("OrderRequest").get().then((querySnapshot)=>{
         querySnapshot.forEach((doc) => {        
           turmarkers.push(doc.data())
           console.log(turmarkers)
       
         })
         this.setState({
           list:turmarkers
          });
        }); 
       }
 
    render()
    {
        const {list}=this.state;
        return(
            <div className="Req">
                <h2>Order Request</h2>
                <br/><br/>
             
{list.map((item,i)=>{
  console.log(item.status.InProgress)
    return    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Status</th>
        <th scopt="col">Rating</th>
            
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{item.value}</td>
        <td>{item.status.InProgress}</td>
        <td>  <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
</td>
       
        
      </tr>

 
    </tbody>
  </table>
  
})}
            </div>
        )
    }
}
export default MyRequest;