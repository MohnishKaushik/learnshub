import React from 'react'
import Skills from './Skills';


export default function Fskills() {
    const skills = [
        ["HTML",10],
        ["CSS",9],
        ["JS",8],
        ["REACT",7]
    ];
  return (
    <>
    <Skills skills = {skills}/>
    </>
  );
}
