import React, { useMemo, useState } from 'react'

export default function Memo() {
    const [counterOne , setCounterone] = useState(0)
    const [counterTwo , setCountertwo] = useState(0)

    const IncrementOne =()=> {
        setCounterone(counterOne + 1)
    }
    const IncrementTwo =()=> {
        setCountertwo(counterTwo + 2)
    }
    const isEven = useMemo(()=> {
        let i = 0;
        while(i < 20000000000) i++ ; 
        return counterOne % 2 === 0
    },[counterOne])
  return (
    <div>
        <button onClick={IncrementOne}>Counter - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
        <button onClick={IncrementTwo}>Counter - {counterTwo}</button>
    </div>
  )
}
