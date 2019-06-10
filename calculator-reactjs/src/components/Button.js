import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
  return (
    <div className="calculator-keys">
              <button className="operator">/</button>
              <button className="operator">*</button>
              <button className="operator">-</button>
              <button className="operator" id="plus-key">+</button>
          
              <button className="number">7</button>
              <button className="number">8</button>
              <button className="number">9</button>
          
              <button className="number">4</button>
              <button className="number">5</button>
              <button className="number">6</button>
              <button id="equals-key">=</button>
          
              <button className="number">1</button>
              <button className="number">2</button>
              <button className="number">3</button>
          
              <button id="decimal-key">.</button>
              <button id="zero-key">0</button>
              <button className="clears" id="all-clear">AC</button>
              <button className="clears" id="clear">C</button>
          </div> 
    );
    }
}

export default Button;
