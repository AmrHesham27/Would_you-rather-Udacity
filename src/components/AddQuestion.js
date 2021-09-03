import React, { Fragment } from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import {addQuestion_Questions} from '../actions/questions'
import {addQuestion_Users} from '../actions/users'
import { withRouter} from 'react-router-dom'
import NavBar from './NavBar'; 

class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOne:'',
            optionTwo:''
        };
        this.handleOptionOne= this.handleOptionOne.bind(this);
        this.handleOptionTwo= this.handleOptionTwo.bind(this);
        this.setState= this.setState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOptionOne (e){
        this.setState({optionOne: e.target.value})
    }
    handleOptionTwo (e){
        this.setState({optionTwo: e.target.value})
    }
    handleSubmit (){
        // dispatch to two portions of the state
        // 1
        let author = this.props.authedUser;
        let optionOneText = this.state.optionOne;
        let optionTwoText = this.state.optionTwo;
        let question = formatQuestion ({ optionOneText, optionTwoText, author });
        this.props.dispatch(addQuestion_Questions (question));

        // 2
        let authedUser = this.props.authedUser;
        let qid = question.id;
        this.props.dispatch(addQuestion_Users (authedUser, qid));

        // redirect user to home page
        this.props.history.push('/Home');
    }
    render(){
    return (
        <Fragment>
            <NavBar/>
            <div className="card">
                <h2>Would you rather</h2>
                <form>
                <input onChange={this.handleOptionOne} type="text"  name="option" class="form-control"/> <br/>
                <input onChange={this.handleOptionTwo} type="text"  name="option" class="form-control"/> 
                </form>
                <button onClick={this.handleSubmit} className="btn btn-outline-primary">Add Question</button>
            </div>
        </Fragment>
    )
    }
}
  
function mapStateToProps (state) {
    return {
      authedUser : state.authedUser,
    }
}
  
export default withRouter(connect(mapStateToProps)(AddQuestion))