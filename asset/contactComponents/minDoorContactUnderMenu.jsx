import { useEffect, useState } from "react"
import { getMinDoorContactUnderMenuData } from "../contactApi/minDoorContactUnderMenuApi"
import { mainPart } from "../contactData/minDoorContactUnderMenuData"
import './minDoorContactUnderMenu.css'

function UnderMenu() {
    const [mains, setMains] = useState([])

    useEffect(() => {
        getMinDoorContactUnderMenuData()
        .then((data) => {
            setMains(data.mainPart ?? mainPart)
        })
        .catch(() => {
            setMains(mainPart)
        })
    }, [])

    return(
        <div className="UnderMain">
            {mains.map(mai => (
                <div className="mainTX" key={mai.id}>
                    <h1 className="mainText">{mai.mainText}</h1>
                    <p className="mainlessText">{mai.mainlessText}</p>
            </div>
                ))}
            </div>
    )
}

export default UnderMenu