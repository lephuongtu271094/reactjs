import React from 'react';
import FormLogin from './formLogin.js'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            pass : ""
        }
    }
    changelogin(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitlogin(e){
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <FormLogin
                ChangeLogin={this.changelogin.bind(this)}
                submitLogin={this.submitlogin.bind(this)}
                
            />
        )
    }
}

export default Login