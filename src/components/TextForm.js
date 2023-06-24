import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to Lower Case", "success");
    }
    
    const handleClear = ()=>{
        let newtext = '';
        settext(newtext);
        props.showAlert("Cleared text", "success");
    }


    const handleOnChange = (event)=>{
        settext(event.target.value);
    }
    const handleCopy = () =>{
        var text = document.getElementById("my-box");
        text.select();

        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text", "success");
    } 
    const handleExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showAlert("Removed Extra Spaces", "success");
    }
    const [text, settext] = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{background:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} id="my-box" cols="150" rows="8"></textarea>
            </div>
            <button className="btn btn-info mx-2" onClick= {handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-info mx-2" onClick= {handleLoClick}>Convert To Lower Case</button>
            <button className="btn btn-info mx-2" onClick= {handleCopy}>Copy Text</button>
            <button className="btn btn-info mx-2" onClick= {handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-2" onClick= {handleClear}>Clear Text</button>
           
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> It will take approx  {0.008 * text.split(" ").length}  minutes to read </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
        </div>
        </>
    )
}


