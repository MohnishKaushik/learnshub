import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [counterOne , setCounterone] = useState(0)
    const [counterTwo , setCountertwo] = useState(0)
    const IncrementOne =()=> {
        setCounterone(counterOne + 1)
    }
    const IncrementTwo =()=> {
        setCountertwo(counterTwo + 2)
    }
    const fun = useCallback(()=> {
        console.log("Mohnish")
    },[counterTwo])
      return (
    <div>
      <Child counterTwo = {counterTwo} fun = {fun}/>
      <button onClick={IncrementOne}>Counter : {counterOne}</button>
      <button onClick={IncrementTwo}>Counter : {counterTwo}</button>
    </div>
  )
}
