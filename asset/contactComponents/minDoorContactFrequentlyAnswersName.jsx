import { useEffect, useState } from "react"
import { getMinDoorFrequentlyAnswersNameData } from "../contactApi/minDoorContactFrequentlyAnswersNameApi"
import { frequentlyMain } from "../contactData/minDoorContactFrequentlyAnswersNameData"
import './minDoorContactFrequentlyAnswersName.css'

function FrequentlyAnswersMainName() {
    const [freques, setFreques] = useState([])

    useEffect(() => {
        getMinDoorFrequentlyAnswersNameData()
        .then((data) => 
        setFreques(data.frequentlyMain ?? frequentlyMain))
        .catch(() => 
        setFreques(frequentlyMain))
    }, [])

    return(
        <div className="frequentlyAnswersMainName">
            {freques.map(freque => 
            <div className="MAIN-NAME" key={freque.id}>
                <h1 className="topName">{freque.mainTxt}</h1>
                <p className="bottomName">{freque.mainlessTxt}</p>
            </div>
            )}
        </div>
    )
}

export default FrequentlyAnswersMainName