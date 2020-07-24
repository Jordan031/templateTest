import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { MyFavNews } from './MyFavNews';

import './index.css'

class Home extends React.Component {


  render() {
    return (
<html>
<body>
<div class="header">
<h1>Posts</h1>
</div>
<div className="container">
<div class="row">
<div class="column side">
<h2> Side</h2>
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action">
    Cras justo odio   
<span class="badge badge-primary badge-pill">14</span> 
 </button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in
<span class="badge badge-primary badge-pill">5</span>
</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus
<span class="badge badge-primary badge-pill">5</span>
</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac
<span class="badge badge-primary badge-pill">5</span>
</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros
<span class="badge badge-primary badge-pill">5</span>
</button>
</div>
</div>
<div class="column middle">
    <h2>Column Post</h2>
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><MyFavNews/></div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>
</div>
  <div class="column side">
    <h2>Side</h2>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

</div>
</div>
</div>
</body>
</html>
    );
  };
}

export default Home
