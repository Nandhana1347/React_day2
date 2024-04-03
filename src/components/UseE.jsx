import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [name,setName] = useState()

    const changeHname = ()=>{
        setName("Home")
    }
    const changeGname = ()=>{
        setName("Gallery")
    }
    const changeCname = ()=>{
        setName("Contact")
    }

    useEffect(()=>{
        changeGname()
    },[])
  return (
    <div>
        <Typography>Welcome {name}</Typography>
        <Button variant="contained" color="error" onClick={changeHname}>Home</Button>
        <Button variant="contained" color="success" onClick={changeGname}>Gallery</Button>
        <Button variant="contained" color="warning" onClick={changeCname}>Contact</Button>
    </div>
  )
}

export default UseE