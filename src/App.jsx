import React, { Component } from 'react';
import './App.css';

import AddProject from "./components/AddProject";
import ProjectsList from "./containers/ProjectsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddProject />

        <ProjectsList />
      </div>
    );
  }
}

export default App;
