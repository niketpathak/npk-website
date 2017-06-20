import React, { Component, PropTypes } from 'react';

class AddProject extends Component {

constructor() {
  super();
  this.state = {
    newProject: {}
  }
}

  static defaultProps = {
    categories: ['Web Design','Mob Design', 'Mob app']
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.title.value === '') {
      console.debug('empty submitted', this);
    } else {
      this.setState({
        newProject: {
          id: Math.floor((Math.random() * 100) + 1),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function() {
        console.debug('callback', this.state);
        this.props.addProject(this.state.newProject);
      })
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div className="addProject">
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br/>
            <select type="text" ref="category" >
                {categoryOptions}
            </select>
          </div>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
