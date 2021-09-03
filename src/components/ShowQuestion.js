import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { addAnswer_Questions } from '../actions/questions'
import { addAnswer_Users } from '../actions/users'
import NavBar from './NavBar'
import ShowAnswer from './ShowAnswer'

class ShowQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer:'',
            loading:'loading'
        };
        this.handleChange = this.handleChange.bind(this);
        this.setState = this.setState.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleChange(e){
        this.setState({answer:e.target.value});
    }
    
    handleSumbit(){
        let authedUser = this.props.authedUser;
        let qid = this.props.qid;
        let answer = this.state.answer;
        this.props.dispatch(addAnswer_Questions(authedUser, qid, answer));
        this.props.dispatch(addAnswer_Users (authedUser, qid, answer));
    }

    render(){
        let showQuestion = this.props.showQuestion;
        let userAnswers = this.props.userAnswers;
        let qid = this.props.qid;

        return (
        !Object.keys(userAnswers).includes(qid)?

        <div>
          <NavBar/> 
          <div className="card">
            <img alt="user" style={{width:'100px',height:'100px'}} src={this.props.userImage} />
            <h2>Would you rather</h2>  

            <div className="form-check">
                <input onChange={this.handleChange} 
                       type="radio" 
                       value='optionOne' 
                       name='option'
                       class="form-check-input"/> 
                {showQuestion?showQuestion.optionOne.text:undefined}
            </div>

            <div className="form-check">
                <input onChange={this.handleChange} 
                       type="radio" 
                       value='optionTwo' 
                       name='option'
                       class="form-check-input"/> 
                {showQuestion?showQuestion.optionTwo.text:undefined}
            </div>
            
            <button onClick={this.handleSumbit} className="btn btn-outline-primary">submit</button>
          </div>
        </div>
        :
        <ShowAnswer/>
        )
    }
}

function mapStateToProps (state) {
    return {
        authedUser: state.authedUser,

        showQuestion: state.showQuestion.question,

        qid: state.showQuestion.question.id,

        userImage: state.users[state.showQuestion.question.author].avatarURL,
        
        userAnswers: state.users[state.authedUser].answers,
    }
}

export default connect(mapStateToProps)(ShowQuestion)