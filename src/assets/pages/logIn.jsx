import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './logIn.css'
import FormatForm from "./StatefulForm"

function LogIn() {
    const [show, setShow] = useState(
      {isShow: false, id: 0}
    )
  
    const [selected, setSelected] = useState('EN')
  
    const language = ['EN', 'UA', 'FR', 'ES']
  
    const toggleLanguage = () => {
      setShow(prev => ({...prev, isShow: !prev.isShow  , id: 0}))
    }

    const [click, setClick] = useState(false)
    const [inputEmailSignUp, sesinputEmailSignUp] = useState('')
    const [inputPasswordSignUp, sesinputPasswordSignUp] = useState('')

    const tuggleBuggle = () => {
      if(inputEmailSignUp.trim() === '' || inputPasswordSignUp.trim() === '' || inputEmailSignUp.length < 10 || inputPasswordSignUp < 10) {
        setClick(false)
        return
      }

      setClick(!click)
      sesinputEmailSignUp('')
      sesinputPasswordSignUp('')
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
    <main className="main1">
      {/* <div className="signUp">
        <h1 className="sign">Log In</h1>
        <input className="signUpEmail" type="email" value={inputEmailSignUp} onChange={(e) => sesinputEmailSignUp(e.target.value)} placeholder="Email...."/>
        <input className="signUpPassword" type="password" value={inputPasswordSignUp} onChange={(e) => sesinputPasswordSignUp(e.target.value)} placeholder="MaxHofffman133432"/>
        <button className="signUpButton" onClick={tuggleBuggle}>
          {click ? 'Request have sended' : 'Log In'}
        </button>
      </div> */}

    <FormatForm />
    </main>
        </section>
        </>
    )
}

export default LogIn