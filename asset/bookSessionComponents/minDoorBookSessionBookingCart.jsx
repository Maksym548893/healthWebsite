import { useEffect, useState } from "react"
import { getBookingCartData } from "../bookSessionApi/minDoorBookSessionBookingCartApi"
import { left_side } from "../bookSessionData/minDoorBookSessionBookingCartData"
import './minDoorBookSessionBookingCart.css'

function BookingCart() {
    const [leftsSides, setLeftsSides] = useState([])

    useEffect(() => {
        getBookingCartData()
        .then((data) => 
        setLeftsSides(data.left_side ?? left_side))
        .catch(() => 
        setLeftsSides(left_side))
    }, []) 

    const [inputu, setInputu] = useState({
        first_name: '', last_name: '', phone_number: '', email_adress: '' 
    })

    const HandleChanging = (e) => {
    setInputu({
        ...inputu,
        [e.target.name]: e.target.value
    })

    if(e.target.name === 'first_name') {
        if(e.target.value === '') {
            setFalses(prev => ({
                ...prev,
                first_name: false
            }))
        }

        else if(e.target.value.length < 5) {
            setFalses(prev => ({
                ...prev,
                first_name: true
            }))
        }

        else{
            setFalses(prev => ({
                ...prev,
                first_name: false
            }))
        }
    }

    if(e.target.name === 'last_name') {
        if(e.target.value === '') {
            setFalses(prev => ({
                ...prev, 
                last_name: false
            }))
        }

        else if(e.target.value.length < 5) {
            setFalses(prev => ({
                ...prev, 
                last_name: true
            }))
        }

        else{
            setFalses(prev => ({
                ...prev, 
                last_name: false
            }))
        }
    }

    if(e.target.name === 'phone_number') {
        if(e.target.value === '') {
            setFalses(prev => ({
                ...prev, 
                phone_number: false
            }))
        }

        else if(e.target.value.length < 10) {
            setFalses(prev => ({
                ...prev, 
                phone_number: true
            }))
        }

        else{
            setFalses(prev => ({
                ...prev, 
                phone_number: false
            }))
        }
    }

    if(e.target.name === 'email_adress') {
        if(e.target.value === '') {
            setFalses(prev => ({
                ...prev, 
                email_adress: false
            }))
        }

        else if(!e.target.value.includes('@')) {
            setFalses(prev => ({
                ...prev, 
                email_adress: true
            }))
        }

        else{
            setFalses(prev => ({
                ...prev, 
                email_adress: false
            }))
        }
    }
    }

    const [falses, setFalses] = useState({
        first_name: false, last_name: false, phone_number: false, email_adress: false
    })

    const ClearAll = () => {
        setTimeout(() => {
        setInputu({
            first_name: '',
            last_name: '',
            phone_number: '',
            email_adress: ''
        })
            setFalses({
                first_name: false, last_name: false, phone_number: false, email_adress: false
            })
        }, 1000);
    }


    return(
        <div className="bookingCart">
                {leftsSides.map(leftsSide => 
            <div className="left_Side" key={leftsSide.id}>

                <div className="under_left">
                <h1 className="main-text_main-texte">
                    {leftsSide.main_text}
                </h1>
                <h1 className="main-texte">
                    <i className="main_Texte">{leftsSide.main_texte}</i>
                </h1>

                </div>
                <p className="minor_text">
                    {leftsSide.minor_text}
                </p>
            </div>
                )}

            <div className="right_Side">
                <div className="Your_Details">
                    <p className="your_details">Your Details</p>
                </div>

                <div className="list_of_All">

                <div className="first_Line">
                    <div className="first-Name">
                        <label className="label_First" htmlFor="firstName">First name</label>
                        <input placeholder="David" value={inputu.first_name} className="firstN" onChange={HandleChanging} type="text" name="first_name" id="firstName" />
                        {falses.first_name && (
                            <p style={{color: 'red'}}>Hohohohohoho</p>
                        )}
                    </div>

                    <div className="last-Name">
                        <label className="label_Last" htmlFor="lastName">Last name</label>
                        <input onChange={HandleChanging} value={inputu.last_name} placeholder="Thomson" className="lastN" type="text" name="last_name" id="lastName" />
                        {falses.last_name && (
                            <p style={{color: 'red'}}>Hohohohohoho</p>
                        )}
                    </div>
                </div>

                <div className="second_Line">
                    <div className="phone-Number">
                        <label className="label_Nums" htmlFor="phoneNumber">Phone Number</label>
                        <input onChange={HandleChanging} value={inputu.phone_number} placeholder="XXX-XXX-XXXX" className="nump" type="tel" name="phone_number" id="phoneNumber" />
                        {falses.phone_number && (
                            <p style={{color: 'red'}}>Hohohohohoho</p>
                        )}
                    </div>

                    <div className="email-Adress">
                        <label className="label_Email" htmlFor="email-Adress">Email adress</label>
                        <input onChange={HandleChanging} value={inputu.email_adress} placeholder="david@email.com" className="email" type="email" name="email_adress" id="email-Adress" />
                        {falses.email_adress && (
                            <p style={{color: 'red'}}>Hohohohohoho</p>
                        )}
                    </div>
                </div>

                <div className="third_Line">
                    <div className="preferred-Data">
                        <label className="label_Data" htmlFor="preferredData">Preferred data</label>
                        <input className="date" type="date" name="preferred_data" id="preferredData" />
                    </div>

                    <div className="preferred-Time">
                        <label className="label_Time" htmlFor="preferredTime">Preferred time</label>
                        <input className="time" type="time" name="preferred_time" id="preferredTime" />
                    </div>
                </div>
                </div>

                <div className="checkButton">
                    <button onClick={ClearAll} className="books_Here">Book a Session</button>
                </div>
            </div>
            </div>
    )
}

export default BookingCart