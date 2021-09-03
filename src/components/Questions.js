import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import OneQuestion from './OneQuestion';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUnAnswered:true
        };
        this.setState = this.setState.bind(this);
        this.showAnswered = this.showAnswered.bind(this);
        this.showUnAnswered = this.showUnAnswered.bind(this);
    }

    showAnswered(){
        this.setState({showUnAnswered:false});
    }

    showUnAnswered(){
        this.setState({showUnAnswered:true});
    }

    render(){
        let idsOfAnswered = this.props.idsOfAnswered;
        let idsOfUnAnswered = this.props.idsOfUnAnswered;
        let userName = this.props.userName;
        return(
            this.state.showUnAnswered?

            <div className="container">
            <p><b>Welcome {userName}</b></p>
            <button onClick={this.showAnswered} class="btn btn-outline-primary">Answered Questions</button>
            <button onClick={this.showUnAnswered} class="btn btn-outline-primary">unAnswered Questions</button>
            <div >
                <p><b>UnAnswered Questions</b></p>
                {idsOfUnAnswered.map((id,index) => <OneQuestion id={id} key={index}/>)}
            </div>
            </div>
            :
            <div className="container">
            <p><b>Welcome {userName}</b></p>
            <button onClick={this.showAnswered} class="btn btn-outline-primary">Answered Questions</button>
            <button onClick={this.showUnAnswered} class="btn btn-outline-primary">unAnswered Questions</button>
            <div>
                <p><b>Answered Questions</b></p>
                {idsOfAnswered.map((id,index) => <OneQuestion id={id} key={index}/>)}
            </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        authedUser: state.authedUser,
        userName: state.users[state.authedUser].name,
        users: state.users,
        questions: state.questions,
        idsOfAnswered: Object.values(state.questions)
        .filter(q => ((q.optionOne.votes.includes(state.authedUser)) || (q.optionTwo.votes.includes(state.authedUser))))
        .map(q => q.id).sort((a,b) => state.questions[b].timestamp - state.questions[a].timestamp),

        idsOfUnAnswered: Object.values(state.questions)
        .filter(q => (!(q.optionOne.votes.includes(state.authedUser)) && !(q.optionTwo.votes.includes(state.authedUser))))
        .map(q => q.id).sort((a,b) => state.questions[b].timestamp - state.questions[a].timestamp),

    }
}


export default connect(mapStateToProps)(Questions)