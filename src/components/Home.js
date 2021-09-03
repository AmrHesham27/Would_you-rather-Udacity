import React, { Fragment } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from './NavBar';
import Questions from './Questions';

class Home extends Component {
    render(){
    return (
        <Fragment>
            <NavBar/>
            <Questions />
        </Fragment>
    )
    }
}
  
export default connect()(Home)