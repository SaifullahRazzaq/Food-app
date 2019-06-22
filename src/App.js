import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store, persistor } from './Store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './Config/router';
import Admin from './component/admin'
// import Header from './component/header';
// import Dashboard from './component/Dashboard'
// import AddItem from './component/AddFoooditem'
// import MyRequest from  './component/MyRequest';

class App extends React.Component {
  constructor(){

    super();
    this.state = {
    }
    
  }

 
  render() {
    return (
      
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
          
          <Navigation/>
     {/* <Dashboard/> */}
     {/* <AddItem/> */}
     {/* {< MyRequest/>} */}
      </div>
        </PersistGate>
      </Provider>
   
  );
  }
}
export default App;