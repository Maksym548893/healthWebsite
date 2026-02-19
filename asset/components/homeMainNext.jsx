import { useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom"
import './homeMainNext.css'
import Firstik from '../images/firstik.png'
import Secondik from '../images/secondik.png'
import Thirdik from '../images/thirdik.png'
import Fourthik from '../images/fourthik.png'
import Fifthik from '../images/fifthik.png'
import Sixthik from '../images/sixthik.png'
import {getHomeMainNextData} from "../api/homeMainNextApi"


function HomeMainNext() {

    const [isReversed, setIsReversed] = useState(false)

    const style = {
        transform: isReversed ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: '0.6s ease-in-out'
    }

    const MouseEntered = () => {
        setIsReversed(true)
    }

    const MouseLeft = () => {
        setIsReversed(false)
    }
 
    return(
        <div className="next-block">
            <div className="first-trap">
                <h1 className="wellbeing">Your Mental <i className="webkik">Wellbeing</i></h1>

                <div className="who-we-are">
                    <div className="together">
                    <p className="secondUnderText">Mindoor delivers care & expert mental health support throughout your growth.</p>
                    </div>

                    <Link className="WhoWeAre" onMouseEnter={MouseEntered} onMouseLeave={MouseLeft}>Who We Are <svg style={style} onMouseEnter={MouseEntered} onMouseLeave={MouseLeft} className="whoUp" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></Link>
                </div>
            </div>

            <div className="list-of-foto">
            <div className="wrapper">
                <img className="wrapperPhoto" src={Firstik} alt="Firstik" />
                <img className="wrapperPhoto"  src={Secondik} alt="Secondik" />
                <img className="wrapperPhoto"  src={Thirdik} alt="Thirdik" />
                <img className="wrapperPhoto"  src={Fourthik} alt="Fourthik" />
                <img className="wrapperPhoto"  src={Fifthik} alt="Fifthik" />
                <img className="wrapperPhoto"  src={Sixthik} alt="Sixthik" />
            </div>
                
                <div aria-hidden className="wrapper">
                <img className="wrapperPhoto" src={Firstik} alt="Firstik" />
                <img className="wrapperPhoto"  src={Secondik} alt="Secondik" />
                <img className="wrapperPhoto"  src={Thirdik} alt="Thirdik" />
                <img className="wrapperPhoto"  src={Fourthik} alt="Fourthik" />
                <img className="wrapperPhoto"  src={Fifthik} alt="Fifthik" />
                <img className="wrapperPhoto"  src={Sixthik} alt="Sixthik" />
                </div>
            </div>
        </div>
    )
}

export default HomeMainNext