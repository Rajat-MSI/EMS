import PageTitle from "./PageTitle.jsx";
import {useEffect, useState} from "react";
import {getEmployee, saveEmployee} from "../service/EmployeeService.js";
import {useParams} from "react-router-dom";

export default function AddEmployee({pageTitle}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [errors,setErrors] = useState({
        firstName : "",
        lastName: "",
        email : "",
    })

    const {id} = useParams();

    useEffect(() => {
        if(id)
        {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [id]);

    function saveEmployeeForm(e)
    {
        e.preventDefault();
        if(validateForm())
        {
            const employee = {firstName,lastName,email};
            saveEmployee(employee).then(response => console.log(response.data));
        }
    }

    function validateForm()
    {
        let validate = true;
        const errorCopy = {... errors};
        if(firstName.trim())
        {
            errorCopy.firstName = '';
        }
        else
        {
            errorCopy.firstName = "Enter your first name";
            validate = false;
        }

        if(lastName.trim())
        {
            errorCopy.lastName = '';
        }
        else
        {
            errorCopy.lastName = "Enter your last name";
            validate = false;
        }

        if(email.trim())
        {
            errorCopy.email = '';
        }
        else
        {
            errorCopy.email = "Enter your email";
            validate = false;
        }
        setErrors(errorCopy);
        return validate;
    }
    let buttonText = "Register";

    if (id) {
        buttonText = "Update";
    }

    return (
        <div>
            <PageTitle pageTitle={pageTitle}/>
            <div className="col-lg-6 offset-lg-3 my-2">
                <form onSubmit={saveEmployeeForm}>
                    <div className="form-group my-2">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            className={`form-control shadow-none border ${errors.firstName ? 'is-invalid' : ''}`}
                            placeholder="Enter your first name"
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                            // required
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            className={`form-control shadow-none border ${errors.lastName ? 'is-invalid' : ''}`}
                            placeholder="Enter your last name"
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            // required
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className={`form-control shadow-none border ${errors.email ? 'is-invalid' : ''}`}
                            placeholder="Enter your email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            // required
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="form-group my-4">
                        <button className="btn btn-success shadow-none border-success form-control">{buttonText}</button>
                    </div>
                </form>
            </div>

        </div>
    );
}