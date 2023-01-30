// import React from 'react'

// export default function Skills(props) {
//     const skillset = props.skills.map((x) => <li>{x}</li>)
//     return (
//         <>
//             <h1><ul>{skillset}</ul></h1>
//             {/* <h1>
//                 <ul>
//                     <li>{props.skills[0]}</li>
//                     <li>{props.skills[1]}</li>
//                     <li>{props.skills[2]}</li>
//                     <li>{props.skills[3]}</li>
//                 </ul>
//             </h1> */}
//         </>
//     )
// }


import React from 'react'
const GSkill = ({skill:[tech,level]})=>(
    <li>{tech} {level}</li>
)
export default function Skills({skills}) {
    const skilllist = skills.map((x)=>
    <GSkill skill={(x)}/>)
  return (
    <div>
      <ul>{skilllist}</ul>
    </div>
  )
}
