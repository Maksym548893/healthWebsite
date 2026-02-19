import { useState } from "react"

function AboutMenu() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    })

    const [error, setError] = useState({
        name: false,
        email: false,
    })

    const HandleChanging = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        if(e.target.name === 'name') {
            if(e.target.value.length < 6) {
            setError(true)
        }
        else{
            setTimeout(() => {
                setError(false)
            }, 1000);
        }
    }

        if(e.target.name === 'email' ) {
            if(!e.target.value.includes('@')) {
            setError(true)
            }
        else{
            setTimeout(() => {
                setError(false)
            }, 1000);
        }
    }
    }

    return(
        <>
        <div className="formEmail">
            <label htmlFor="emailk">Email</label>
            <input onChange={HandleChanging} type="email" name="name" id="emailk" />
            {error && (
                <p style={{color: 'red'}}>You should to use more letters</p>
            )}
        </div>

        <div className="formName">
            <label htmlFor="namik">Full Name</label>
            <input onChange={HandleChanging} type="text" name="email" id="namik" />
            {error && (
                <p style={{color: 'red'}}>You should to use @</p>
            )}
        </div>
        </>
    )
}

export default AboutMenu