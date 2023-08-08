import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../navbar/HomeNavbar.css"

export default function HomeNavbar() {
  return (
    <>
        <nav className="home-navbar">
          <h1 id="home-navbar-title"><Link to="/">Patient Visit System</Link></h1>
          <Link to="/">Back To Home</Link>
        </nav>
        <Outlet />
    </>
  )
}