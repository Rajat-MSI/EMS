import {useNavigate} from "react-router-dom";

export default function EmployeeListItem({employee})
{
    const navigate = useNavigate();
    const updateEmployeeText = "Update";
    function updateEmployee(id)
    {
        navigate(`/update-employee/${id}`);
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card my-2 shadow-sm">
                <div className="card-title h6 p-2 border-bottom">
                    EMPLOYEE ID - {employee.id}
                    <div className="float-end">
                        <button className="btn btn-success" onClick={() => updateEmployee(employee.id)}>
                            <i className="bi bi-arrow-repeat pe-1"></i>
                            {updateEmployeeText}
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