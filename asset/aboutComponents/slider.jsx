import MountainPicture from '../imgd/mountain.jpg'
import HawaiPicture from '../imgd/hawai.jpeg'
import NevadaPicture from '../imgd/nevada.jpg'
import ItalyPicture from '../imgd/italy.jpg'
import NorthPicture from '../imgd/north.jpg'

import { useEffect, useState } from "react"

import './slider.css'

function CleverSlider() {

const [fotos, setFotos] = useState([
    {id: 1, img: MountainPicture},
    {id: 2, img: HawaiPicture},
    {id: 3, img: NevadaPicture},
    {id: 4, img: ItalyPicture},
    {id: 5, img: NorthPicture}
])

const [activeID, SetActiveID] = useState(1)

const prevBtn = () => {
    SetActiveID(prev => prev > 0 ? prev - 1 : fotos.length - 1)
}

const nextBtn = () => {
    SetActiveID(prev => prev < fotos.length ? prev + 1 : 1)
}

const [start, setStart] = useState(false)

useEffect(() => {
    if(!start) return;

    const interval = setInterval(() => {
        SetActiveID(prev => prev < fotos.length ? prev + 1 : 1)
    }, 2000);

    return() => {
        clearInterval(interval)
    }
}, [start, fotos.length])

const Start = () => {
    setStart(true)
} 

const Pause = () => {
    setStart(false)
}

return(
    <div className="sliderTV">
        {fotos.map(foto => 
            activeID === foto.id && (
                <div className='fotloss' key={foto.id}>
                    <div className="backs">
                    <img className='sliderPg' src={foto.img} alt="foto_img" />
                    </div>
                </div>
            )
        )}

        <div className="vsi-knopku">
        <div className="togethers">
        <button className='prevBtnsss' onClick={prevBtn}>Prev</button>
        <button className='nextBtnsss' onClick={nextBtn}>Next</button>
        </div>

        <div className="notogether">
        <button className='prevBtnsss' onClick={Start}>Start</button>
        <button className='nextBtnsss' onClick={Pause}>Pause</button> 
        </div>
        </div>
    </div>
)
}

export default CleverSlider