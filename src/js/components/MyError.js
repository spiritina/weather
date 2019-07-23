import React from 'react';

class MyError extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <h2 className='weather' color='red'>Sorry, error has happened!</h2>
        )
    }
}

export default MyError;