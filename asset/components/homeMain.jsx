import { useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom"
import './homeMain.css'
import MinDoorFirstMan from '../images/firstMan.png'
import MinDoorSecondMan from '../images/secondMan.png'
import MinDoorThirdMan from '../images/thirdMan.png'
import MinDoorStar from '../images/star.png'
import MinDoorDyadyo from '../images/myUncle.png'
import MinDoorBC from '../images/backgroundMain.png'
import { getHomeMainData } from "../api/homeMainApi"
import { comentts } from "../data/homeMainData";

function HomeMain() {
    const [isReverse, setIsReverse] = useState(false)

    const style = {
        transform: isReverse ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: 'transform 0.6s ease-in-out'
    }

    const HandleMakeReverseEnter = () => {
        setIsReverse(true)
    }

    const HandleMakeReverseLeave = () => {
        setIsReverse(false)
    }

    const [ blocks, setBlocks ] = useState([])

    useEffect(() => {
        getHomeMainData()
        .then(data => setBlocks(data))
        .catch(() => setBlocks(comentts))
    }, [])

    return(
    <div className="first-main-block" >
        <div className="left-part">
        <div className="x">
            <div className="klak">
            <h1 className="main-text">You’re Not Alone</h1>
            <h1 className="main-text1"> <i className="talanten">Healing </i>Starts Here</h1>
            </div>
            <div className="obloga">
            <p className="under-text">Mindoor provides care & professional mental health support for your journey.</p>
            </div>
            <Link className="bookSessionBtn" onMouseEnter={HandleMakeReverseEnter} onMouseLeave={HandleMakeReverseLeave}>Book A Session <svg className="bookSessionArrow" onMouseEnter={HandleMakeReverseEnter} onMouseLeave={HandleMakeReverseLeave} style={style} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></Link>
        </div>

    <div className="commentsFromPeople">
        {blocks.map(block =>(
        <div className="zusammen" key={block.id}>
            <div className="firstOfCommentsFromPeople">
            <div className="weAre">
                <img className="comentator1" src={block.img} alt="MinDoorFirstMan" />
                <img className="comentator2" src={block.img1} alt="MinDoorSecondMan" />
                <img className="comentator3" src={block.img2} alt="MinDoorThirdMan" />
            </div>
            <div className="starkik">
                <div className="sta">
                {block.stars.map((star, i) => (
                    <img className="star1" key={i} src={star} alt="star" />
                ))}
                </div>
            </div>
            </div>      
            <div>
                <p className="last-text">{block.last_text}</p>
            </div>
            </div>
           ))}
        </div>
      </div>
        <div className="bcground">
        <div className="right-part">
            <img className="actor-serials" src={MinDoorDyadyo} alt="MinDoorDyadyo" />
        </div>
        </div>
    </div>
    )
}

export default HomeMain