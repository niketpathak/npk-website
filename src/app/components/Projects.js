import React, { Component } from 'react';
import ProjectItem from './projectItem.js';

class Projects extends Component {

deleteProject(id) {
  this.props.onDelete(id);
}

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // console.log(project);
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      })
    }
    return (
      <div className="projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;
