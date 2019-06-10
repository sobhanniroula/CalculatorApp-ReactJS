import React from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <div className="calculator-wrapper">
          <Display />
          <Button />
       </div> 
    </div>
  );
}
}

export default App;
