import { TextField } from '@mui/material'
import React from 'react'

const Searchinput = ({onSearchChange}: any) => {
    return (

        <TextField sx={{
            width: '50%'
        }} onChange={onSearchChange} size="small" placeholder='Search by name or number'/>
    )
}

export default Searchinput