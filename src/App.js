import React, { useState } from 'react';
import './App.css';
import KeyPad from './components/KeyPad'
import Result from './components/Result'

function App() {

  const [result, setResult] = useState('');

  const reset = () => {
    setResult('')
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const onClick = button => {

    if (button === "=") {
      if(result.includes('+')){
        let mas = result.split(/[^\d]/g);
        setResult(parseInt(mas[0])+parseInt(mas[1]))
      }
      else if(result.includes('-')){
        let mas = result.split(/[^\d]/g);
        setResult(parseInt(mas[0])-parseInt(mas[1]))
      }
      else if(result.includes('*')){
        let mas = result.split(/[^\d]/g);
        setResult(parseInt(mas[0])*parseInt(mas[1]))
      }
      else if(result.includes('/')){
        let mas = result.split(/[^\d]/g);
        setResult(parseInt(mas[0])/parseInt(mas[1]))
      }
      
    }

    else if (button === "C") {
      reset()
    }
    else if (button === "CE") {
      backspace()
    }

    else {
      setResult(result + button)

    }
  
  };
  



  return (
    <div className="App">
      <Result result={result} />
      <KeyPad onClick={onClick} />

    </div>
  );
}

export default App;
