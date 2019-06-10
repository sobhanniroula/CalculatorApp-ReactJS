import React from 'react';
import './Display.css';

class Display extends React.Component {
  
    render() {
  return (
    <div className="calculator-display">
        <input type="text" className="calculator-display-text" value={this.props.displaytext} disabled />
    </div> 
    );
    }
}

export default Display;
