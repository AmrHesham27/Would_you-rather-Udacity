import React, { Fragment } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import User from './User'
import NavBar from './NavBar';

class Home extends Component {

    render(){
    return (
        <Fragment>
            <NavBar/>
            <div className="container">
            {this.props.users? this.props.users.map((u,index) => <User user={u} key={index}/>):undefined}
            </div>
        </Fragment>
    )
    }
}
  
function mapStateToProps(state) {
    const users = (Object.values(state.users)).sort((a, b) => {
        const x = (Object.keys(a.answers)).length + a.questions.length
        const y = (Object.keys(b.answers)).length + b.questions.length
        return y - x
      })
    return {
        users
    }
}
  
export default connect(mapStateToProps)(Home)