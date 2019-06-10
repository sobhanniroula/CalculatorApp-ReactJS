import React from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
    };
    // this.inputValue = this.inputValue.bind(this);
    }
    
    // inputValue = val => {
    //   this.setState({
    //     input: this.state.input + val
    //   });
    //   // console.log(val);
    //   // console.log(this.state);
    // };

    onClick = button => {
      if (button === '=') {
        this.evaluate();
      } else if (button === 'C') {
        this.reset();
      } else if (button === 'CE') {
        this.backspace();
      } else if (button === '0') {
          if (this.state.input !== '0') {
            this.setState({
              input: this.state.input + button
            });
          }
      } else if (button === '.') {
          if (this.state.input.indexOf('.') === -1) {
            this.setState({
              input: this.state.input + button
            });
          }
      } else {
        if (this.state.input === '0') {
          this.setState({
            input: button
          });
        } else {
        this.setState({
          input: this.state.input + button
        });
      }
      }
    };

    evaluate = () => {
      try {
        this.setState({
          input: (eval(this.state.input) || '') + ''
        });
      } catch (e) {
        this.setState({
          input: 'error'
        })
      }
    };

    reset = () => {
        this.setState({
          input: ''
        });
    };

    backspace = () => {
      this.setState({
        input: this.state.input.slice(0, -1)
      });
    }

  render() {
  return (
    <div className="App">
      <div className="calculator-wrapper">
          <Display displaytext={this.state.input} /> 
          {/* <Button handleClick={this.inputValue} /> */}
          <Button onClick={this.onClick} />
          {/* <Button onClick={() => this.props.handleClick(this.props.children)} /> */}
       </div> 
    </div>
  );
}
}

export default App;
