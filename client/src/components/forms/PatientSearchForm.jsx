import React, { useEffect, useState } from 'react'
import { server } from '../../axiosInstances'
import { Link, useNavigate } from 'react-router-dom'
export default function PatientSearchForm() {
    const navigate = useNavigate()
    const [patients, setPatients] = useState([])

    const [patientSearchForm, setPatientSearchForm] = useState({
        name: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setPatientSearchForm(prevPatientSearchForm => ({
            ...prevPatientSearchForm,
            [name]: value,
        }))
    }
    useEffect(() => {
        server.get("patients/get")
            .then(response => {
                setPatients(response.data)
            })
            .catch(error => console.error(error))
    }, [])

    function PatientDetails(props) {
        const {firstName, lastName, dateOfBirth, gender} = props.patient
        function setLocalStorage() {
            sessionStorage.setItem("patientDetails", JSON.stringify(props.patient))
            navigate("/visit")
        }
        return (
            <div >
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Date Of Birth: {dateOfBirth}</p>
                <p>Gender: {gender}</p>
                <button onClick={setLocalStorage}>Continue To Visit</button>
            </div>
        )
    }
    
    return (
        <>
            <h3 class="sub-title">Patient Search</h3>
            <form>
                <div className="input-with-label">
                    <label htmlFor="name">Patient Search</label>
                    <input id="name"type="text" name="name" value={patientSearchForm.name} placeholder="Any Patient Name" onChange={handleChange}/>
                </div>
            </form>
            {
                (() => {
                    if(patientSearchForm.name.length === 0 && patients.length > 0) { // if seacrh bar is blank...
                        return patients.map(patient => <PatientDetails key={patient.id} patient={patient}/>) // return all patients
                    } else { // if search bar has text...
                        const filteredPatients = patients.filter(patient => // filter
                            `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(patientSearchForm.name.toLowerCase() || // if first name comes first in search bar
                            `${patient.lastName} ${patient.firstName}`.toLowerCase().includes(patientSearchForm.name.toLowerCase())) // if last name comes first in search bar
                            ).map(patient => <PatientDetails key={patient.id} patient={patient}/>)
                        if(filteredPatients.length > 0) { // if names are found...
                            return filteredPatients // return te patients found
                        } else { // else
                            return <p>Patient Not Found...<Link to="/registration">Register Patient</Link></p> // return the link to regster patient if not found
                        }
                    }
                })()
            }
        </>
    )
}
