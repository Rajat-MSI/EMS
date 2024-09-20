import EmployeeListItem from "./EmployeeListItem.jsx";
import {useEffect, useState} from "react";
import {getAllEmployees} from "../service/EmployeeService.js";
import PageTitle from "./PageTitle.jsx";
import Search from "./Search.jsx";
import CustomAlert from "./CustomAlert.jsx";

export default function EmployeeList({pageTitle}) {
    const [employee, setEmployee] = useState([]);

    function getEmployeeList()
    {
        getAllEmployees().then(response => {
            setEmployee(response.data);
        }).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        getEmployeeList();
    }, []);

    return (
        <div>
            <PageTitle pageTitle={pageTitle}/>
            <Search/>
            <CustomAlert alertMessage="error" alertType="danger"/>
            <div className="row">
                {
                    employee.map(employee =>
                        <EmployeeListItem employee={employee} getEmployeeList={getEmployeeList} key={employee.id}/>
                    )
                }
            </div>
        </div>
    );
}