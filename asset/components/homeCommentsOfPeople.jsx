import './homeCommentsOfPeople.css'
import { useEffect, useState } from 'react'
import { getHomeCommentsOfPeopleData } from '../api/homeCommentsOfPeopleApi'
import { glovText, commentarsData } from '../data/homeCommentsOfPeopleData'
import MinDoorLeftStrilka from '../images/leftStrilka.svg'
import MinDoorRightStrilka from '../images/rightStrilka.svg'

function HomeCommentsOfPeople() {
const [glovs, setGlovs] = useState([])
const [commentsDatas, setCommentsDatas] = useState([])

const [active, setActive] = useState(0)

useEffect(() => {
    getHomeCommentsOfPeopleData()
    .then(data => {
        setGlovs(data.glovText ?? glovText)
        setCommentsDatas(data.commentarsData ?? commentarsData)
    })
    .catch(() => {
        setGlovs(glovText)
        setCommentsDatas(commentarsData)
    })
}, [])

const prev = () => {
    setActive(prev => (prev > 0 ? prev - 1 : commentsDatas.length - 1))
}

const next = () => {
    setActive(prev => (prev < commentsDatas.length - 1 ? prev + 1 : 0))
}

return(
    <div>
        <div className="commentsOfPeop">
        <div className="glova">
            {
              glovs.map(glov => (
                <div className='letsGo' key={glov.id}>
                    <p className='blockGlovMain'>{glov.glov} <i className='blockGlov'>{glov.glov1}</i></p>
                <div className='lessTextuk'>
                        <p className='aika'>{glov.less}</p>
                </div>
                </div>
              ))}
        </div>

        <div className="commentsOfPeop1">
            {commentsDatas.map(commentsData => (
                commentsData.id === active && (
                    <div className="chras">
                    <div className="imgOfPeop">
                        <div className="backend">
                            <img className='FotossotoF' src={commentsData.img} alt="" />
                        </div>
                    </div>

                    <div className="comentarik">
                        <div>
                            <p className='comt' >{commentsData.glovik}</p>
                        </div>

                        <div className="professorAndBtn">
                            <div className="thisIs">
                                <p className='name'>{commentsData.name}</p>
                                <p className='prof'>{commentsData.job}</p>
                            </div>
                            <div className="aksa">
                                <button className='prevBtn' onClick={prev}><img src={MinDoorLeftStrilka} alt="MinDoorLeftStrilka"/></button>
                                <button className='nextBtn' onClick={next}><img src={MinDoorRightStrilka} alt="MinDoorRightStrilka"/></button>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            ))}
        </div>

    </div>
    </div>
)
}

export default HomeCommentsOfPeople
