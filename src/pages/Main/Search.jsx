import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd'


function Search({ storage, setEmployees }) {
    let handleChange = (e) => {
        const filterEmployees=storage.current.filter(x=>x.name.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        setEmployees(filterEmployees)
    }
    return (

        <Input size="large" onChange={handleChange} style={{ margin: '25px' }} placeholder="Search..." prefix={<UserOutlined />} />


    )
}

export default Search