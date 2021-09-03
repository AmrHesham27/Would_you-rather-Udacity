import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';
import { Switch, Route ,BrowserRouter } from "react-router-dom";
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import Logout from './Logout'
import Login from "./Login"
import ShowQuestion from './ShowQuestion'
import NotFound from './NotFound'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
  return (
    this.props.IsUserLoggedIn ? 
      <BrowserRouter>
        <Switch>
          <Route path='/Home' exact component={Home} />
          <Route path='/leaderboard' exact component={LeaderBoard} />
          <Route path='/add' exact component={AddQuestion}/>
          <Route path='/logout' exact component={Logout} />
          <Route path='/showQuestion/:qid' exact component={ShowQuestion} />
        </Switch>      
      </BrowserRouter>
      :
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login}/> 
          <Route component={NotFound} />  
        </Switch>      
      </BrowserRouter>

  )
  }
}

function mapStateToProps (state) {
  return {
    IsUserLoggedIn: state.authedUser !== null,
  }
}

export default connect(mapStateToProps)(App)