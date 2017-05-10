import React, { Component } from 'react';
import Projects from './components/Projects.js';
import AddProject from './components/addProject.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    //ajax to be called here
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mob Design'
      },
      {
        title: 'Ecommerce',
        category: 'Mob app'
      }
    ]});
  }

  render() {
    return (
      <div className="container">
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
