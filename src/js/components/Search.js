import React from 'react';

class Search extends React.Component {
    constructor(){
        super()
    }
    onSubmit = event => {
        event.preventDefault();
        console.log(this.props.city)
        this.props.onSubmit(this.props.city, 'main', 'q')
    }
    render(){
    return(
    < form name='searchForm'
           onSubmit = {this.onSubmit} >
        <input type='text'
               name='city'
               onChange={this.props.onChange}
               value={this.props.city.city}
               id='cityInput'  />
    </form>
)
}
}

export default Search;