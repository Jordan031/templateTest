import React, { Component } from 'react'
import axios from 'axios'

class List extends React.Component {

state = {
firstName: '',
lastName: '',
bio: '',
pic: '',
posts: []
};

componentDidMount = () => {
this.getBlogPost();
};

getBlogPost = () => {
axios.get('http://localhost:9000/api')
.then((response) => {
const data = response.data;
this.setState({ posts: data});
console.log('Data entered');
})
.catch(() => {
console.log('Data error');
});
}

displayBlogPost = (posts) => {
if (!posts.length) return null;
return posts.map((post, index) => (

<html lang="en">
<body>
  
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>

<div class="my-3">
 <li class="media">
    <img src={post.pic} class="rounded" alt="Image"/>
<div class="mx-2">    
<div class="media-body">
      <h5 class="mt-0 mb-1">{post.firstName} {post.lastName}</h5>
      {post.bio}
    </div>
</div>
  </li>
</div>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>
));
};


render () {
return(
<div>

<div className="container">
<div className="blog-post">
<ul class="list-unstyled">
{this.displayBlogPost(this.state.posts)}
</ul>
</div>
</div>
</div>
)}
}

export default List;
