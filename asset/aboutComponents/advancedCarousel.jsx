import { useEffect, useState } from 'react'
import Hawai from '../imgd/hawai.jpeg'
import Italy from '../imgd/italy.jpg'
import Mountain from '../imgd/mountain.jpg'
import Nevada from '../imgd/nevada.jpg'
import North from '../imgd/north.jpg'

function AdvancedCarousel() {
    const products = [
        {id: 1, img: Italy, description: 'Italy'},
        {id: 2, img: Nevada, description: 'Nevada'},
        {id: 3, img: North, description: 'North'},
        {id: 4, img: Mountain, description: 'Mountain'},
        {id: 5, img: Hawai, description: 'Hawai'}
    ]

    const [nowID, setNowID] = useState(1)
    const [isPlaying, setIsPlaying] = useState(false)

    const PrevButton = () => {
        setNowID(prev => prev > 1 ? prev - 1 : products.length - 1)
    }

    const NextButton = () => {
        setNowID(prev => prev < products.length ? prev + 1 : 1)
    }

    useEffect(() => {
        if(!isPlaying) return

        const PlayAuto = setInterval(() => {
            setNowID(prev => prev < products.length ? prev + 1 : 1)
        }, 2000);

        return() => {
            clearInterval(PlayAuto)
        }
    }, [products.length, isPlaying, nowID])

    const StartButton = () => {
        setIsPlaying(true)
    }

    const PauseButton = () => {
        setIsPlaying(false)
    }


    return(
        <div className="Advance">
            {products.map(prod => 
            prod.id === nowID && (
                <div className="fis" key={prod.id}>
                    <img style={{height: '400px', width: '400px'}} src={prod.img}/>
                    <p>{prod.description}</p>
                </div>
            )
            )}
            
            <div className="dotu" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
                {products.map(doty => 
                    <div key={doty.id}>
                        <div style={{backgroundColor: 'black', height: doty.id === nowID ? '12px' : '12px', width: doty.id === nowID ? '30px' : '15px',  borderRadius: doty.id === nowID ? '5px' : '50R', transition: '0.6s ease-in-out'}} onClick={() => setNowID(doty.id)}></div>
                    </div>
                )}  
            </div>

                <div className="buttonv">
                    <div>
                        <button onClick={PrevButton}>PrevButton</button>
                        <button onClick={NextButton}>NextButton</button>
                    </div>

                    <div>
                        <button onClick={StartButton}>StartButton</button>
                        <button onClick={PauseButton}>PauseButton</button>
                    </div>
                </div>

        </div>
    )
}

export default AdvancedCarousel