import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar'

class ShowQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        let showQuestion = this.props.showQuestion;
        let optionOne = this.props.optionOne;

        let optionOneVotes = showQuestion.optionOne.votes.length;
        let optionTwoVotes = showQuestion.optionTwo.votes.length;
        let totalVotes = optionOneVotes + optionTwoVotes;

        return (
        <div>
          <NavBar/>  
          <div className="card">
            <img alt="user" style={{width:'100px',height:'100px'}} src={this.props.userImage}/>
            <h2>Would you rather</h2>  

            <div className="form-check">
                <input readOnly 
                       checked={optionOne === true} 
                       type="radio"
                       class="form-check-input"/> 
                {showQuestion?showQuestion.optionOne.text:undefined}
            </div>

            <span>total number of votes is {optionOneVotes}</span>
            <span>percent of votes is {totalVotes===0?'0%':(optionOneVotes/totalVotes)*100+'%'}</span>
            <br/>
            <div className="form-check">
                <input readOnly 
                       checked={optionOne === false} 
                       type="radio"
                       class="form-check-input"/> 
                {showQuestion?showQuestion.optionTwo.text:undefined}
            </div>

            <span>total number of votes is {optionTwoVotes}</span>
            <span>percent of votes is {totalVotes===0?'0%':(optionTwoVotes/totalVotes)*100+'%'}</span>

          </div>
        </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        optionOne: state.showQuestion.question.optionOne.votes.includes(state.authedUser),

        showQuestion: state.showQuestion.question,

        userImage: state.users[state.showQuestion.question.author].avatarURL,


        
    }
}

export default connect(mapStateToProps)(ShowQuestion)