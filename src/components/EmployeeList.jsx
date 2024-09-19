import EmployeeListItem from "./EmployeeListItem.jsx";
import {useEffect, useState} from "react";
import {getAllEmployees} from "../service/EmployeeService.js";
import PageTitle from "./PageTitle.jsx";
import Search from "./Search.jsx";

export default function EmployeeList({pageTitle}) {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        getAllEmployees().then(response => {
            setEmployee(response.data);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <div>
            <PageTitle pageTitle={pageTitle}/>
            <Search/>
            <div className="row">
                {
                    employee.map(employee =>
                        <EmployeeListItem employee={employee} key={employee.id}/>
                    )
                }
            </div>
        </div>
    );
}