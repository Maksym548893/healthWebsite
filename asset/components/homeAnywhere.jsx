import { useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom"
import './homeAnywhere.css'
import MindoorQuadro from '../images/quadro.svg'
import MindoorPlants from '../images/plants.svg'
import MindoorWings from '../images/wings.svg'  
import MindoorFlowers from '../images/flowers.svg'
import { getHomeAnywhereData } from "../api/homeAnywhereApi"
import { therapies } from "../data/homeAnywhereData"

function HomeAnywhere() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getHomeAnywhereData()
        .then(data => setCards(data))
        .catch(() => setCards(therapies))
    }, [])


    return(
        <div className="third-part">
            <div className="first-kolo">
                <div className="second-kolo">
                    <div className="third-kolo">
                        <div className="wrapper1">
                        <div className="box-here">
                            <h1 className="text-inside">Care form <i className="anywhere">Anywhere</i></h1>
                            <p className="under-inside-text">With secure online sessions, getting help becomes easier — whether you’re at home, at work, or on the go.</p>
                        </div>

                        <div className="hahahaha">
                    {cards.map(card => (
                        <Link key={card.id} className={card.className}>
                    <img className="mindoorQuadro" src={card.img} alt="MindoorQuadro" />
                    <div className="text-under-therapy">
                        <p className="main-here">{card.title}</p>
                        <div className="brrr">
                            <p className="under-here">{card.under_text}</p>
                        </div>
                    </div>
                        </Link>
                    ))}       
                        </div>                      
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAnywhere