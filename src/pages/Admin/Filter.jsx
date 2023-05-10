import { Input } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';

function Filter({storage,setEmployeesTable}) {
    let handleSearch=(e)=>{
        const filter=storage.current.filter(x=> x.name.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        setEmployeesTable(filter)
    }

  return (
    <Input style={{width:'30%',marginLeft:'10px'}} size="small" placeholder="search" onChange={handleSearch} prefix={<UserOutlined />} />
  )
}

export default Filter