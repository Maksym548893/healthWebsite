import { useEffect, useState } from 'react'
import {getHomeStartYourHealingData} from '../api/homeStartYourHealingApi'
import {mainText, buttonTxt} from '../data/homeStartYourHealingData'
import './homeStartYourHealing.css'

import MinDoorFirstPers from '../images/firstPers.png'
import MinDoorSecondPers from '../images/secondPers.png'
import MinDoorThirdPers from '../images/thirdPers.png'
import MinDoorFourthPers from '../images/fourthPers.png'

import MinDoorFifthPers from '../images/fifthPers.png'
import MinDoorSixthPers from '../images/sixthPers.png'
import MinDoorSeventhPers from '../images/seventhPers.png'
import MinDoorEighthPers from '../images/eighthPers.png'

import MinDoorNinethPers from '../images/ninethPers.png'
import MinDoorTenthPers from '../images/tenthPers.png'
import MinDoorEleventhPers from '../images/eleventhPers.png'
import MinDoorTwelvethPers from '../images/twelvethPers.png'



function HomeStartYourHealing() {
    const [mains, setMains] = useState([])
    const [buttons, setButtons] = useState([])


    useEffect(() => {
        getHomeStartYourHealingData()
        .then(data => {
            setMains(data.mainText ?? mainText)
            setButtons(data.buttonTxt ?? buttonTxt)
        })
        .catch(() => {
            setMains(mainText)
            setButtons(buttonTxt)
        })
    }, [])

    const [isReverse, setIsReverse] = useState(false)

    const style = {
        transform: isReverse ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: '0.5s ease-in-out'
    }

    const MouseEnterTheBlock = () => {
        setIsReverse(true)
    }

    const MouseLeaveTheBlock = () => {
        setIsReverse(false)
    }

    
    return(
<div className="startHere">
    <div className="circleOne">
        <img className='ninethPers' src={MinDoorNinethPers} alt="MinDoorNinethPers" />
        <img className='tenthPers' src={MinDoorTenthPers} alt="MinDoorTenthPers" />
        <img className='eleventhPers' src={MinDoorEleventhPers} alt="MinDoorEleventhPers" />
        <img className='twelvethPers' src={MinDoorTwelvethPers} alt="MinDoorTwelvethPers" />
        <div className="circleTwo">
            <img className='fifthPers' src={MinDoorFifthPers} alt="MinDoorFifthPers" />
            <img className='sixthPers' src={MinDoorSixthPers} alt="MinDoorSixthPers" />
            <img className='seventhPers' src={MinDoorSeventhPers} alt="MinDoorSeventhPers" />
            <img className='eighthPers' src={MinDoorEighthPers} alt="MinDoorEighthPers" />
            <div className="circleThree">
                <img className='firstPers' src={MinDoorFirstPers} alt="MinDoorFirstPers" />
                <img className='secondPers' src={MinDoorSecondPers} alt="MinDoorSecondPers" />
                <img className='thirdPers' src={MinDoorThirdPers} alt="MinDoorThirdPers" />
                <img className='fourthPers' src={MinDoorFourthPers} alt="MinDoorFourthPers" />

                <div className="blocksMain">
                    {mains.map(main => (
                        <div className="mainA" key={main.id}>
                            <div className='giv'>
                            <h1 className='healing'>{main.mainTxt}</h1>
                            <h1 className="healing"><i>{main.mainTxt1}</i></h1>
                            </div>
                            <div className="gav">
                                <p className='fass'>{main.secMainTxt}</p>
                            </div>
                        </div>
                    ))}


                    {buttons.map(button => (
                        <button className='bookASession' onMouseEnter={MouseEnterTheBlock} onMouseLeave={MouseLeaveTheBlock} key={button.id}>{button.maTxt} <img className='arrowToRight' onMouseEnter={MouseEnterTheBlock} onMouseLeave={MouseLeaveTheBlock} style={style} src={button.img} alt="" /></button>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div> 
    )
}

export default HomeStartYourHealing