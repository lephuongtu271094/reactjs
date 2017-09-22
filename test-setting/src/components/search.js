import React from 'react';

//Component dang day du, goi props bang this.props
// class SearchForm extends React.Component {
//     render(){
//         return(
//             <form onSubmit={this.props.onFormSubmit}>
//                <input 
//                type="text" 
//                placeholder="tim kiem" 
//                value={this.props.inputValue}
//                onChange={this.props.onInputChange}
//                /><br/>
//                <button type='submit'> Search </button>
//             </form> 
//         )
//     }
// }

//CSS kieu React, viet dang Json, ten thuoc tinh giong DOM
// const Inputstyle = {
//     fontSize : '25px'
// } => <input style={{fontSize: '25px'}} />

const SearchForm = ({onFormSubmit, inputValue, onInputChange}) => {
    return(
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="tim kiem" 
                value={inputValue}
                onChange={onInputChange}
            /><br/>
            <button type='submit'> Search </button>
        </form> 
    )
}

export default SearchForm