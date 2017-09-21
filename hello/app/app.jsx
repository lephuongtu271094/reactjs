
import React from 'react'
import ReactDOM from 'react-dom'
require('style-loader!css-loader!./name.css')

class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : ''
        }
    }
    change(e){
        this.setState({
            name : e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>{this.props.hello}</h1>
                <input type="text" value={this.state.name} onChange={this.change.bind(this)}/>
                <h2>hello {this.state.name}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Hello hello="Hello Word"/>,
    document.getElementById('root')
)
