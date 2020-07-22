import React, { Component } from 'react';

class NewTodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      task: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.task);
    e.target.reset();
    this.props.history.push("/");
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Add new task</label>
          <input id="task" name="task" type="text" onChange={this.handleChange}></input>
          <button>Submit!</button>
        </form>
      </div>
    )
  }
  
}

export default NewTodoForm;