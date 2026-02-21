import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getThreeBlockData } from "../bookSessionApi/minDoorBookSessionThreeBlockApi"
import { three_card } from "../bookSessionData/minDoorBookSessionThreeBlockData"

import './minDoorBookSessionThreeBlock.css'

function ThreeBlock() {
    const [threes_Cards, setThrees_Cards] = useState([])

    useEffect(() => {
        getThreeBlockData()
        .then((data) => 
        setThrees_Cards(data.three_card ?? three_card))
        .catch(() => 
        setThrees_Cards(three_card))
    }, [])

    return(
        <div className="Three_Block">
            {threes_Cards.map(threes_Card =>
            <Link to={threes_Card.link} className="blockss" key={threes_Card.id}>
                <div className="logoses">
                    <img className="logis" src={threes_Card.logo} alt="" />
                </div>

                <div className="under_Part">
                    <p className="main_textek">{threes_Card.main_textek}</p>
                    <p className="textek">{threes_Card.textek}</p>
                </div>
            </Link>
            )}
        </div>
    )

}

export default ThreeBlock