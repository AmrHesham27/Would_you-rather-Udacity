import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser';


class Logout extends Component {
    componentDidMount(){
        this.props.dispatch(removeAuthedUser())
    }
    render(){
        return(
        <Redirect to='/' />
        )           
    }
}

export default connect()(Logout)