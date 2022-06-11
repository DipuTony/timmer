import React, { useState } from 'react'
import on from './on.gif'
import off from './off.gif'

export default function Bulb() {

    const [bulb, setbulb] = useState(require('./off.gif'))

    // var imageName = require('./off.gif')

    const HandleOnOff = () =>{
        if(bulb ==require('./off.gif')){
            setbulb(require('./on.gif'));
        }else{
            setbulb(require('./off.gif'));
        }
    }

  return (
    <div id="mybulb">
        <h4>Bulb ON/OFF</h4>
        <p>Click on Bulb to ON/OFF</p>
        <img onClick={HandleOnOff} src={bulb} /> 
    </div>
  )
}
