import React, { useState } from 'react'
import '../App.css';
export default function MyCalculator() {

    const [result, setResult] = useState("");

    const ClickHandler = (event) => {
        setResult(result.concat(event.target.name))
    }

    const clear = () =>
    {
        setResult("");
    }
    
    const calculate = () =>{
        setResult(eval(result).toString());
    }

  return (
    <div>
        <h1>Calculator</h1>
        <div id="calculator">
            <input type="number" id="answer" placeholder='0' value={result} readOnly/>
            <button className="btn" name="9" onClick={ClickHandler}>9</button>
            <button className="btn" name="8" onClick={ClickHandler}>8</button>
            <button className="btn" name="7" onClick={ClickHandler}>7</button>
            <button className="btn" name="6" onClick={ClickHandler}>6</button>
            <button className="btn" name="5" onClick={ClickHandler}>5</button>
            <button className="btn" name="4" onClick={ClickHandler}>4</button>
            <button className="btn" name="3" onClick={ClickHandler}>3</button>
            <button className="btn" name="2" onClick={ClickHandler}>2</button>
            <button className="btn" name="1" onClick={ClickHandler}>1</button>
            <button className="btn" name="0" onClick={ClickHandler}>0</button>       
            <button className="btn" name="." onClick={ClickHandler}>.</button>
            <button className="btn" name="+" onClick={ClickHandler}>+</button>
            <button className="btn" name="-" onClick={ClickHandler}>-</button>
            <button className="btn" name="*" onClick={ClickHandler}>*</button>
            <button className="btn" name="/" onClick={ClickHandler}>/</button>
            <button className="btn" name={'%'} onClick={ClickHandler}>%</button>
            <button className="btn exreabtn" onClick={clear}>CLEAR</button>
            <button className="btn exreabtn" onClick={calculate}>=</button>
        </div>
    </div>
  )
}
