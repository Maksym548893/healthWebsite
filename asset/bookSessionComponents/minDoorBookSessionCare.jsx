import { useEffect, useState } from "react"
import { getCareData } from "../bookSessionApi/minDoorBookSessionCareApi"
import { careAnytime } from "../bookSessionData/minDoorBookSessionCareData"

import './minDoorBookSessionCare.css'

function BookSessionCare() {
    const [cares, setCares] = useState([])

    useEffect(() => {
        getCareData()
        .then((data) => 
        setCares(data.careAnytime ?? careAnytime))
        .catch(() => 
        setCares(careAnytime))
    }, [])

    return(
        <div className="careAnytime">
            {cares.map(care => 
                <div className="care_text" key={care.id}>
                    <h1 className="ma">{care.ma_Text} <i className="anytime">{care.anytime_Text}</i></h1>
                    <p className="mi">{care.mi_Text}</p>
                </div>
            )}
        </div>
    )
}

export default BookSessionCare