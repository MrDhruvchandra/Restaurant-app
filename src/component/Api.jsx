import { useEffect, useState } from "react";
export function Api(){
    return(
        <div>
    
      <Fetched/>

        </div>
    )
}

function Fetched(){
    const [items,setItems]=useState([{}]) 
  
     useEffect( ()=>{
        
        async function data(){
      const data=await fetch('https://api.example.com/data')
       
     const jsonData= data.res.json(); 
        setItems(jsonData); 
      } }  
     ,[items])
 
 return(
    <div>
 <p>{items}</p>

    </div>
 )
}