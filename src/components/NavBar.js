import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-dark">
                <Link className="nav-link text-info" to="/Home" > Home </Link>
                <Link className="nav-link text-info" to="/add" > Add Question </Link>
                <Link className="nav-link text-info" to="/leaderBoard"> Leader Board </Link>
                <Link className="nav-link text-info" to='/logout' > Logout </Link>
            </nav>
        )           
    }
} 

export default NavBar