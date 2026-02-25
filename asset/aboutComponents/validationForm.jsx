import { useState } from "react"

import './validationForm.css'

function ValidationForm() {
    const [inputs, setInputs] = useState({
        name: '', email: '', password: '', confrim_password: '', age: ''
    })

    const [fals, SetFals] = useState({
        name: false, email: false, password: false, confrim_password: false, age: false
    })

    const OurProvirka = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

        if(e.target.name === 'name') {
            if(e.target.value === '') {
                SetFals(prev => ({
                    ...prev, 
                    name: false
                }))
            }

            else if(e.target.value.length < 3) {
                SetFals(prev => ({
                    ...prev, 
                    name: true
                }))
            }

            else{ 
                SetFals(prev => ({
                    ...prev, 
                    name: false
                }))
            }
        }

        if(e.target.name === 'email') {

            if(e.target.value === '') {
                SetFals(prev => ({
                    ...prev, 
                    email: false
                }))
            }

            else if(!e.target.value.includes('@')) {
                SetFals(prev => ({
                    ...prev, 
                    email: true
                }))
            }

            else{
                SetFals(prev => ({
                    ...prev, 
                    email: false
                }))
            }
        }

        if(e.target.name === 'password') {

            if(e.target.value === '') {
                SetFals(prev => ({
                    ...prev, 
                    password: false
                }))
            }

            else if(e.target.value.length < 8) {
                SetFals(prev => ({
                    ...prev, 
                    password: true
                }))
            }

            else{
                SetFals(prev => ({
                    ...prev, 
                    password: false
                }))
            }
        }

        if(e.target.name === 'confrim_password') {

            if(e.target.value === '') {
                SetFals(prev => ({
                    ...prev, 
                    confrim_password: false
                }))
            }

            else if(e.target.value !== inputs.password) {
                SetFals(prev => ({
                    ...prev, 
                    confrim_password: true
                }))
            }

            else{
                SetFals(prev => ({
                    ...prev, 
                    confrim_password: false
                }))
            }
        }

        if(e.target.name === 'age') {

            if(e.target.value === '') {
                SetFals(prev => ({
                    ...prev, 
                    age: false
                }))
            }

            else if(e.target.value < 18) {
                SetFals(prev => ({
                    ...prev, 
                    age: true
                }))
            }

            else{
                SetFals(prev => ({
                    ...prev, 
                    age: false
                }))
            }
        }
    }

    return(
        <div className="ValidationForm">
            <div className="firstLini">
                <div className="namess">
                    <label htmlFor="namees">Name</label>
                    <input type="text" name="name" id="namees" value={inputs.name} onChange={OurProvirka}/>
                    {fals.name && (
                        <p style={{color: 'red'}}>You should to use more symbols</p>
                    )}
                </div>

                <div className="emails">
                    <label htmlFor="emailss">Email</label>
                    <input type="email" name="email" id="emailss" value={inputs.email} onChange={OurProvirka}/>
                    {fals.email && (
                        <p style={{color: 'red'}}>Please use @ when you enter your email</p>
                    )}
                </div>
            </div>

            <div className="secondLini">
                <div className="passwords">
                    <label htmlFor="passwordss">Password</label>
                    <input type="password" name="password" id="passwordss" value={inputs.password} onChange={OurProvirka}/>
                    {fals.password && (
                        <p style={{color: 'red'}}>Password must include 8 'numbers, letters, symbols'</p>
                    )}
                </div>

                <div className="confrim_passwords">
                    <label htmlFor="confrimms">Confrim Password</label>
                    <input type="password" name="confrim_password" id="confrimms" value={inputs.confrim_password} onChange={OurProvirka}/>
                    {fals.confrim_password && (
                        <p style={{color: 'red'}}>Passwords must to be exactly the same</p>
                    )}
                </div>
            </div>

            <div className="thirdLini">
                <div className="ages">
                    <label htmlFor="agees">Age 'only 18+'</label>
                    <input type="number" name="age" id="agees" value={inputs.age} onChange={OurProvirka}/>
                    {fals.age && (
                        <p style={{color: 'red'}}>Our clients should to be 18 or older</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ValidationForm