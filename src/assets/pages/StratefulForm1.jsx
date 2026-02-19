import { useReducer } from "react";
import ExploreCity from "./exploreCity";

const FormatForm1 = () => {
    const ourComponents = {
        email: '',
        password: '',
        error: false,
        loading: false
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'SET_EMAIL':
            return({...state, email: action.payload})
            case 'SET_PASSWORD':
            return({...state, password: action.payload})
            case 'SET_ERROR':
            return({...state, error: action.payload})
            case 'SET_LOADING':
            return({...state, loading: action.payload})
        }
    }

    const [state, dispatch] = useReducer(reducer, ourComponents)

    const handleEmailChange = (e) => {
        dispatch({ type: 'SET_EMAIL', payload: e.target.value })
        dispatch({ type: 'SET_ERROR', payload: false})
        console.log(state)
    }

    const handlePassChange = (e) => {
        dispatch({ type: 'SET_PASSWORD', payload: e.target.value})
        dispatch({ type: 'SET_ERROR', payload: false})
        console.log(state)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(state.email === '' || state.password === '') {
            dispatch({ type: 'SET_ERROR', payload: true})
        }

        dispatch({ type: 'SET_LOADING', payload: true})

        setTimeout(() => {
            dispatch({ type: 'SET_LOADING', payload: false  })
            dispatch({ type: 'SET_ERROR', payload: false})
            dispatch({ type: 'SET_EMAIL', payload: ''  })
            dispatch({ type: 'SET_PASSWORD', payload: ''})           
        }, 3000);
    }

    return(
        <div className="backForm">
        <form onSubmit={handleSubmit} className="myForm">
        <h2 className="LogInInIn">Sign Up</h2>
        <div className="divFormLogIn">
        <input className="logInchik" type="text" value={state.email} onChange={handleEmailChange} placeholder="Enter Your Email"/>
        <input className="signUpchik" type="text" value={state.password} onChange={handlePassChange} placeholder="Enter Your Password"/>
        <button className="submitButton" onSubmit={handleSubmit}>
            {state.loading ? 'Loading....' : 'Submit'}
        </button>
        {state.error && (
            <p className="luxury">Your Input is incorrect</p>
        )}
        </div>
        </form>
        </div>
    )
    
}

export default FormatForm1