import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState,useRef } from "react";
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import Sort from './Sort';
import Filter from './Filter';





export default function AdminEmployees() {
  const [employeesTablle, setEmployeesTable] = useState([])
  const storage = useRef([])

  const fetchData = () => {
    fetch("http://localhost:3000/employees")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setEmployeesTable(data)
      storage.current = data



      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container maxWidth='lg'>
      <TableContainer style={{ marginTop: '5%' }} component={Paper}>
        <Table sx={{ minWidth: 600 }} style={{ textAlign: 'center' }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: 'lightgray' }}>
              <TableCell style={{ fontSize: '23px', fontFamily: 'Garamond' }}>
                Name
                <Filter storage={storage} setEmployeesTable={setEmployeesTable}/>

              </TableCell>
              <TableCell style={{ fontSize: '23px', fontFamily: 'Garamond' }} align="left"> Surname</TableCell>
              <TableCell style={{ fontSize: '23px', fontFamily: 'Garamond' }} align="left">Salary
                <Sort employeesTablle={employeesTablle} setEmployeesTable={setEmployeesTable} /></TableCell>
                <TableCell style={{ fontSize: '23px', fontFamily: 'Garamond' }} align="left">Buttons</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {employeesTablle.map((employee) => (
              <TableRow 
                key={employee.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{employee.name}</TableCell>
                <TableCell align="left">{employee.surname}</TableCell>
                <TableCell align="left">{employee.salary}</TableCell>
                <TableCell>
                <Button style={{color:''}}>EDIT</Button>
                <Button>Delete</Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}