import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const[text,setText]=useState('')
    const handelOnchange=(event)=>{
         console.log("Onchange")
         setText(event.target.value);
        if(text.split(" ").length-1>= 5){
            props.showAlert("Maximum Limit Reached","warning");
            setLen(5);
        }else{
            
            setLen(text.split(" ").length)
        }
        
    }
    const Onupchange=()=>{
         console.log("Uppercase was Clicked")
        setText(text.toUpperCase())
    }
    const Onlowerchange=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const OnClear=()=>{
        let newText='';
        setText(newText);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const[len,setLen]=useState(0);
   
    
    

  return (
    <>
        <div className="container mb-3" >
        <h2 className={`mb-3 my-4 text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h2>
        <textarea className="form-control" id="myBox" value={text} onChange={handelOnchange} rows="5"></textarea>
        
        
        <button className="btn btn-primary mx-2 my-3" onClick={Onupchange}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={Onlowerchange}>Convert to LowerCase</button>
        <button className="btn btn-warning mx-2 my-3" onClick={speak}>Speak</button>
        <button className="btn btn-danger mx-2 my-3" onClick={OnClear}>Clear All </button>
        </div>
        
      <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
      <h2> Your text summary </h2>
        <p>{len} words {text.length-text.split(" ").length+1} characters</p>
    </div>
    
    </>
  )
}

TextForm.prototype={
    heading: PropTypes.string.isRequired
}

