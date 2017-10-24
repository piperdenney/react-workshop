import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentPage: 'contact',
    }
  }

  onClick(e) {
    this.setState({currentPage: e.target.id});
  }

  render() {
    let currentPage = this.state.currentPage
    return (
      <div className="App">

        <Navbar />

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard name={name} />
          </div>
          <div className='col-md-8'>
            <Content currentPage={currentPage}/>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
