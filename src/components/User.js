import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:'',
        };
    }
    render(){
        let user = this.props.user;
        return (
          <div class="card">
              <h3>{user.name}</h3>
              <img alt="Girl in a jacket" style={{width:'100px',height:'100px'}} src={user.avatarURL}/>
              <span>Questions answered {Object.values(user.answers).length}</span>
              <span>Questions asked {user.questions.length}</span>
              <span>Total score is {Object.values(user.answers).length + user.questions.length}</span>
          </div>
        )
    }
}

export default connect()(User)