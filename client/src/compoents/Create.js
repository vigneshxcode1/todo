import React, { useState } from 'react'
import axios from "axios"

const Create = () => {
    const [task,settask]=useState()
    const handleSubmit=()=>{
        axios.post("http://localhost:8000/add",{task:task})
        .then(()=>
            {
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <input type='text' value={task} onChange={(e)=>settask(e.target.value)}></input>
        <button type='button' onClick={handleSubmit}>sumbit</button>
    </div>
  )
}

export default Create