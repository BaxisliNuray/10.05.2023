import axios from "axios";
import { BASE_URL } from "./base_url";


// get all employees 

export const getAllEmployees = async() => {
    let globalData;
    await axios.get(`${BASE_URL}/employees`)
        .then(resp => {
            globalData = resp.data
        })
        return globalData
}
//get employee by id
export const getEmployeebyId = async (id) => {
    let globalData
    await axios.get(`${BASE_URL}/employees/${id}`)
        .then(resp => {
            globalData = resp.data

        })
    return globalData
}
//post new employee
export const postEmployee = async (newEmployee) => {
    axios.post(`${BASE_URL}/employees`, newEmployee)
}

//delete employee by id
export const deleteEmployeeByID = (id) => {
    axios.delete(`${BASE_URL}/employees/${id}`)
}
//edit employee by id
export const editEmployeeByID = (id, editEmployee) => {
    axios.put(`${BASE_URL}/employees/${id}`, editEmployee)
}