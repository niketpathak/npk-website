import React, { Component, PropTypes } from 'react';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design','Mob Design', 'Mob app']
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div className="addProject">
        <h3>Add Project</h3>
        <form>
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
        </form>
      </div>
    );
  }
}

export default AddProject;
