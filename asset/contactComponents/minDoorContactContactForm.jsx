import { useEffect, useState } from "react"
import { getMinDoorContactContactFormData } from "../contactApi/minDoorContactContactFormApi"
import { information } from "../contactData/minDoorContactContactFormData"
import { Link } from "react-router-dom"
import './minDoorContactContactForm.css'

function ContactForm() {
    const [informations, setInformations] = useState([])

    const [formir, setFormir] = useState(
        {name: '',
         email: '',
         telep: '',
         message: ''
        }
    )

    const [error, setError] = useState({name: false, email: false, telep: false, message: false})

    const handlerChange = (e) => {
        setFormir({
            ...formir,
            [e.target.name]: e.target.value,

        })

        if(e.target.name === 'name') {
            if(e.target.value === '') {
                setError(prev => ({
                    ...prev,
                    name: false
                }))
            }

            else if(e.target.value.length < 10) {
            setError(prev => ({
                ...prev, 
                name: true
            }))
            }

            else{
            setTimeout(() => {
            setError(prev => ({
                ...prev,
                name: false
            }))
            }, 1000);
            }
        }

        if(e.target.name === 'telep') {
            if(e.target.value === '') {
                setError(prev => ({
                    ...prev,
                    telep: false
                }))
            }

            else if(e.target.value.length < 2) {
                setError(prev => ({
                    ...prev,
                    telep: true
                }))
            }

            else{
                setTimeout(() => {
                    setError(prev => ({
                        ...prev,
                        telep: false
                    }))
                }, 1000);
            }
        }

        if(e.target.name === 'email') {
            if(e.target.value === '') {
                setError(prev => ({
                    ...prev,
                    email: false
                }))
            }

            else if(!e.target.value.includes('@')) {
                setError(prev => ({
                    ...prev,
                    email: true
                }))
            }

            else{
                    setError(prev => ({
                        ...prev, 
                        email: false
                    }))

            }
        }

        if(e.target.name === 'message') {
            if(e.target.value === '') {
                setError(prev => ({
                    ...prev,
                    message: false
                }))
            }

            else if(e.target.value.length < 11) {
                setError(prev => ({
                    ...prev, 
                    message: true
                }))
            }

            else{
                setTimeout(() => {
                    setError(prev => ({
                        ...prev, 
                        message: false
                    }))
                }, 1000);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formir)
    }

    useEffect(() => {
        getMinDoorContactContactFormData()
        .then((data) =>
        setInformations(data))
        .catch(() => 
        setInformations(information))
    }, [])

    return(
        <div className="ContactForm">
            <div className="leftSide">
                {informations.map(informat => 
                    <div className="block-with-information" key={informat.id}>
                        <div className="higher">
                            <img className="informatImg" src={informat.img} alt="informat.img" />
                            <p className="withImg">{informat.withImg}</p>
                        </div>

                        <div className="low">
                            <div className="firstLi">{informat.firstLi} <Link className="firsNum">{informat.firsNum}</Link></div>
                            <div className="secondLi">{informat.secondLi} <Link className="secondNum"> {informat.secondNum}</Link></div>
                        </div>
                    </div>
                )}
            </div>

            <div className="rightsidea">
                <div className="YourDetails">
                    <p className="details">Your Details</p>
                </div>

                <div className="name-and-tel">
                    <div className="nam">
                        <label className="fullNameLabel" htmlFor="fullname">Full name</label>
                        <input name="name"  value={formir.name} onChange={handlerChange} className="fullName" type="text" id="fullname" placeholder="David Thomson"/>
                        {error.name && (
                            <p style={{color: "red", fontSize: '12px'}}>Your name should to be more longer</p>
                        )}
                    </div>

                    <div className="telephon">
                        <label className="telephoneNumberLabel" htmlFor="telephoneNumber">Phone number</label>
                        <input name="telep" value={formir.telep} onChange={handlerChange} className="phoneNumber" type="tel" id="telephoneNumber" placeholder="XXX-XXX-XXXX"/>
                        {error.telep && (
                            <p style={{color: 'red', fontSize: '12px'}}>Your phone number should to have 10 nums</p>
                        )}
                    </div> 
                </div>

                <div className="email-and-reason">
                    <div className="email">
                        <label className="emailAdressLabel" htmlFor="emailAdress">Email Adress</label>
                        <input name="email" value={formir.email} onChange={handlerChange} className="emailAdress" type="email" id="emailAdress" placeholder="david@email.com"/>
                        {error.email && (
                            <p style={{color: 'red', fontSize: '12px'}}>You should to use @ for email</p>
                        )}
                    </div>

                    <div className="reason">
                        <label className="reasonContactLabel" htmlFor="reasonContact">Reason for Contact</label>
                        <select className="reasonContact" name="reasoncontact" id="reasonContact">
                            <option value="">Select One</option>
                            <option value="individual">Individual Therapy</option>
                            <option value="couples">Couples Therapy</option>
                            <option value="family">Family Therapy</option>
                        </select>
                    </div>
                </div>

                <div className="messages">
                    <div className="message">
                        <label className="messageForLabel" htmlFor="messageFor">Message</label>
                        <textarea name="message" value={formir.message} onChange={handlerChange} className="messagefor" id="messageFor" placeholder="Type your Message"></textarea>
                        {error.message && (
                            <p style={{color: 'red', fontSize: '12px'}}>Keep on writing.....</p>
                        )}
                    </div>
                </div>

                <div className="contactBtn">
                    <button onClick={handleSubmit} className="contactsButton">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm