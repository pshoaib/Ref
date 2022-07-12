import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Imge = () => {
    const [count , setCount] = useState(0)
    const [minitue , setMinitue]= useState(0)
    const [min , setMin] = useState(0)
    const [ hour , setHour] = useState(0)
   const [day , setDay] = useState(0)
 
    useEffect(()=>
  {
   setTimeout(()=>
      {
          setCount(count+1)
      },100)
      if(count%60==0)
      {
        setMinitue(count/60)
      }
      if(count%60==0)
      {
        setMin()
      }
      if(minitue%60==0)
      {
        setHour(minitue/60)
      }
      if(hour%24==0)
      {
        setDay(hour/24)
      }
      console.log(day)
  },[count])
  
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', width:'500px', margin:'auto' , borderRadius:'12px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' , gap:'15px'}}>
      <div  style={{border:'1px solid red', borderRadius:'12px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' , gap:'15px'}}>
        <h2>Days <br />
             {day}</h2>
        </div>
        
        <div  style={{border:'1px solid yellow', borderRadius:'12px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' , gap:'15px'}}>
        <h2>Hour <br /> {hour} </h2>
        </div>

       
        <div  style={{border:'1px solid green', borderRadius:'12px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' , gap:'15px'}}>
        <h2>Minitue   <br /> {minitue}</h2>
        </div>
    
       
     
       <div style={{border:'1px solid green', borderRadius:'12px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' , gap:'15px'}}>
       <h2>Counter {count}sec</h2>
       </div>
        
       
        
         
    </div>
  )
}
