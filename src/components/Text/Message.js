import React, { useState } from 'react'

export default function Message() {
    const [text, setText] = useState("")
    const onChange=(event)=>{
        setText(event.target.value)
    }
    const onUpper =()=> {
        let upper = text.toUpperCase()
        setText(upper)
    }
    const onLower=()=> {
        let lower = text.toLowerCase()
        setText(lower)
    }
    const onClear=()=> {
        setText("")
    }
    const onCopy=()=> {
        var text = document.getElementById("exampleFormControlTextarea1")
       text.select()
       navigator.clipboard.writeText(text.value)
    }
    return (
        <div className='container my-3'>
            <div className="mb-3">
                <h1>Text Area Box</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Enter Your Text' onChange={onChange}
                value={text}></textarea>
            </div>
            <div>
                <button type="button" onClick={onUpper} class="btn btn-primary">Upper</button>
                <button type="button" onClick={onLower} class="btn btn-secondary">Lower</button>
                <button type="button" onClick={onClear} class="btn btn-success">Clear</button>
                <button type="button" onClick={onCopy} class="btn btn-danger">Copy</button>
            </div>
        </div>
    )
}
