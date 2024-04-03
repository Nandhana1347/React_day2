import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var name="Nandhana"
    var [name,setname] = useState("nandhana")
    var [value,setValue] = useState()
    const changeName =()=>{
        console.log("Clicked")
        setname(value)
    }
    const inputHandler = (e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }
  return (
    <div>
        <Typography>Welcome {name}</Typography>
        <TextField label="Enter Name" variant="outlined" onChange={inputHandler}/><br/>
        <Button variant="contained" color="error" onClick={changeName}>change</Button>

    </div>
  )
}

export default Statebasics