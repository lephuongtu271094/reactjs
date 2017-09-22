import React from 'react';

//Component dang function, dung khi component chi co chuc nang render noi dung
// props nhu la params cua function, goi props : props.item
const Content = (props) => {
    //es6 const name = props.name...
    const {name, lat, lng} = props.data
    return (
        <div>
            <h1>Name : {name}</h1>
            <h1>Latitude : {lat}</h1>
            <h1>Longtitude : {lng}</h1>
        </div>
    )
}

export default Content;