import { useState, useEffect } from 'react'

export default function LocalStorage() {
    // const [Store, setStore] = useState("");

    const [View, setView] = useState("View Data Here")

    const addData = (e) => {           
        let length = localStorage.length; 
        let input = document.getElementById('input').value;
        if(length => 0){
    let i = length +1;
    localStorage.setItem(i, input);
    console.log("I si "+ i)
    }
         console.log("Data Added "+input, length);              
    }
    const viewData = () => {
        let arr = [ localStorage ]
        console.log(arr)
        arr.forEach((e) => {
            console.log(e)
            setView(e)
            document.getElementById('view').innerHTML = arr.value;
        })

        // let length = localStorage.length;
        // for(let a = 1; a <= length; a++){
        //      var myvalue = localStorage.getItem(a);
        //      var myArr = [myvalue];
        //      document.getElementById('view').innerHTML = myArr;   
        //  } 
         // document.getElementById('view').innerHTML = myvalue;
    }

    useEffect(() => {
        // let data = localStorage.getItem(1)
        // document.getElementById('view').innerHTML = data.value;
    })

  return (
      
    <div id="localstorage">
        <h2>Storage</h2>
        <input type="text" id="input" />
        <p id="view">{View}</p>
        <button onClick={addData}>Add</button>
        <button onClick={viewData}>View Data</button>
    </div>
  )
}
