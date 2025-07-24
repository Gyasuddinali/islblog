import React, { useEffect, useState } from 'react'

export default function ButtonCount() {
  const[count,setCount]=useState(0);
  useEffect(()=>{
    
    alert("clicked");
    
  },[count]);
    return (
        <div>
        L<button onClick={()=>{setCount(count+1)}}>countButton {count}</button>
    </div>
  )
}
