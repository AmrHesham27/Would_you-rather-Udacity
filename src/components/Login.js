import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom'

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userId:'',
        };
        this.handleAuthedUser = this.handleAuthedUser.bind(this);
        this.login = this.login.bind(this);
    }

    // i have problem with login
    login  (){
        let userId = this.state.userId;
        if(userId !== ''){
        this.props.dispatch(setAuthedUser(userId));
        return (this.props.history.push('/Home'));
        }
    }

    handleAuthedUser(event){
        this.setState({userId: event.target.value });
    }

    render(){
        return(
            <div className="card">
                <select value={this.state.userId}
                        onChange={this.handleAuthedUser}
                        class="form-select" >
                        <option disabled value=''>Please select</option>
                        {
                        this.props.users?Object.keys(this.props.users)
                        .map(user =>
                        <option key={user} value={user}>
                        {this.props.users[user].name}
                        </option>)
                        :
                        undefined
                        }
                </select>
                <button onClick={this.login} className="btn btn-outline-primary">Login</button>
            </div>
        )           
    }
} 

function mapStateToProps (state) {
    return {
      users : state.users,
    }
}

export default withRouter(connect(mapStateToProps)(Login))