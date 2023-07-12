import { useState } from 'react'
import promoOfficeMedex from './assets/promo-officemedex.png'
import advpsyLogo from './assets/advancedpsych-logoonly.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://advancedpsychiatryassociates.com/" target="_blank">
          <img src={promoOfficeMedex} className="logo" alt="Office Medex promo" />
        </a>
      </div>
      <h1>Office Medex</h1>

    </>
  )
}

export default App
