import { useEffect, useState } from "react"
import { server } from "../../axiosInstances"

export default function RegistrationForm() {
    const [genders, setGenders] = useState([])
    
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
        console.log(registrationFormData)
    }
    function handleSubmit(event) {
        event.preventDefault()
        localStorage.setItem("registrationForm")
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" onChange={handleChange}/>
        <input type="text" placeholder="Last Name" onChange={handleChange}/>
        <input type="date" placeholder="Date Of Birth" max={new Date().toISOString().split("T")[0]} onChange={handleChange}/>
        {genders.map(gender => {
            return(
                <div key={gender}>
                    <input type="radio" id={gender} name="gender" value={gender} checked={registrationFormData.gender === gender} onChange={handleChange}/>
                    <label htmlFor={gender}>{gender}</label>
                </div>
            )
        })}
        <button>Continue To Visit</button>
    </form>
    )
}
