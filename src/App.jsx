import React, { Component } from 'react';
import './App.css';

import AddProject from "./components/AddProject";
import ProjectsList from "./containers/ProjectsList";

import { Route } from "react-router-dom";

function MainComponent() {
  return (
    <div className="App">
      <AddProject />

      <ProjectsList />
    </div>
  );
}

function SomeOtherApp() {
  return <div>Other page</div>
}

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/main" component={MainComponent} />
        <Route path="/other" component={SomeOtherApp} />
      </div>
    );
  }
}

export default App;
