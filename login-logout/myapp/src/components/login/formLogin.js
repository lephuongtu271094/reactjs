import React from 'react'

const FormLogin = ({submitLogin ,ChangeLogin}) => {
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={submitLogin}>
                    <input 
                        type="text" 
                        placeholder="User name" 
                        name="username"
                        onChange={ChangeLogin}
                    /><br/>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="pass"
                        onChange={ChangeLogin}
                    /><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
}

export default FormLogin