import './App.css'
import { useState } from 'react';

function App() {
  

  //let counter = 15
      let [counter , funcCOunter] = useState(1)
  const up = ()=>{
      if(counter<20)
      // funcCOunter(counter+1) //1+1 = 2   //this sytax would not work since from the fibre algorithm the UI updates are done in batches
      // funcCOunter(counter+1) //3  // and all the 4 statements are been sent in a package 
      // funcCOunter(counter+1) //4  // where they are all updating the same number by 1
      // funcCOunter(counter+1) //5  //so the value will not be updated by 4 rather is will be updated by 1

      funcCOunter((counter)=> counter + 1);  //here the funCOunter takes a callback function as an argument which will
      funcCOunter((counter)=> counter + 1);  //update the last value that is previous value of counter
      funcCOunter((counter)=> counter + 1);  //so to get value for future updation, we need to perform the current operation
      funcCOunter((counter)=> counter + 1);

  }

  function down(){
      if(counter>0)
      funcCOunter(counter-1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={up}>Up</button>
      <br />
      <br />
      <button onClick={down}>Down</button>
    </>
  )
}

export default App
