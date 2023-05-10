import React, { useEffect, useRef, useState } from 'react'
import { getAllEmployees } from '../../api/httprequests'
import { Button, Container } from '@mui/material'
import { Card, Col, Row } from 'antd'
import Search from './Search'



function Employees() {
  let [employees, setEmployees] = useState([])
  const storage = useRef([])
  useEffect(() => {
    getAllEmployees().then(data => {
      setEmployees(data)
      storage.current = data
    })
  }, [])
  return (


    <Container maxWidth='lg' >
      <Row style={{ marginTop: '3%' }}
        gutter={{
          xs: 4,
          sm: 8,
          md: 16,
          lg: 24,

        }}>

        <Search storage={storage} setEmployees={setEmployees} />
        {employees && employees.map((employee) => {
          return <Col className="gutter-row" span={6}>
            <Card style={{ width: '300', marginBottom: '20px',position:'relative' }}

            >
              <p style={{ fontWeight: '600', fontSize: '20px', fontFamily: 'Garamond' }}>{employee.name} {employee.surname}</p>
              <p style={{ borderBottom: '2px solid #eb785a', width: '25%' }}></p>
              <p style={{ fontWeight: '600', fontSize: '16px', marginTop: '20px' }}><span style={{ color: 'gray' }} >Position: </span>{employee.position}</p>
              <p style={{ fontWeight: '600', fontSize: '15px' }}><span style={{ color: 'gray' }} >Salary: </span>{employee.salary}</p>
              <p style={{ fontWeight: '600', fontSize: '15px' }}><span style={{ color: 'gray' }} >Age: </span>{employee.age}</p>
              <Button style={{color:'#eb785a',position:'absolute',right:'10%',bottom:'0%'}}>ADD</Button>

            </Card>
          </Col>
        })}

      </Row>
    </Container>
  )
}

export default Employees