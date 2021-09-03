import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setShowQuestion } from '../actions/showQuestion';
import {  withRouter } from 'react-router-dom';

class OneQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.showMyQuestion = this.showMyQuestion.bind(this);
        this.setState = this.setState.bind(this);
    }

    showMyQuestion (){
      let question = this.props.questions[this.props.id];
      this.props.dispatch(setShowQuestion(question));
      this.props.history.push(`/showQuestion/${this.props.id}`);
    }
    
    render(){
        let question = this.props.questions[this.props.id];
        let authedUser = this.props.authedUser;
        let optionOne = question.optionOne.votes.includes(authedUser);
        let optionTwo = question.optionTwo.votes.includes(authedUser);
        return (
          <div onClick={this.showMyQuestion} className="card oneQuestion">
            <span>Would you rather</span>
            <ul>
                {optionOne?<li style={{color:'blue'}} key='1' value={1}>{question? question.optionOne.text:undefined}</li>
                :<li key='1' value={1}>{question? question.optionOne.text:undefined}</li>}
                
                {optionTwo?<li style={{color:'blue'}} key='2' value={2}>{question? question.optionTwo.text:undefined}</li>
                :<li key='2' value={2}>{question? question.optionTwo.text:undefined}</li>}
            </ul>
          </div>
        )
    }
}

function mapStateToProps (state) {
    return {
      questions : state.questions,
      authedUser : state.authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(OneQuestion))