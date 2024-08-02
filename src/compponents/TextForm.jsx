import React, {useState} from 'react';

const TextForm = (props) => {
     // starts functions
   const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "Success");
    }
   
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "Success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear All Text to completed", "Success");
    }

 const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("All Text Copy", "Success");
 }

 const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All Extra Spacess remove", "Success");
 }
    // End functions
   const handleOnChange = (event)=>{
        setText(event.target.value)
       
    }
    const [text, setText] = useState('');

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'? 'white' : 'black'}}>
<h1 className='fw-bolder my-5 mr-3 fs-3 text-dark'>{props.heading}</h1>
      
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? '#13466e' : 'white', color: props.mode==='dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LoWerCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

<div className="container my-8" style={{color:props.mode==='dark'? 'white' : 'black'}}>
    <h1 className='fw-bold'>Your text Summary</h1>
    <p className='fs-6'>{text.split(" ").filter((element)=>{return element.length!=0}).length} words & {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes Reads</p>
    <h3 className='fw-bold'>Preview</h3>
    <p>{text.length>0?text:"Nothing to Preview !"}</p>
</div>


        </>
    );
}

export default TextForm;
