import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HomeNavbar() {
  return (
    <>
        <h1>Patient Visit System</h1>
        <Link to="/">Back To Home</Link>
        <Outlet />
    </>
  )
}