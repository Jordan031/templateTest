import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './index.css';
import DataTable from './data-table';

const bodyParser = require('body-parser')
const axios = require('axios')


export default class Profile extends Component {

 constructor(props){
    super(props);
    this.state = {
      success : false,
      url : "",
firstName: '',
lastName: '',
bio: '',
pic: '',
posts: []
    }
  }

componentDidMount = () => {
this.getBlogPost();
};

getBlogPost = () => {
axios.get('http://localhost:9000/api')
.then((response) => {
const data = response.data;
this.setState({ posts: data });
console.log('Data entered');
})
.catch(() => {
console.log('Data error');
});
}

handleChange = (ev) => {
    this.setState({success: false, url : ""});
}

submit = (event) => {
event.preventDefault();
const payload = {
firstName: this.state.firstName,
lastName: this.state.lastName,
bio: this.state.bio,
pic: this.state.url
};
axios({
url: 'http://localhost:9000/api/update2',
method: 'POST',
data: payload
})
.then(() => {
console.log('Data sent');
})
.catch(() => {
console.log('Internal error');
});;
};


handleChange1 = ({target}) => {
    const { name, value } = target;
this.setState({[name]: value});
};



  // Perform the upload
handleUpload = (ev) => {

    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");
    axios.post("http://localhost:9000/sign_s3",{
      fileName : fileName,
      fileType : fileType
    })
.then(response => {
      var returnData = response.data.data.returnData;
      var signedRequest = returnData.signedRequest;
      var url = returnData.url;
      this.setState({url: url})
      console.log("Recieved a signed request " + signedRequest);

     // Put the fileType in the headers for the upload
      var options = {
        headers: {
          'Content-Type': fileType
        }
      };
      axios.put(signedRequest,file,options)
      .then(result => {
        console.log("Response from s3")
        this.setState({success: true});
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
    })
    .catch(error => {
      alert(JSON.stringify(error));
    })
  }

displayBlogPost = (posts) => {
if (!posts.length) return null;
return posts.map((post, index) => (

<html lang="en">
<head>
<style>

</style>
</head>
<body>
    
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>



<div className="container">
 <div class="card mb-3 mt-3" className="ProfileCard">
  <div class="card-header">
  User
  </div>  
 <div class="row no-gutters">
  <div class="col-md-4">
  <img src={this.state.url} class="card-img" alt="..."/>
  </div>
 
  <div class="col-md-8">
   <div class="card-body">
  <h4 class="card-title">{post.firstName} {post.lastName}</h4>
  <p>{post.bio} </p>
  <p class="card-text"><small class="text-muted">Last updated ? mins ago</small></p>
   </div>

  <ul class="list-group list-group-flush">
   <form id="my-form" action="/" method="post">
   <div className="UpdatePhotoLabel">
   <li class="list-group list-group-flush"> Update Info </li>
   </div>

  <li class="list-group-item">
  <div class="form-row">
   <div class="col-md-6 mb-3">
    <label for="validationDefault01">First name</label>
    <input id="firstName" className="form-control" name="firstName" type="text" onChange={this.handleChange1} value={this.state.firstName} required/>
   </div>
   <div class="col-md-6 mb-3">
    <label for="validationDefault02">Last name</label>
    <input id="lastName" className="form-control" name="lastName" type="text" onChange={this.handleChange1} value={this.state.lastName} required/>
   </div>

    <div class="mb-3">
    <label for="validationTextarea">Bio</label>
    <textarea id="bio" className="form-control" name="bio" type="text" onChange={this.handleChange1} value={this.state.bio} required></textarea>
     <div class="invalid-feedback">
      Please enter a message in the textarea.
     </div>
    </div>

   </div>

   <div class="row">
    <div class="media mt-3" className="FileHolder">
     <div class="media-body">
      <div class="row">

       <div class="column">
        <p>
        <div className="UserUpload">
         <div className="App">
          <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
          <br/>
         </div> 
        </div>
       </p>
       </div>
  
       <div class="column">
        <p>
        <div className="S3Button">
         <button type="button" class="btn btn-secondary btn-sm" onClick={this.handleUpload}>UPLOAD</button>
         </div>
       </p>
       </div>
        
      </div>
     </div>
    </div>
   </div>  
  </li>

  <li class="list-group-item">
  <div class="media mt-3" className="UserHolder">
   <button type="button" class="btn btn-primary btn-sm" onClick={this.submit}>UPDATE</button>          
  </div> 
</li>
</form>
  </ul>
  </div>
 </div>  
</div>
</div>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  
</body>
</html>
));
};


render() {
const SuccessMessage = () => (
      <div style={{padding:50}}>
        <h5 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h5>
<br/>
      </div>
    )

return (
<div>
<div className="container">
{this.displayBlogPost(this.state.posts)}
</div>
</div>
)}
}

