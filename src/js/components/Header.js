import React from 'react';
import Search from './Search';
import Menu from './Menu';
import svgSearch from '../../static/img/src/search-solid.svg';

class Header extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <header className="row">
                <div className='logo'>
                    <img src='../../img/logo.png' alt='Logo image'/>
                </div>
                <Search city={this.props.city} onChange={this.props.onChange} onSubmit={this.props.onSubmit}/>
                <Menu />
            </header>
        )
    }
}

export default Header;