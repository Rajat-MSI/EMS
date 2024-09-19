import {Navigate, Route, Routes} from "react-router-dom";
import EmployeeList from "./EmployeeList.jsx";
import AddEmployee from "./AddEmployee.jsx";

export default function Content()
{
    const titleEmployeeList = "Employee List";
    const titleAddEmployee = "Register Employee";
    const titleUpdateEmployee = "Update Employee";

    return (
        <div className="container" style={{marginTop:"5em"}}>
            <Routes>
                <Route path="/" element={<Navigate to="employee-list" replace={true}/>}/>
                <Route path="/employee-list" element={<EmployeeList pageTitle={titleEmployeeList}/>}/>
                <Route path="/add-employee" element={<AddEmployee pageTitle={titleAddEmployee}/>}/>
                <Route path="/update-employee/:id" element={<AddEmployee pageTitle={titleUpdateEmployee}/>}/>
            </Routes>
        </div>
    );
}