import { useState } from 'react';
import  Button  from './components/button/button.component';
import './App.css';
import Input from './components/input/input.component';
import ButtonClear from './components/button-clear/button-clear.component';
import * as math from 'mathjs'

function App() {
  const [inputVal , setInputVal] = useState('')

  const addInput = (val)=>{
    setInputVal(inputVal + val)
  }

  const evalInput= ()=>{
    setInputVal(math.evaluate(inputVal))
  }
  return (
    <div className="app">
      <div className='calculator' >
        <Input input={inputVal}/>
        <div className='row'>
          <Button handlerInput={addInput}>7</Button>
          <Button handlerInput={addInput}>8</Button>
          <Button handlerInput={addInput}>9</Button>
          <Button handlerInput={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button handlerInput={addInput}>4</Button>
          <Button handlerInput={addInput}>5</Button>
          <Button handlerInput={addInput}>6</Button>
          <Button handlerInput={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handlerInput={addInput}>1</Button>
          <Button handlerInput={addInput}>2</Button>
          <Button handlerInput={addInput}>3</Button>
          <Button handlerInput={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handlerInput={addInput}>.</Button>
          <Button handlerInput={addInput}>0</Button>
          <Button handlerInput={() => evalInput()}>=</Button>
          <Button handlerInput={addInput}>+</Button>
        </div>
        <ButtonClear handlerclick = {()=> setInputVal("")}>
          clear
        </ButtonClear>
      </div>
    </div>
  );
}

export default App;
