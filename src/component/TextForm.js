import React ,{useState} from 'react'
  
export default function TextForm(props) {
 const  [co,setco]=useState(); 
 const change =()=>{
   setco('red');
} 
 const checkpara =()=>{
          let avc=  text.concat(textt)
          setText(avc)
              

    } 
 const lowerclick=()=>{
   console.log('button was clicked');
   let an=text.toLowerCase();
    setText(an)
   

   }
const upperclick =()=>{
 console.log('button was clicked');
       let ans =text.toUpperCase();
        setText(ans)
} 
const handleOnChange=(e)=>{
  console.log('change was clicked');
  setText(e.target.value)
  
}
const handleOnChang=(event)=>{
 console.log('chang was clicked');
   setTex(event.target.value)
 
}
const [text,setText] =useState(' enter text');
const [textt, setTex] =useState('enter second text');
 return (
   <>
   <div className="container">
      <h1>{props.heading}</h1>
    
<div className="mb-3">

<textarea className="form-control"  value={text}  onChange={handleOnChange} id="mybox" rows="8"></textarea>

</div>
   <button className="btn btn -primary mx-2"  onClick={upperclick} > convert to upper case</button>
   <button className="btn btn -primary mx-2"  onClick={lowerclick} > convert to lower case</button>
   <button className="btn btn -primary mx-2"  onClick={checkpara} >  combine both text </button>
 </div>
 <div className="container my-3">
 <h1>your text summary</h1>
   <p> {text.split(" ").length} words, {text.length}characters</p>
   <p> {0.008* text.split(" ").length }  minutes to read</p>
    <h2>preview</h2>
    <p> {text}</p>
    <button class="accordion-button"  type="button" onClick={change}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> change to red</button>
 </div>
   </>
 )
}



