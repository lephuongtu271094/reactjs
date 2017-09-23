import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login/login.js'
import Register from './register/register.js'

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                    <hr />
                        <Route exact path="/" component={Login} />
                        <Route path="/register" component={Register} />
                </div>
            </Router>
        )
    }
}

export default App