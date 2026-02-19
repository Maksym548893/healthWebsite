import { useState } from "react"
import { Link } from "react-router-dom"
import './home.css'
import './statefulForm.css'
function Home() {
  const [show, setShow] = useState(
    {isShow: false, id: 0}
  )

  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerIsOpen(prev => !prev)
  }

  const closeHamburger = () => {
    setHamburgerIsOpen(false)
  }


  const [selected, setSelected] = useState('EN')

  const language = ['EN', 'UA', 'FR', 'ES']

  const toggleLanguage = () => {
    setShow(prev => ({...prev, isShow: !prev.isShow  , id: 0}))
  } 

    const [showType, setShowType] = useState(
    {isShow1: false, id: 0}
  )
    const [showPassengers, setShowPassengers] = useState(
    {isShow2: false, id: 0}
  )
    const [showClass, setShowClass] = useState(
    {isShow3: false, id: 0}
  )

  const [showDayOfWeek, setShowDayOfWeek] = useState(
    {isShow4: false, id: 0}
  )

  const [showMonthOfYear, setShowMonthOfYear] = useState(
    {isShow5: false, id: 0}
  )

  const [showDayOfMonth, setShowDayOfMonth] = useState(
    {isShow6: false, id: 0}
  )

  const [showDayOfMonth1, setShowDayOfMonth1] = useState(
    {isShow7: false, id:0}
  )

  const [showMonthOfYear1, setShowMonthOfYear1] = useState(
    {isShow8: false, id: 0}
  )

  const [showDayOfWeek1, setShowDayOfWeek1] = useState(
    {isShow9: false, id: 0}
  )


    const [selected1, setSelected1] = useState('Round Trip')
    const tipsType = ['Round Trip', 'One Way', 'Multi-City']

    const [selected2, setSelected2] = useState('1 Passengers')
    const howPasssengers = ['1 Passengers', '2 Passengers', '3 Passengers', '4 Passengers']

    const [selected3, setSelected3] = useState('Business Class')
    const classOfPlace = ["Business Class", "Medium Class", "Econom Class"]

    const [selectedDay, setSelectedDay] = useState('Mon')
    const dayToSelect = [  
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat']

    const [selectedDay1, setSelectedDay1] = useState('Mon')
    const dayToSelect1 = [  
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat']

  const [selectedMonth, setSelectedMonth] = useState('Jan')
  const monthToSelect = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
  ]

  const [selectedMonth1, setSelectedMonth1] = useState('Jan')
  const monthToSelect1 = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
  ]

  const [selectNumberDay, setSelectNumberDay] = useState(1) 
  const numberDayToSelect = Array.from({length: 31}, (_, i) => i + 1)

  const [selectNumberDay1, setSelectNumberDay1] = useState(1) 
  const numberDayToSelect1 = Array.from({length: 31}, (_, i) => i + 1)

    const toggleType = () => {
      setShowType(prev => ({...prev, isShow1: !prev.isShow1, id:0}))
    }

    const TogglePassengers = () => {
      setShowPassengers(prev => ({...prev , isShow2: !prev.isShow2, id:0}))
    }

    const ToggleClass = () => {
      setShowClass(prev => ({...prev, isShow3: !prev.isShow3, id:0}))
    }

    const ToggleDayOfTheWeek = () => {
      setShowDayOfWeek(prev => ({...prev, isShow4: !prev.isShow4, id:0}))
    }

    const ToggleMonthOfTheYear = () => {
      setShowMonthOfYear(prev => ({...prev, isShow5: !prev.isShow5, id:0}))
    }

    const ToggleDayOfTheMonth = () => {
      setShowDayOfMonth(prev => ({...prev, isShow6: !prev.isShow6, id:0}))
    }

    const ToggleDayOfTheWeek1 = () => {
      setShowDayOfWeek1(prev => ({...prev, isShow9: !prev.isShow9, id:0}))
    }

    const ToggleMonthOfTheYear1 = () => {
      setShowMonthOfYear1(prev => ({...prev, isShow8: !prev.isShow8, id:0}))
    }

    const ToggleDayOfTheMonth1 = () => {
      setShowDayOfMonth1(prev => ({...prev, isShow7: !prev.isShow7, id:0}))
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
      <div className="wrapperResult">
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
      

      </div>

          <div className="hamburger">
      <button className="hamburgerLogo" onClick={toggleHamburger}><svg className="  " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
    </div>
    </header>
          {hamburgerIsOpen && (
      <div className="hamburgerMenu">
        <div className="hamburgerMenuMenu">
          <div className="highSide">
        <div className="logoXCloseBtn">
        <button className="closeBtn" onClick={closeHamburger}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
        <p className="flyHigh1">Fly<span className="high">High</span></p>         
        </div>
        <div className="registerButtons">
        <Link className="registerBtn1" to={'/signUp'}>Register</Link>
        <Link className="signInBtn2" to={'/logIn'}>Sign In</Link>
        </div>
          </div>
          
          <hr className="hrLinie"/>

        <nav className="menuInHamburger">
        <Link className="flyHighMenuEl1" to={'/'}>Home <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></Link>
        <hr />
        <Link className="flyHighMenuEl1" to={'/holidayPackages'}>Holiday Packages <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></Link>
        <hr />
        <Link className="flyHighMenuEl1" to={'/flightSchedule'}> Flight Schedule <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></Link>
        <hr />
        <Link className="flyHighMenuEl1" to={'/accountSettings'}>Account Settings <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></Link>
        <hr />
        <Link className="flyHighMenuEl1" to={'/manageBooking'}>Manage Booking <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>  </Link>
        <hr />
        </nav>

      </div>
        </div>
      )}
    <main>
        <h1 className="buddyText">Hey Buddy! where are you <br />
        <span className="bolderFlying">Flying</span> to</h1>

        <Link className="explorCity" to={'/exploreCity'}>Explore Now <svg className="continueArrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1a1a1a"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></Link>
    </main>
    <div className="threePunkt">
      <button className="thisIs1"><svg className="planer" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#1a1a1a"><path d="m397-115-99-184-184-99 71-70 145 25 102-102-317-135 84-86 385 68 124-124q23-23 57-23t57 23q23 23 23 56.5T822-709L697-584l68 384-85 85-136-317-102 102 26 144-71 71Z"/></svg>Flight</button>
      <button className="thisIs2"><svg className="planer" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#1a1a1a"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>Hotel</button>
      <button className="thisIs3"><svg className="planer" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#1a1a1a"><path d="M320-680q-50 0-85-35t-35-85q0-50 35-85t85-35q38 0 69 22.5t45 57.5h326v80h-40v80h-80v-80H434q-14 35-45 57.5T320-680Zm0-80q17 0 28.5-11.5T360-800q0-17-11.5-28.5T320-840q-17 0-28.5 11.5T280-800q0 17 11.5 28.5T320-760Zm40 500q17 0 28.5-11.5T400-300q0-17-11.5-28.5T360-340q-17 0-28.5 11.5T320-300q0 17 11.5 28.5T360-260Zm240 0q17 0 28.5-11.5T640-300q0-17-11.5-28.5T600-340q-17 0-28.5 11.5T560-300q0 17 11.5 28.5T600-260ZM200-376l66-192q5-14 16.5-23t25.5-9h344q14 0 25.5 9t16.5 23l66 192v264q0 14-9 23t-23 9h-16q-14 0-23-9t-9-23v-48H280v48q0 14-9 23t-23 9h-16q-14 0-23-9t-9-23v-264Zm106-64h348l-28-80H334l-28 80Zm-26 80v120-120Zm0 120h400v-120H280v120Z"/></svg>Rent a Car</button>
    </div>

    <div className="longSearchBar">
      <div className="firstPart">
    <div className="BlockOurBlock">
            <button onClick={toggleType} className="roundTrip">{selected1}<svg className="arrowRarow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-360 280-560h400L480-360Z"/></svg></button>
      {
        showType.isShow1 && (
          <ul className="dropDown1">
            {tipsType.map((type) => (
              <li className="clasClass" key={type} onClick={() => {
                setSelected1(type);
                setShowType(prev => ({...prev, isShow1:false}));
                }}
                style={{
                  cursor: "pointer"
                }}
                >  
                {type}
              </li>
            ))}
          </ul>
        )
      }
      </div>
      <div className="BlockOurBlock">    
      <button onClick={TogglePassengers} className="roundTrip">{selected2}<svg className="arrowRarow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-360 280-560h400L480-360Z"/></svg></button>
      {
        showPassengers.isShow2 && (
          <ul className="dropDown2">
            {howPasssengers.map((passengers) => (
              <li className="clasClass" key={passengers} onClick={() => {
                setSelected2(passengers)
                setShowPassengers(prev => ({...prev, isShow2: false}))
              }}
              style={{
                cursor: "pointer"
              }}
              >
                {passengers}
              </li>
            ))}
          </ul>
        )
      }
      </div>
      <div className="BlockOurBlock">  
      <button onClick={ToggleClass} className="roundTrip">{selected3}<svg className="arrowRarow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-360 280-560h400L480-360Z"/></svg></button>
      {
      showClass.isShow3 && (
        <ul className="dropDown3">
          {classOfPlace.map((clas) => (
            <li className="clasClass" key={clas} onClick={() => {
              setSelected3(clas)
              setShowClass(prev => ({...prev, isShow3: false}))
            }}>{clas}</li>
          ))}
        </ul>
      )}
      </div>
      </div>

      <div className="secondPart">
      {selected1 === 'One Way' && (
        <div className="formFrom">
          <p className="toTo">From</p>
          <h2 className="behancE">Behance</h2>
          <p className="startdestination">BHN, North America, USA</p>
        </div>
      )}
        

      {selected1 === 'Round Trip' && (
        <>
        <div className="twentyto">
        <div className="formFrom">
          <p className="toTo">From</p>
          <h2 className="behancE">Behance</h2>
          <p className="startdestination">BHN, North America, USA</p>
        </div>
        <div className="formFrom">
          <p className="toTo">To</p>
          <h2 className="behancE">Dribble</h2>
          <p className="startdestination">DRB, Cape Town, South Africa</p>
        </div>
        </div>
        </>
      )}

      {selected1 === 'Multi-City' && (
        <>
      <div className="formFrom">
          <p className="toTo">From</p>
          <h2 className="behancE">Behance</h2>
          <p className="startdestination">BHN, North America, USA</p>
        </div>
        <div className="formFrom">
          <p className="toTo">To</p>
          <h2 className="behancE">Dribble</h2>
          <p className="startdestination">DRB, Cape Town, South Africa</p>
        </div>
        </>
      )}
        <div className="formFrom1">
          <div className="twoIdenticBlocks">
            <p className="departuRe">Departure</p>
            <div className="calender">
              <h2 className="dayOfWeek"> {selectedDay}
                {showDayOfWeek.isShow4 && (
                  <ul className="dropDown55">
                    {dayToSelect.map((day) => 
                    <li className="dropDownList55" key={day}
                    
                    onClick={() => {
                      setSelectedDay(day)
                      setShowDayOfWeek(false)
                    }
                    }
                    >
                      {day}
                    </li>
                    )}
                  </ul>
                )}
              </h2>
              <h2 className="dayOfMonth"> {selectNumberDay}
                {showDayOfMonth.isShow6 && (
                  <ul className="dropDown77">
                    {numberDayToSelect.map((numday) => 
                      <li className="dropDownList77" key={numday}
                      onClick={() => {
                        setSelectNumberDay(numday);
                        setShowDayOfMonth(false)
                      }}
                      >

                        {numday}
                      </li>
                    )}
                  </ul>
                )}
              </h2>
              <h2 className="monthOfYear">{selectedMonth}
                {showMonthOfYear.isShow5 && (
                  <ul className="dropDown66">
                    {monthToSelect.map((month) => 
                    <li className="dropDownList66" key={month} 
                    onClick={() => {
                      setSelectedMonth(month)
                      setShowMonthOfYear(false)
                    }}>
                      {month}
                    </li>
                    )}
                  </ul>
                )}
              </h2>
            </div>
            <div className="pair-of-buttons">
            <div className="prevAndNext">
              <button className="prev" onClick={ToggleDayOfTheWeek}><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
            </div>
            <div className="prevAndNext1">
              <button className="prev" onClick={ToggleDayOfTheMonth}><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
            </div>
            <div className="prevAndNext2">
              <button className="prev" onClick={ToggleMonthOfTheYear}><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
            </div>
            </div>
          </div>

            <div className="twoIdenticBlocks">
            <p className="departuRe">Departure</p>
            <div className="calender1">
              <h2 className="dayOfWeek"> {selectedDay1}
                {showDayOfWeek1.isShow9 && (
                  <ul className="dropDown88">
                    {dayToSelect1.map((day1) => 
                    <li className="dropDownList88" key={day1}
                    
                    onClick={() => {
                      setShowDayOfWeek1(false)
                      setSelectedDay1(day1)
                    }}>
                      {day1}
                    </li>
                    )}
                  </ul>
                )}
              </h2>
              <h2 className="dayOfMonth">{selectNumberDay}
              {showDayOfMonth1.isShow7 && (
                <ul className="dropDown99">
                  {numberDayToSelect1.map((mont) =>
                  <li className="dropDownList99" key={mont}
                  
                  onClick={() => {
                    setShowDayOfMonth1(false) 
                    setSelectNumberDay(mont)            
                  }}>
                    
                    {mont}</li>
                  )}
                </ul>
              )}
              </h2>
              <h2 className="monthOfYear"> {selectedMonth1}
                {showMonthOfYear1.isShow8 && (
                  <ul className="dropDown100">
                    {monthToSelect1.map((minth) =>
                    <li className="dropDownList100" key={minth}
                    onClick={() => {
                      setSelectedMonth1(minth)
                      setShowMonthOfYear1(false)
                    }}
                    >
                      {minth}
                    </li>
                    )}
                  </ul>
                )}
              </h2>
            </div>

            <div className="pair-of-buttons">
            <div className="prevAndNext0">
              <button className="prev" onClick={ToggleDayOfTheWeek1}><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
            </div>
            <div className="prevAndNext1">
              <button className="prev" onClick={ToggleDayOfTheMonth1}><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
            </div>
            <div className="prevAndNext2">
              <button className="prev" onClick={ToggleMonthOfTheYear1}><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
            </div>
            </div>
          </div>
          </div>
          </div>
        </div>


    <section className="littleBottom">
      <Link to={'/searchedFlights'} className="searchFlights">Search Flights <svg className="myArrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></Link>

      <div className="lastBlock">
        <p className="popularDestination">Popular Destination</p>
        <div className="lastLastBlock">
          <Link className="exploreAll">Explore All</Link>
          <hr className="linieFur"/>
        </div>
      </div>
      </section>
    </section>
    </>
  )
}

export default Home