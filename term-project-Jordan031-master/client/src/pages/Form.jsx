import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class Form extends React.Component {
  state = {
firstName: '',
lastName: '',
bio: '',
posts: []
};

handleChange = ({target}) => {
    const { name, value } = target;
this.setState({[name]: value});
};

submit = (event) => {
event.preventDefault();
const payload = {
firstName: this.state.firstName,
lastName: this.state.lastName,
bio: this.state.bio,
pic: this.state.pic
};
axios({
url: 'http://localhost:9000/api/save',
method: 'POST',
data: payload
})
.then(() => {
console.log('Data sent');
this.resetUserInputs();
this.getBlogPost();
})
.catch(() => {
console.log('Internal error');
this.resetUserInputs();
});;
};

resetUserInputs = () => {
this.setState({
firstName: '',
lastName: '',
bio: ''
});
}


  render() {
    return (
<div className="SignIn">
<div className="container">
<div class="card">
<div class="card-body">
<h4 class="card-title">Sign In</h4>
<div class="card-body">
<div className="row"><div className="col">
    <form id="my-form" action="http://localhost:3000/movies/profile" onSubmit={this.submit}>

<div className="FormLabelContent">
<div className="form-input">
        <h6 class="card-subtitle mb-2 text-muted">Enter your first name</h6>
        <input id="firstName" className="form-control " name="firstName" type="text" onChange={this.handleChange} value={this.state.firstName} />
</div>
</div>
<div className="FormLabelContent">
<div className="form-input">
        <h6 class="card-subtitle mb-2 text-muted">Enter your last name</h6>
        <input id="lastName" className="form-control" name="lastName" type="text" onChange={this.handleChange} value={this.state.lastName} />
</div>
</div>
<div className="FormLabelContent">
<div className="form-input">
        <h6 class="card-subtitle mb-2 text-muted">Enter your bio</h6>
        <input id="bio" className="form-control" name="bio" type="text" onChange={this.handleChange} value={this.state.bio} />
</div>
</div>
<div className="SignIn">
<button class="btn btn-primary btn-sm">Submit</button> 
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    );
  };
}

export default Form
