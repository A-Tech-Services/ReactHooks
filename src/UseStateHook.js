import React, {useState} from "react";

const UseStateHook = () => {
      // counter Functions
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter<10? counter + 1 : 10);
  }

  const decrement = () => {
    setCounter(counter>0? counter - 1 : 0);
  }

  // Input Functions
  const [inputValue, setInputValue] = useState("Hey how are you");

  const txtChange = () => {
    setInputValue("Yo! ✅");
  }

  const [inputsValue, setInputsValue] = useState("Oluwapelumi");
  const changeTXT = (event) => {
    const newValue = event.target.value;
    setInputsValue(newValue);
  }


  const [message, setMessage] = useState("");

  const onChange = (e) => {
    const updates = e.target.value;
    setMessage(updates);
  }



  return(
    <div className='App'>
      {/* using the useState hook to increment the value of a counter. */}
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>

      {counter}

      <div>
        <button onClick={increment}>Increment</button>
      </div><br/>

      {/* using the useState hook to change the value of an input. */}
      <div>
        <button onClick={txtChange}>Change Text</button><br/><br/>
        <input type="text"value={inputValue}/>
      </div>

      <div>
        <input onChange={changeTXT} type="text" placeholder='Type in something...'/>
        {inputsValue}
      </div>



      <textarea onChange={onChange} cols={30} rows={10} placeholder='Type your message...'/><br/>
      {message}
    </div>
  )
}

export default UseStateHook;