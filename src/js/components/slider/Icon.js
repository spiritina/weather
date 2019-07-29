import React from 'react';
 class Icon extends React.Component{
   constructor(props){
     super(props);
   }
   render(){
    return (
      <svg className={this.props.className} viewBox={this.props.viewBox} color={this.props.color}>
        <use xlinkHref={`#${this.props.glyph}`} />
      </svg>
    );
  }
  }

  export default Icon;