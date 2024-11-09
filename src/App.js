import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
   import TextForm from './component/TextForm';
   import React,{useState} from 'react';
   import Alert from './component/Alert';
           

function App() {
  
  const [Mode,setMode]=useState('dark');
  const toggleMode =()=>{
     if(Mode==='light'){
      setMode('dark');
     }
    else{
      setMode('light');
    } 


  }
   
  return (
    <>
  
   
   <Navbar title="textutils" mode={Mode}   toggleMode={toggleMode}/>
     
   <div className="container my-3">
        
  <TextForm/>
        
    
   </div>
   
    
     </>
    
  );
}   

export default App;
