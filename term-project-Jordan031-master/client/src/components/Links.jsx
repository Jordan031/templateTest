import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/home" className="navbar-brand">
                    Home
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                List
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/admin" className="nav-link">
                                Admin
                            </Link>
                        </Item>
<Item>
<Link to="/movies/profile" className="nav-link">
Profile
</Link>
</Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
