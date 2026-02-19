import { useEffect, useState } from "react"
import { getMinDoorFrequentlyAnswersData } from "../contactApi/minDoorContactFrequentlyAnswersApi"
import { answers, mainPhoto } from "../contactData/minDoorContactFrequentlyAnswersData"
import './minDoorContactFrequentlyAnswers.css'

function FrequentlyAnswers() { 
    const [answerks, setAnswerks] = useState([])
    const [fotos, setFotos] = useState([])

    useEffect(() => {
        getMinDoorFrequentlyAnswersData()
        .then((data) => {
            setAnswerks(data.answers ?? answers)
            setFotos(data.mainPhoto ?? mainPhoto)
        })
        .catch(() => {
            setAnswerks(answers)
            setFotos(mainPhoto)
        })
    }, [])

    const [isReadedID, setIsReadedID] = useState(null)


    const OpenAnswers = (id) => {
        setIsReadedID(prev => prev === id ? null : id)

    }

    return(
        <div className="MinDoorContactFrequntlyAnswers">
            <div className='klapik'>
            {answerks.map(answerk =>   
            <div className={`leftSideHere ${isReadedID === answerk.id ? 'active' : 'nonactive'}`} key={answerk.id} onClick={() => OpenAnswers(answerk.id)}>
                <div className="firsLine">
                    <p className={`urQuestions ${isReadedID === answerk.id ? 'active' : ''}`}>{answerk.mainTXT}</p>
                    <img className="arrowDown" style={{
                        transform: isReadedID === answerk.id ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.6s ease-in-out'
                    }} src={answerk.arrowDown} alt="arrowDown" />
                </div>

                {isReadedID === answerk.id && (
                    <div className="under" >
                    <p className={`mainlessTXT ${isReadedID === answerk.id ? 'active' : ''}`}>{answerk.mainlessTXT}</p>
                    </div>
                )}


                <div>
                    <hr />
                </div>
            </div>
            )}
            </div>

            {fotos.map(foto => 
            <div className="rightSideHere" key={foto.id}>
                <img className="fotoOurTherapy" src={foto.foto} alt="fotoOurTherapy" />
            </div>
            )}
        </div>
    )
}

export default FrequentlyAnswers