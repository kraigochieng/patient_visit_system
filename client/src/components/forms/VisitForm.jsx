import React, { useEffect, useState } from 'react'
import { server } from '../../axiosInstances'

export default function VisitForm() {
  const[generalHealthOptions, setGeneralHealthOptions] = useState([])

  const [BMI, setBMI] = useState(0);
  const [patientDetails, setPatientDetails] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: ""
  })

  useEffect(()=> {
    // Set general health options
    server.get("general_health/get")
    .then(response => setGeneralHealthOptions(response.data))
    .catch(error => console.error(error))
    // Set patient details through session storage
    setPatientDetails(JSON.parse(sessionStorage.getItem("patientDetails")))
  }, [])

  async function postPatient(patientForm) {
    let response = await server.post("patients/post", patientForm)
    return response.data
  }
  async function postVisit(patientId, visitForm) {
    let response = await server.post(`visits/post/${patientId}`, visitForm)
    return response.data
  }

  async function postQuestionnaire(visitId, visitForm) {
    let response = await server.post(`questionnaires/post/${visitId}`, visitForm)
    return response.data
  }

  const [visitFormData, setVisitFormData] = useState({
    isPatientRegistered: false,
    patient: {},
    height: "",
    weight: "",
    dateOfVisit: new Date().toISOString().split("T")[0],
    generalHealth: "",
    onDrugs: "",
    onDietToLoseWeight: "",
    comments: "",
  })

  // Calculate BMI in case height or weight changes...
  useEffect(() => {
    setBMI((visitFormData.weight / ((visitFormData.height /100) ** 2)).toFixed(1))
  }, [visitFormData.height, visitFormData.weight])


  async function handleSubmit(event) {
    event.preventDefault()
  
    if(patientDetails.id) { // if patient was a previous patient
      let visit = await postVisit(patientDetails.id, visitFormData)
      console.log(visit)
      let questionnaire = await postQuestionnaire(visit.id, visitFormData)
      console.log(questionnaire)
    } else { // if new patient
      let patient = await postPatient(patientDetails)
      console.log(patient)
      let visit = await postVisit(patient.id, visitFormData)
      console.log(visit)
      let questionnaire = await postQuestionnaire(visit.id, visitFormData)
      console.log(questionnaire)
    }
  }

  

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setVisitFormData(prevVisitFormData => ({ ...prevVisitFormData, [name]: type === "checkbox" ? checked : value }))
  }

  return (
    <>
    <h1>Visit Record</h1>
    <div>
      <h2>Patient Details</h2>
      <p>First Name: {patientDetails.firstName}</p>
      <p>Last Name: {patientDetails.lastName}</p>
      <p>Gender: {`${patientDetails.gender.charAt(0)}${patientDetails.gender.slice(1).toLowerCase()}`}</p>
      <p>Date Of Birth: {patientDetails.dateOfBirth}</p>
    </div>
      <form onSubmit={handleSubmit}>
        <h2>Visit Form</h2>
        <div>
          <label htmlFor="dateOfBirth">Date Of Visit</label>
          <input type="date" id="dateOfBirth" name="dateOfVisit" value={visitFormData.dateOfVisit} onChange={handleChange} max={new Date().toISOString().split("T")[0]} />
        </div>
        <div>
          <label htmlFor="">Height&#40;cm&#41;</label>
          <input type="number" id="height" name="height" value={visitFormData.height} onChange={handleChange} placeholder="Height(cm)" inputMode="numeric" min="0" />
        </div>
        <div>
          <label htmlFor="weight">Weight&#40;kg&#41;</label>
          <input type="number" id="weight" name="weight" value={visitFormData.weight} onChange={handleChange} placeholder="Weight(kg)" inputMode="numeric" min="0" />
        </div>
        
        {
          !isNaN(BMI) && BMI != 0 &&
          <>
            <div>
              <label htmlFor="BMI">BMI</label>
              <input id="BMI" disabled value={BMI} />
            </div>
            <div id="questionnaire">
              <label>General Health?</label>
              {
                generalHealthOptions.map(option => (
                  <div key={option}>
                    <input type="radio" id={option} name="generalHealth" value={option} checked={visitFormData.generalHealth == option} onChange={handleChange}/>
                    <label htmlFor={option}>{`${option.charAt(0)}${option.slice(1).toLowerCase()}`}</label>
                  </div>
                ))
              }
              {
                BMI < 25 ?
                <div>
                  <label>Have you ever been on diet to loose weight?</label>
                  <div>
                    <input type="radio" id="on-diet-true" name="onDietToLoseWeight" value="true" checked={visitFormData.onDietToLoseWeight == "true"} onChange={handleChange}/>
                    <label htmlFor="on-diet-true">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="on-diet-false" name="onDietToLoseWeight" value="false" checked={visitFormData.onDietToLoseWeight == "false"} onChange={handleChange}/>
                    <label htmlFor="on-diet-false">No</label>
                  </div>
                </div> :
                <div>
                  <label>Are you currently taking any drugs?</label>
                  <div>
                    <input type="radio" id="on-drugs-true" name="onDrugs" value="true" checked={visitFormData.onDrugs == "true"} onChange={handleChange}/>
                    <label htmlFor="on-drugs-true">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="on-drugs-false" name="onDrugs" value="false" checked={visitFormData.onDrugs == "false"} onChange={handleChange}/>
                    <label htmlFor="on-drugs-false">No</label>
                  </div>
                </div>
              }
              <textarea placeholder="Comments" name="comments" value={visitFormData.comments} onChange={handleChange}></textarea>
            </div>  
          </>
        }
        <button>Submit Visit</button>
      </form>
    </>

  )
}
