import './App.css'
import RegistrationForm from './components/forms/RegistrationForm'
import {Link, Routes, Route} from  "react-router-dom"
import HomePage from './pages/HomePage'
import VisitForm from './components/forms/VisitForm'
import PatientSearchForm from './components/forms/PatientSearchForm'
import HomeNavbar from './components/navbar/HomeNavbar'
import PatientListing from './components/reports/PatientListing'
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeNavbar />}>
        <Route index element={<HomePage />}/>
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="patient-search" element={<PatientSearchForm/> } />
        <Route path="visit" element={<VisitForm/>} />
        <Route path="patient-listing" element={<PatientListing />} />
      </Route>
    </Routes>
  )
}

export default App
