import React, { useEffect, useState } from 'react'

export default function CovidData() {
  const[data,setData]=useState([]);
  const getdata=async ()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
const actualdata=await res.json(); 
console.log(actualdata); 
setData(actualdata);
}

  useEffect(()=>{
    getdata();

  },[]);
    return (
    <div>
<tbody>
    {
    data.map((curElem,index)=>{
        return(
<tr>
<td>{curElem.id}</td>
<td>{curElem.title}</td>
</tr>
        )
    })
    }
</tbody>


<h1>covid data</h1>
    </div>
  )
}
