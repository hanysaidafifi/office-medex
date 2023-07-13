'use client'
import promoOfficeMedex from './assets/promo-officemedex.png'
import promoOfficeMedexNrw from './assets/promo-officemedex-nrw.png'
import './App.css'





function App() {
 
  const imageUrl = window.innerWidth >= 650 ? promoOfficeMedex : promoOfficeMedexNrw;

  return (
    <>
      <div>
        <a href="https://advancedpsychiatryassociates.com/" target="_blank">
          <img src={imageUrl} className="logo" alt="Office Medex promo" />
        </a>
      </div>
      <h1
      className='title'
      >Office Medex</h1>

    </>
  )
}

export default App
