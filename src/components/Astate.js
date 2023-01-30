import React from 'react'
const State = ({state:[a,b,c]})=>(
    <li>{a} {b} {c}</li>
)
export default function Astate(states) {
    const statelist = states.map((x)=>
    <State state={(x)}/>)
  return (
    <div>
      <ul>{statelist}</ul>
    </div>
  )
}
