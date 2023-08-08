import { useState, useEffect } from 'react'
import { server } from '../../axiosInstances'
import "../reports/PatientListing.css"
export default function PatientListing() {

   const [patients, setPatients] = useState([])

    const [patientListingForm, setPatientListingForm] = useState({
        date: new Date().toISOString().split("T")[0]
    })


    // Get the patients by the regsitration date
    useEffect(() => {
        server.get(`patients/get/registrationDate/${patientListingForm.date}`)
        .then(response => setPatients(response.data))
        .then(setPatients(prevPatients => (
            prevPatients.sort((a,b) => new Date(a.dateOfVisit) - new Date(b.dateOfVisit))
        )))
    }, [patientListingForm.date])

    function PatientListingRow(props) {
        const {firstName, lastName, visits, dateOfBirth} = props.patient
        return (
            <tr>
                <td>{firstName} {lastName}</td>
                <td>{calculateAge(dateOfBirth)}</td>
                <td>{visits[0].bmiStatus}</td>
            </tr>
        )
    }


    function calculateAge(birthDateString) {
        const today = new Date();
        const birthDate = new Date(birthDateString)
      
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
      
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
      
        return age;
      }

    function handleChange(event) {
        const { name, value } = event.target
        setPatientListingForm(prevPatientListingForm => ({
            ...prevPatientListingForm,
            [name]: value
        }))
    }
    return (
        <div>
            <h3 class="sub-title">Patient Listing</h3>
            <form>
                <div class="input-with-label" id="date-input-and-label-filter">
                    <label hmtlFor="date">Date</label>
                    <input id="date" type="date" name="date" value={patientListingForm.date} onChange={handleChange} max={new Date().toISOString().split("T")[0]} />
                </div>
            </form>
            {
                patients.length === 0 ?
                <p class="empty-info">No patients have been registered on {patientListingForm.date}</p>:
                <table>
                    <thead>
                        <tr>
                            <th>Full Names</th>
                            <th>Age</th>
                            <th>BMI Status</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {patients.map(patient => <PatientListingRow key={patient.id} patient={patient} />)}
                    </tbody>
                </table>
            }
        </div>

    )
}
