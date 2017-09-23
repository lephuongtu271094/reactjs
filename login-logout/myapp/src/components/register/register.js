import React from 'react';
import FormRegister from './formRegister.js'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            displayname:'',
            email: '',
            password:'',
            confirmPassword:'',
            file:'',
        } 
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <FormRegister 
                onRegister={this.handleChange.bind(this)}
                onFormSubmit={this.handleSubmit.bind(this)}
            />
        )
    }
}

export default Register