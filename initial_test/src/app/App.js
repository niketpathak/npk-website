import React, { Component } from 'react';
import Projects from './components/Projects.js';
import AddProject from './components/addProject.js';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodoItems() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {
            console.log('callback xhr', this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('xhr error', err);
      }
    });
  }


  componentWillMount() {
    //ajax to be called here
    this.setState({projects: [
      {
        id: 1,
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: 2,
        title: 'Social App',
        category: 'Mob Design'
      },
      {
        id: 3,
        title: 'Ecommerce',
        category: 'Mob app'
      }
    ]});
    this.getTodoItems();
  }

  componentDidMount() {
    this.getTodoItems();
  }

  handleAddProject(project) {
    // console.log('project', project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="container">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
