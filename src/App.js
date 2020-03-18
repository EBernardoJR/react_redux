import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Video from './components/Video';
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {

  render(){
   //todos que estão dentro do provider vai acessar o state 
  return (
    <div className="App">
      <Provider store={store}>
      <Video />
      <SideBar />
      </Provider>
    </div>
  );
  }
}

export default App;
