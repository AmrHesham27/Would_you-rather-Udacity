import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component{
    render(){
        return ( 
        <div>
            <p>Error 404 , page is not found</p>
            <Link to='/'>Go Home</Link>
        </div>
        )
    }
}

export default NotFound