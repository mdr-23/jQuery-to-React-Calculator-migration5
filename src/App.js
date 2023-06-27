import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const addNumber = (e) => {
    const x = e.target.value;
    setNumber((prevNumber) => {
      if (prevNumber === '0') {
        return x;
      } else {
        return prevNumber + x;
      }
    });
  };

  const setOperatorAndNumber = (operator) => {
    setOperator(operator);
    setSecondNumber(number);
    setNumber('');
  };


  const calcular = () => {
    const num1 = parseInt(secondNumber);
    const num2 = parseInt(number);

    let calculatedResult;

    switch (operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        break;
    }

    setResult(calculatedResult);
    setNumber('');
    setSecondNumber('');
    setOperator('');
  };

  const clear = () => {
    setNumber('');
    setSecondNumber('');
    setResult('')
  };

  return (
    <div className="App">
      <div id="calculator">
        <div className="label-container">
          <label type="text" id="display" readOnly>
            {number} {result}
          </label>
        </div>
        <div id="buttons">
          <button className="button" value="1" onClick={addNumber}>
            1
          </button>
          <button className="button" value="2" onClick={addNumber}>
            2
          </button>
          <button className="button" value="3" onClick={addNumber}>
            3
          </button>
          <button className="button" value="4" onClick={addNumber}>
            4
          </button>
          <button className="button" value="5" onClick={addNumber}>
            5
          </button>
          <button className="button" value="6" onClick={addNumber}>
            6
          </button>
          <button className="button" value="7" onClick={addNumber}>
            7
          </button>
          <button className="button" value="8" onClick={addNumber}>
            8
          </button>
          <button className="button" value="9" onClick={addNumber}>
            9
          </button>
          <button className="button" value="0" onClick={addNumber}>
            0
          </button>
          <button className="button" onClick={() => setOperatorAndNumber('+')}>
            +
          </button>
          <button className="button" onClick={() => setOperatorAndNumber('-')}>
            -
          </button>
          <button className="button" onClick={() => setOperatorAndNumber('*')}>
            *
          </button>
          <button className="button" onClick={() => setOperatorAndNumber('/')}>
            /
          </button>
          <button className="button" id="equals" onClick={calcular}>
            =
          </button>
          <button className="button" id="clear" onClick={clear}>
            C
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
