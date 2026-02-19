import './flightSchedule.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function FlightSchedule() {
        const [show, setShow] = useState(
    {isShow: false, id: 0}
  )

  const [selected, setSelected] = useState('EN')

  const language = ['EN', 'UA', 'FR', 'ES']

  const toggleLanguage = () => {
    setShow(prev => ({...prev, isShow: !prev.isShow  , id: 0}))
  }
  
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerIsOpen(prev => !prev)
  }

  const closeHamburger = () => {
    setHamburgerIsOpen(false)
  }


    return(
        <>
           <section className="hero">
          <header>
      <p className="flyHigh">Fly<span className="high">High</span></p>
      
      <nav className="flyHighMenu">
        <Link className="flyHighMenuEl" to={'/'}>Home</Link>
        <Link className="flyHighMenuEl" to={'/holidayPackages'}>Holiday Packages</Link>
        <Link className="flyHighMenuEl" to={'/flightSchedule'}> Flight Schedule</Link>
        <Link className="flyHighMenuEl" to={'/accountSettings'}>Account Settings</Link>
        <Link className="flyHighMenuEl" to={'/manageBooking'}>Manage Booking</Link>
      </nav>

      <div className="registerButton">
        <Link className="registerBtn" to={'/signUp'}>Register</Link>
        <Link className="signInBtn" to={'/logIn'}>Sign In</Link>
        <button className="butonku" onClick={toggleLanguage}>
          {selected} <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1a1a1a"><path d="M480-360 280-560h400L480-360Z"/></svg>
        </button>
        {
          show.isShow && (
        <ul className="pageLanguage">
          {language.map((lang) => (
            <li className="language" key={lang}
            onClick={() => {
              setSelected(lang);
              setShow(false);
            }}
            style={{
              cursor: "pointer"
            }}
            >

            {lang}
            </li>
          ))}
        </ul>
          ) 
        }
      </div>

      <div className="hamburger">
      <button className="hamburgerLogo" onClick={toggleHamburger}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
    </div>
    </header>
    {hamburgerIsOpen && (
      <div className="hamburgerMenu">
        <div className="logoXCloseBtn">
        <button className="closeBtn" onClick={closeHamburger}>Close</button>
        <p className="flyHigh1">Fly<span className="high">High</span></p>         
        </div>

        <div className="registerButtons">
        <Link className="registerBtn" to={'/signUp'}>Register</Link>
        <Link className="signInBtn" to={'/logIn'}>Sign In</Link>
        </div>

        <nav>
        <Link className="flyHighMenuEl" to={'/'}>Home</Link>
        <Link className="flyHighMenuEl" to={'/holidayPackages'}>Holiday Packages</Link>
        <Link className="flyHighMenuEl" to={'/flightSchedule'}> Flight Schedule</Link>
        <Link className="flyHighMenuEl" to={'/accountSettings'}>Account Settings</Link>
        <Link className="flyHighMenuEl" to={'/manageBooking'}>Manage Booking</Link>
        </nav>

      </div>
      )}
    <main>
      <h1>FlightSchedule</h1>
    </main>
    </section>
        </>
    )
}

export default FlightSchedule