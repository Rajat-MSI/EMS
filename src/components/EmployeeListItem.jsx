import {useNavigate} from "react-router-dom";
import {deleteEmployeeById} from "../service/EmployeeService.js";

export default function EmployeeListItem({employee, getEmployeeList}) {
    const navigate = useNavigate();

    // const updateEmployeeText = "Update";
    function updateEmployee(id) {
        navigate(`/update-employee/${id}`);
    }

    function deleteEmployee(id) {
        deleteEmployeeById(id).then((response) => {
            getEmployeeList();
            console.log(response.data);
        }).catch((error) => console.log(error));
        console.log(id);
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card my-2 shadow-sm">
                <div className="card-title h6 p-2 border-bottom">
                    EMPLOYEE ID - {employee.id}
                    <div className="float-end">
                        <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>
                            <i className="bi bi-trash3 h6"></i>
                            {/*<div className="h6 m-0">{updateEmployeeText}</div>*/}
                        </button>
                    </div>
                    <div className="float-end me-1">
                        <button className="btn btn-success" onClick={() => updateEmployee(employee.id)}>
                            <i className="bi bi-arrow-repeat h6"></i>
                            {/*<div className="h6 m-0">{updateEmployeeText}</div>*/}
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="h6">First name - {employee.firstName}</div>
                    <div className="h6">Last name - {employee.lastName}</div>
                    <div className="h6">Email - {employee.email}</div>
                </div>
            </div>
        </div>
    );
}