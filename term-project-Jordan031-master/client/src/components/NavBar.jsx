import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Links from './Links'


class NavBar extends Component {
    render() {
        return (
<React.Fragment>

           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/home" className="navbar-brand">
Home
</Link>
      </li>
      <li class="nav-item">
        <Link to="/movies/list" className="nav-link">
                                List
</Link>
      </li>
      <li class="nav-item">
        <Link to="/movies/admin" className="nav-link">
                                Admin
</Link>
      </li>
<li class="nav-item">
<Link to="/movies/profile" className="nav-link">
                                Profile
</Link>
</li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>
</nav>
</React.Fragment>
        )
    }
}

export default NavBar
