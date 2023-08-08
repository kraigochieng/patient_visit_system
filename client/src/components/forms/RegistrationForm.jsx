import { useEffect, useState } from "react"
import { server } from "../../axiosInstances"
import { Link, useNavigate } from "react-router-dom"
import "../forms/RegistrationForm.css"
export default function RegistrationForm() {
    const [genders, setGenders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        server.get("genders/get")
            .then(response => setGenders(response.data))
            .catch(error => console.error(error))
    }, [])
    
    const [registrationFormData, setRegistrationFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: ""
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setRegistrationFormData(prevRegistrationFormData => ({
            ...prevRegistrationFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    function handleSubmit(event) {
        event.preventDefault()
        sessionStorage.setItem("patientDetails", JSON.stringify(registrationFormData))
        navigate("/visit")
    }

    return (
        <>
            <h3 id="patient-registration-title" class="sub-title">Patient Registration</h3>
            <Link to="/patient-search"><button>Patient Already Exists?</button></Link>
            <form onSubmit={handleSubmit}>
                <div className="input-with-label">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" name="firstName" value={registrationFormData.firstName} placeholder="First Name" onChange={handleChange}/>
                </div>
                <div className="input-with-label">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={registrationFormData.lastName} placeholder="Last Name" onChange={handleChange}/>
                </div>
                <div className="input-with-label">
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                    <input type="date" name="dateOfBirth" value={registrationFormData.dateOfBirth} placeholder="Date Of Birth" max={new Date().toISOString().split("T")[0]} onChange={handleChange}/>
                </div>
                <div className="input-with-label">
                    <label>Gender</label>
                    {genders.map(gender => {
                        return(
                            <div key={gender}>
                                <input type="radio" id={gender} name="gender" value={gender} checked={registrationFormData.gender === gender} onChange={handleChange}/>
                                <label htmlFor={gender}>{gender}</label>
                            </div>
                        )
                    })}
                </div>

                <button>Continue To Visit</button>
            </form>

        </>
    )
}
