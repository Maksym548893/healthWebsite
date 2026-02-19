import MinDoorFirstPer from '../images/firstPers.png'
import MinDoorSecondPer from '../images/secondPers.png'
import MinDoorThirdPer from '../images/thirdPers.png'
import MinDoorFourthPer from '../images/fourthPers.png'
import MinDoorFifthPer from '../images/fifthPers.png'
import MinDoorSixthPer from '../images/sixthPers.png'
import MinDoorSeventhPer from '../images/seventhPers.png'
import MinDoorEighthPer from '../images/eighthPers.png'
import MinDoorNinethPer from '../images/ninethPers.png'
import MinDoorTenthPer from '../images/tenthPers.png'
import MinDoorEleventhPer from '../images/eleventhPers.png'
import MinDoorTwelvethPer from '../images/twelvethPers.png'

import { getHealingFormData } from '../contactApi/minDoorContactHealingFormApi'
import { healing } from '../contactData/minDoorContactHealingFormData'

import './minDoorContactHealingForm.css'
import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function HealingForm() {
    const [healings, setHealings] = useState([])

    useEffect(() => {
        getHealingFormData()
        .then((data) => 
        setHealings(data.healing ?? healing))
        .catch(() => 
        setHealings(healing))
    }, [])

    const [isReverse, setIsReverse] = useState(false)

    const ChangeReverseEnter = () => {
        setIsReverse(true)
    }

    const ChangeReverseLeave = () => {
        setIsReverse(false)
    }

    const style = {
        transform: isReverse ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: '0.6s ease-in-out'
    }

    return(
        <div className="healingForm">
            <div className="firstCircle">
                <img className='MinDoorFirstPer' src={MinDoorFirstPer} alt="MinDoorFirstPer" />
                <img className='MinDoorSecondPer' src={MinDoorSecondPer} alt="MinDoorSecondPer" />
                <img className='MinDoorThirdPer' src={MinDoorThirdPer} alt="MinDoorThirdPer" />
                <img className='MinDoorFourthPer' src={MinDoorFourthPer} alt="MinDoorFourthPer" />
                <div className="secondCircle">
                    <img className='MinDoorFifthPer' src={MinDoorFifthPer} alt="MinDoorFifthPer" />
                    <img className='MinDoorSixthPer' src={MinDoorSixthPer} alt="MinDoorSixthPer" />
                    <img className='MinDoorSeventhPer' src={MinDoorSeventhPer} alt="MinDoorSeventhPer" />
                    <img className='MinDoorEighthPer' src={MinDoorEighthPer} alt="MinDoorEighthPer" />
                    <div className="thirdCircle">
                        <img className='MinDoorNinethPer' src={MinDoorNinethPer} alt="MinDoorNinethPer" />
                        <img className='MinDoorTenthPer' src={MinDoorTenthPer} alt="MinDoorTenthPer" />
                        <img className='MinDoorEleventhPer' src={MinDoorEleventhPer} alt="MinDoorEleventhPer" />
                        <img className='MinDoorTwelvethPer' src={MinDoorTwelvethPer} alt="MinDoorTwelvethPer" />
                        {healings.map(healin => (
                        <div className="mainClicku" key={healin.id}>
                            <div className="higheest">
                                <h1 className='mainHere'>{healin.mainHere}</h1>
                                <p className='underHere'>{healin.underHere}</p>
                            </div>

                            <div className="lowesst">
                                <Link className='linkHere' onMouseEnter={ChangeReverseEnter} onMouseLeave={ChangeReverseLeave} to={healin.linkHere}>{healin.buttonHere} <img style={style} onMouseEnter={ChangeReverseEnter} onMouseLeave={ChangeReverseLeave} className='arrowHere' src={healin.arrowHere} alt="" /></Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealingForm