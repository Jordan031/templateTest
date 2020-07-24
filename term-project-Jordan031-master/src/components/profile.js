import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      
	<div class="card mb-3">
  <img src="./client/src/statics/favicon.png" class="card-img-top" alt="Profile Picture"/>
  <div class="card-body">
    <h5 class="card-title">Name</h5>
    <p class="card-text">Bio</p>
    <p class="card-text"><small class="text-muted">...</small></p>
  </div>
</div>
    );
  }
}
