import React from 'react';

class FormRegister extends React.Component {
    render(){
        return(
            <div>
                <h2>
                    Register    
                </h2>
                <form onSubmit={this.props.onFormSubmit} encType="multipart/form-data">
                    <input 
                        type="text" 
                        placeholder="User Name"
                        onChange={this.props.onRegister}
                        name="username"
                     /><br/>
                    <input 
                        type="text" 
                        placeholder="Display name"
                        onChange={this.props.onRegister}
                        name="displayname"
                    /><br/>
                    <input 
                        type="email" 
                        placeholder="Email"
                        onChange={this.props.onRegister}
                        name="email"
                    /><br/>
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={this.props.onRegister}
                        name="password"
                    /><br/>
                    <input 
                        type="password" 
                        placeholder="confirm password"
                        onChange={this.props.onRegister}
                        name="confirmPassword"
                    /><br/>
                    <input type="file"
                        onChange={this.props.onRegister}
                        name="file"
                    /><br/>
                    <button type="submit">Register</button>
                </form> 
            </div>
        )
    }
}
export default FormRegister