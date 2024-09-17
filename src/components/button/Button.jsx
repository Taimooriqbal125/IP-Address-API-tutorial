import React, { useState } from 'react'
import Data from '../../data/Data';
function Button(props) {
    const [click, setclick] = useState([]);
    setclick = (index)=>{
alert(index)
    }


  return (
    <div><button onClick={setclick}>Delete</button></div>
  )
}

export default Button