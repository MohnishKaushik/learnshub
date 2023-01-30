import React from 'react'
import Astate from './Astate';


export default function Fstates() {
    const states = [
        ["Delhi", "Capital", 2],
        ["UP", "Not Capital", 7],
        ["Kashmir", "Paradise", 10],
        ["Bihar", "UPSC", 20]
    ];
  return (
    <>
    <Astate states = {states}/>
    </>
  );
}
