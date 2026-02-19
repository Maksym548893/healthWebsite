import { useEffect, useState } from "react"
import { getHomeBetweenDate } from "../api/homeBetweenApi";
import { choose } from "../data/homeBetweenData";
import './homeBetween.css'
import MinDoorExperiments from '../images/experiment.png'
function HomeBetween() {
    const [clubs, setClubs] = useState([])
    
    useEffect(() => {
        getHomeBetweenDate()
        .then(data => setClubs(data))
        .catch(() => setClubs(choose))
    }, [    ])


    return(
        <div className="homeBetw">
            {clubs.map(club => (
                <div className="undergroundBlock" key={club.id}>
                    <h1 className="whyMindoor">{club.minDoorMain} <i className="mainDoor">{club.minDoorMain1}</i></h1>
                    <div className="laik">
                            <p className="lessTextUnderground" >{club.minDoorLessMain}</p>
                    </div>
                </div>
            ))}

            <img className="MinDoorExperiments" src={MinDoorExperiments} alt="MinDoorExperiments" />
        </div>
    )
}

export default HomeBetween

