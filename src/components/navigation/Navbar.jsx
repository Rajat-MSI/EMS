import {useNavigate} from "react-router-dom";
import NavButton from "./NavButton.jsx";

export default function Navbar()
{
    const navigate = useNavigate();

    function addEmployee() {
        navigate("/add-employee");
    }

    function employeeList() {
        navigate("/employee-list");
    }

    const addEmployeeText = "bi bi-person-fill-add";
    const employeeListText = "bi bi-person-lines-fill";
    const settingsText = "bi bi-gear-fill";

    return (
        <nav className="navbar bg-dark border-bottom border-body shadow-sm fixed-top" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="#"><i className="bi bi-pc-display-horizontal"></i> E-Systems</a>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item border-1 px-0">
                        <NavButton method={employeeList} text={employeeListText}/>
                    </li>
                    <li className="list-group-item border-1 px-0">
                        <NavButton method={addEmployee} text={addEmployeeText}/>
                    </li>
                    <li className="list-group-item border-1 px-0">
                        <NavButton method={employeeList} text={settingsText}/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}