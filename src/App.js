import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Text from './components/Text';
import Goals from './components/Goals';
import Values from './components/Values';
import './App.css';
import Table from './components/Table';
import Photo from './components/Photo';
import Forms from './components/Forms';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={ size: window.innerWidth < 992 ? true : false}
  }

  render(){
    return (
      <div className="App">
        <Header device={this.state.size} />
        <HomePage device={this.state.size} />
        <Text device={this.state.size} />
        <Goals device={this.state.size} />
        <Values device={this.state.size} />
        <Table device={this.state.size} />
        <Photo device={this.state.size} />
        <Forms device={this.state.size}/>
        <Footer device={this.state.size}/>
      </div>
    );
  }
}

export default App;
