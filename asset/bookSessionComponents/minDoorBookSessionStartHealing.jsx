import { useEffect, useState } from "react"
import { getStartHealingData } from "../bookSessionApi/minDoorBookSessionStartHealingApi"
import { centerDetails } from "../bookSessionData/minDoorBookSessionStartHealingData"
import { Link } from "react-router-dom"

import MinDoorFirstPeop from '../images/firstPers.png'
import MinDoorSecondPeop from '../images/secondPers.png'
import MinDoorThirdPeop from '../images/thirdPers.png'
import MinDoorFourthPeop from '../images/fourthPers.png'

import MinDoorFifthPeop from '../images/fifthPers.png'
import MinDoorSixthPeop from '../images/sixthPers.png'
import MinDoorSeventhPeop from '../images/seventhPers.png'
import MinDoorEighthPeop from '../images/eighthPers.png'

import MinDoorNinethPeop from '../images/ninethPers.png'
import MinDoorTenthPeop from '../images/tenthPers.png'
import MinDoorEleventhPeop from '../images/eleventhPers.png'
import MinDoorTwelvethPeop from '../images/twelvethPers.png'

import './minDoorBookSessionStartHealing.css'

function StartHealing() {
    const [details, setDetails] = useState([])

    useEffect(() => {
        getStartHealingData()
        .then((data) => 
        setDetails(data.centerDetails ?? centerDetails))
        .catch(() => 
        setDetails(centerDetails))
    }, [])

    const [isReverse, setIsReverse] = useState(false)

    const ReverseUp = () => {
        setIsReverse(true)
    }

    const ReverseDown = () => {
        setIsReverse(false)
    }

    const style = {
        transform: isReverse ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: '0.6s ease-in-out'
    }

    return(
        <div className="Start_Healing">
            <div className="circlesOne">
                <img className='MinDoorFirstPeop' src={MinDoorFirstPeop} alt="MinDoorFirstPeop" />
                <img className='MinDoorSecondPeop' src={MinDoorSecondPeop} alt="MinDoorSecondPeop" />
                <img className='MinDoorThirdPeop' src={MinDoorThirdPeop} alt="MinDoorThirdPeop" />
                <img className='MinDoorFourthPeop' src={MinDoorFourthPeop} alt="MinDoorFourthPeop" />
                <div className="circlesTwo">
                    <img className='MinDoorFifthPeop' src={MinDoorFifthPeop} alt="MinDoorFifthPeop" />
                    <img className='MinDoorSixthPeop' src={MinDoorSixthPeop} alt="MinDoorSixthPeop" />
                    <img className='MinDoorSeventhPeop' src={MinDoorSeventhPeop} alt="MinDoorSeventhPeop" />
                    <img className='MinDoorEighthPeop' src={MinDoorEighthPeop} alt="MinDoorEighthPeop" />
                    <div className="circlesThree">
                        <img className='MinDoorNinethPeop' src={MinDoorNinethPeop} alt="MinDoorNinethPeop" />
                        <img className='MinDoorTenthPeop' src={MinDoorTenthPeop} alt="MinDoorTenthPeop" />
                        <img className='MinDoorEleventhPeop' src={MinDoorEleventhPeop} alt="MinDoorEleventhPeop" />
                        <img className='MinDoorTwelvethPeop' src={MinDoorTwelvethPeop} alt="MinDoorTwelvethPeop" />
                        {details.map(detail => 
                        <div className="insider">
                        <div className="textovuk" key={detail.id}>
                            <h1 className="mainer_Text">{detail.mainer_Text} <i>{detail.mainers_Text}</i></h1>
                            <p className="minorer_Text">{detail.minorer_Text}</p>
                        </div>

                        <div className="linker">
                            <Link onMouseEnter={ReverseUp} onMouseLeave={ReverseDown} className="link_inside" to={detail.link}>Book A Session <img onMouseEnter={ReverseUp} onMouseLeave={ReverseDown} style={style} className="ariws" src={detail.img} alt="" /></Link>
                        </div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
            </div>
    )

}

export default StartHealing