import React, {useState} from 'react'


export default function Textform(props) {
const handleUpClick = ()=>{
  // console.log("uppercase was clicked" +  text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("converted to uppercase", "success");
} 

const handleLOClick = ()=>{
  // console.log("uppercase was clicked" +  text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("converted to LowerCase", "success");
}

const handleClearClick = ()=>{
  // console.log("uppercase was clicked" +  text);
  let newText = '';
  setText(newText);
  props.showAlert("converted to cleartext", "success");
} 

const handleonchange = (event)=>{
  // console.log("on chang");
  setText(event.target.value) 
}

const [text, setText] = useState(' ');
// text = "new text";//wrong way to change the state
// setText = "new state";//correct way to change the state
 return (
   <>
    <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn primary mx-2" onClick={handleLOClick}>Convert to Lowercase</button>
        <button className="btn btn primary mx-2" onClick={handleClearClick}>Clear Text</button>
        
    </div>
    <div className="container my-2">
      <h1>your text summary</h1>
      <p>{text.split(" ").length}words and {text.length} charctares</p>
      <p>{0.008 * text.split(" ").length } minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
