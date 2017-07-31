import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';
import {Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App container-fluid">
          <NavBar />
          <div className="container play-lists">
            <PlayListForm />
            <PlayList />
          </div>
        </div>
      </Switch>
    );
  }
}

export default App;
