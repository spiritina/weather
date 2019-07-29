import React from 'react';
import Controls from './Controls';
import svgLeft from './chevron-circle-left-solid.svg'
import svgRight from './chevron-circle-right-solid.svg'
import Icon from '../Icon';

class Slider extends React.Component {
    constructor(props){
        super(props);
        console.log(props.children);
        this.state = {
            active: 0,
            maxSlide: this.props.children.length -1,
            autoplay: this.props.autoplay || false,
            reverse: false
        }
    }
    onNext = () => {
        this.state.active < this.state.maxSlide&&this.setState((prevState, prevProps) => ({
            active: prevState.active+1})
        )
    }
    onPrev = () => {
        this.state.active>0&&this.setState((prevState, prevProps) => ({
       active: prevState.active-1})
        )
    }
    goToSlide = (i) => {
        this.setState({
            active: i
        })
    }
    autoplay = () => {
        if (this.state.autoplay){
                !this.state.reverse&&this.onNext();
                this.state.reverse&&this.onPrev();
        }
    }
   shouldComponentUpdate = (nextProps, nextState) => {
     return   this.props.children != nextProps.children || this.state.active != nextState.active;
    }
    componentWillUpdate = (nextProps, nextState) =>{
        this.setState(prevState =>({ maxSlide: nextProps.children.length -1}))
        if(nextProps.children.length<this.props.children.length){
            this.setState((prevState, prevProps) => ({
                active: prevState.active-1}))
        };
        if(nextProps.children.length>this.props.children.length){
            this.setState((prevState, prevProps) => ({
                active: prevState.active+1}))
        }
    } 

    render(){
       
        let items = this.props.children.map(
            (child, index) => { let className = "inner-item ";
            if (this.state.active === index) className +=" active";
            return <div className = {className}
                        key = {index}>
                        {child} 
                    </div>
            })
        return( <div className = 'slider'>
                    <button className = 'right'
                            id = 'right'
                            onClick = {this.onNext}>
                            <Icon className='arrows' 
                            glyph={svgRight.id} 
                            viewBox={svgRight.viewBox}/>
                    </button>
                    <button className = 'left'
                            id = 'left'
                            onClick = {this.onPrev}>
                                <Icon className='arrows' 
                            glyph={svgLeft.id} 
                            viewBox={svgLeft.viewBox}/>
                    </button>                    
        <div className = "item-container">
            {items}
        </div>
        <Controls numberOfSlides = {this.state.maxSlide}
                  onClick = {this.goToSlide}
                  active={this.state.active}
                    />
        </div>
        )
    }
}

export default Slider