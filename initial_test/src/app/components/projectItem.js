import React, { Component } from 'react';

class ProjectItem extends Component {

deleteProject(id) {
  console.log('delete clicked', id);
  this.props.onDelete(id);
}

  render() {
    // console.log(this.props);
    return (
      <li className="projectItem">
        <strong>{this.props.project.title} </strong> - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)} >Remove</a>
      </li>
    );
  }
}

export default ProjectItem;
