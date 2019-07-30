import React from 'react';

class Controls extends React.Component{
    constructor(){
        super()
    }
    onClick = (event) =>{
        this.props.onClick(+event.target.dataset.index);
    }
    render(){
        let className;
        let controls = [], div;
        for(let i = 0; i <= this.props.numberOfSlides; i++){
            className = "controlElement";
            if (this.props.active === i) className +=" active";
            div = <div className = {className} 
                       data-index = {i}
                       key = {i}
                       onClick = {this.onClick} ></div>
            controls.push(div);
            
        }
        return(
            <div className = "controls">
                {controls}
            </div>

        )
    }

}

export default Controls;