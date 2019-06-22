import React,{Component} from 'react';
class chatbot extends Component{
constructor()
{ super();

    const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];
}
render()
{
return(
    <div>
  
  </div>
)
}
  
}
export default chatbot;
