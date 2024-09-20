import axios from "axios";

const BASE_URL = "http://localhost:8080/api/employee";

export const getAllEmployees = () => axios.get(BASE_URL + "/");
export const saveEmployee =  (employee) => axios.post(BASE_URL + "/",employee);
export const getEmployee = (id) => axios.get(BASE_URL + "/" + id)
export const updateEmployee = (employee,id) => axios.put(BASE_URL + "/" + id,employee);
export const deleteEmployeeById = (id) => axios.delete(BASE_URL + "/" + id);