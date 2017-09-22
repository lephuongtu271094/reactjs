import React from 'react'
import SearchForm from './search'
import Content from './content'
import axios from 'axios'
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            data : {
                lat : "",
                lng : "",
                name : ""
            }
        }
    }

    handleChange(e){
        this.setState({
            value : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
            axios.get(url + this.state.value)
            .then(res => {
                this.setState({
                    data: {
                        lat : res.data.results[0].geometry.location.lat,
                        lng: res.data.results[0].geometry.location.lng,
                        name: res.data.results[0].formatted_address
                    }
                })
            }).catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <SearchForm 
                    inputValue={this.state.value}
                    onInputChange={this.handleChange.bind(this)}
                    onFormSubmit={this.handleSubmit.bind(this)}
                />
                <Content
                data={this.state.data}
                />
            </div>
        )
    }
}
export default App


// Cach render dang list data thuong gap
// data = [1,2,3,4,5,6] => [<li>1</li>, <li>2</li>, <li>3</li>]
// <ul>
//     {this.renderList()}
// </ul>

// renderList(){
//     return data.map((item, index) => {
//         return <li key={index}>{item.nam}</li>
//     })
// }

//Not quan trong ve setState
// Khai bao state tai phuong thuc constructor(pros){ this.state = { key : value }  }
// State chi duoc thay doi bang cau lenh this.setState({ key : newValue, key2 : newValue } )
// Khong duoc choc thang vao state, vi du state.name = state.name + 1
// let newValue = state.name + 1
// this.setState({ name : newValue }) chu khong duoc state.name += 1;