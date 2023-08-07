import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/forms/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
      <RegistrationForm />
    </div>
  )
}

export default App
