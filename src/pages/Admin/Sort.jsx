import { Button } from '@mui/base'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Sort({ employeesTablle, setEmployeesTable }) {
    const [desc, setDesc] = useState("")
    let handleClick = () => {
        let sortedEmployees
        if (desc) {
            sortedEmployees = employeesTablle.sort((a, b) => a.name.localCompare(b.name))
        }
        else {
            sortedEmployees = employeesTablle.sort((a, b) => b.name.localCompare(a.name))
            
        }
        setEmployeesTable([...sortedEmployees])
        setDesc(!desc)
    }
    return (
        <Button style={{marginLeft:'10px',border:'none',backgroundColor:'lightgray'}} onClick={handleClick}>
            <ArrowDropDownIcon/>
        </Button>
    )
}

export default Sort