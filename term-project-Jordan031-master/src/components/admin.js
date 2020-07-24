import React, { Component } from 'react';
import ReactDOM from 'react-dom';
  
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', bio: ''};
}

handleInputChange(event) {
this.setState({ firstName: event.target.value,
lastName: event.target.value,
bio: event.target.value});
}

handleSubmit(event) {
    event.preventDefault();
alert('You are submitting ' + this.state.firstName + ' ' + this.state.lastName);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          First Name:
          <input name="firstName" type="text" class="form-control" onChange={this.handleInputChange} />
        </label>

<label>
          Last Name:
          <input name="lastName" type="text" class="form-control" onChange={this.handleInputChange} />
        </label>

<label>
          Bio:
          <input name="bio" type="text" class="form-control" onChange={this.handleInputChange} />
        </label>

<label>
File:
<input type="file" />
</label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

