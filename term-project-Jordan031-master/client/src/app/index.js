import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { profile, Form, List, Home} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
return (
<Router>
<NavBar />
<Switch>
<Route path="/" exact component={Home} />
<Route path="/home" exact component={Home} />
<Route path="/movies/list" exact component={List} />
<Route path="/movies/admin" exact component={Form} />
<Route path="/movies/profile" exact component={profile} />
</Switch>
</Router>
)
} 

export default App;
