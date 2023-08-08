import React from 'react'
import {Link} from "react-router-dom"
export default function HomePage() {
  return (
    <div>
      <div id="menu">
        <Link to="/registration"><button>Add Patient</button></Link>
        <Link to="/patient-search"><button>Record Visit</button></Link>
        <Link to="/patient-listing"><button>Patient Listing</button></Link>
      </div>
    </div>
    
  )
}
