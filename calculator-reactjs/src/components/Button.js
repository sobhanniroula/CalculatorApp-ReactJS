import React from 'react';
import './Button.css';

class Button extends React.Component {
  
  // inputValue = val => {
  //   this.setState({
  //     input: this.props.state.input + val
  //   });
  //   console.log(val);
  // };

    render() {
  return (
    <div className="calculator-keys">
              <button name="/" className="operator" onClick={e => this.props.onClick(e.target.name)}>&divide;</button>
              <button name="*" className="operator" onClick={e => this.props.onClick(e.target.name)}>&times;</button>
              <button name="-" className="operator" onClick={e => this.props.onClick(e.target.name)}>-</button>
              <button name="+" className="operator" id="plus-key" onClick={e => this.props.onClick(e.target.name)}>+</button>
              
              <button name="7" className="number" onClick={e => this.props.onClick(e.target.name)}>7</button>
              {/* <button name="7" className="number" onClick={() => this.props.handleClick(7)}>7</button> */}
              {/* <button className="number" handleClick={this.inputValue}>7</button> */}
              <button name="8" className="number" onClick={e => this.props.onClick(e.target.name)}>8</button>
              <button name="9" className="number" onClick={e => this.props.onClick(e.target.name)}>9</button>
          
              <button name="4" className="number" onClick={e => this.props.onClick(e.target.name)}>4</button>
              <button name="5" className="number" onClick={e => this.props.onClick(e.target.name)}>5</button>
              <button name="6" className="number" onClick={e => this.props.onClick(e.target.name)}>6</button>
              <button name="=" id="equals-key" onClick={e => this.props.onClick(e.target.name)}>=</button>
          
              <button name="1" className="number" onClick={e => this.props.onClick(e.target.name)}>1</button>
              <button name="2" className="number" onClick={e => this.props.onClick(e.target.name)}>2</button>
              <button name="3" className="number" onClick={e => this.props.onClick(e.target.name)}>3</button>
          
              <button name="." id="decimal-key" onClick={e => this.props.onClick(e.target.name)}>.</button>
              <button name="0" id="zero-key" onClick={e => this.props.onClick(e.target.name)}>0</button>
              <button name="C" className="clears" id="all-clear" onClick={e => this.props.onClick(e.target.name)}>C</button>
              <button name="CE" className="clears" id="clear" onClick={e => this.props.onClick(e.target.name)}>DEL</button>
          </div> 
    );
    }
}

export default Button;
