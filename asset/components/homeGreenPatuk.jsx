import { useState, useEffect, useRef} from "react"
import './homeGreenPatuk.css'
import { getHomeGreenPatukData } from "../api/homeGreenPatukApi"
import { greenblock } from "../data/homeGreenPatukData"

function HomeGreenPatuk() {
const [tipps, setTipps] = useState([])

useEffect(() => {
getHomeGreenPatukData()
.then(data => setTipps(data))
.catch(() => setTipps(greenblock))
}, [])


    return(
        <div className="greenBlock">
            <div className="part-of-blocks">
                {tipps.map(tipp => (
                    <div key={tipp.id} className="insideBlock">
                        <h1 className="mainNazva">{tipp.mainText}</h1>
                        <p className="neMainNazva">{tipp.lessText}</p>
                    </div>
                ))}
            </div>
        </div>
    )
} 

export default HomeGreenPatuk