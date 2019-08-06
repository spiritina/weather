import React from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'

class Search extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);
        this.state = {city: ''};
    }
    onChange = (event)=>{
        console.log(event.target);
        let city = event.target.value;
        this.setState({city: city});
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.state !== nextState;
    }
    render(){
        return(
    < form name='searchForm' onSubmit = {(event)=>{
        event.preventDefault();
        console.log(this.props.onChange);
        this.props.onChange(this.state.city);
        localStorage.setItem('weathermain', JSON.stringify(this.state.city));
    }
    }>
        <input type='text'
               name='city'
               onChange={this.onChange}
               value={this.state.city}
               id='cityInput'
                />
        </form>)}

}

const mapStateToProps = (state) =>(
    {city: state.city}
)

const onChange = city => ({   type: 'NEW_CITY_MAIN', 
                            city: city})
const mapDispatchToProps = (dispatch, ownProps) =>  {
   return bindActionCreators({onChange}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);