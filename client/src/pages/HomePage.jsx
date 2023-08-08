import React from 'react'
import {Link} from "react-router-dom"
import "../pages/HomePage.css"

export default function HomePage() {
  return (
    <div>
      <div id="home-menu">
        <Link to="/registration"><button className="home-menu-item">Add Patient</button></Link>
        <Link to="/patient-search"><button className="home-menu-item">Record Visit</button></Link>
        <Link to="/patient-listing"><button className="home-menu-item">Patient Listing</button></Link>
      </div>
    </div>
    
  )
}
