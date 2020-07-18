import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './landing/landing'
import About from "./about/about"
const App = () => {
  return (
    <Router>
    <Switch>
           
            <Route exact path="/" component={Landing}/>
            <Route path="/about" component={About} />
          
    </Switch>           
    </Router>


)
}
ReactDOM.render(
  <App/>, document.querySelector('#root')
)
