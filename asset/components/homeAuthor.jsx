import { useState, useEffect } from 'react'

import './homeAuthor.css'
import { getHomeAuthorDate } from '../api/homeAuthorApi'
import { care, meeting, experts } from '../data/homeAuthorData'

function HomeAuthor() {
    const [dopos, setDopos] = useState([])
    const [mets, setMets] = useState([])
    const [expers, setExpers] = useState([])

    useEffect(() => {
        getHomeAuthorDate()
        .then(data => {
         setDopos(data.care ?? care)
         setMets(data.meeting ?? meeting)
         setExpers(data.experts ?? experts)
        })

        .catch(() => {
            setDopos(care)
            setMets(meeting)
            setExpers(experts)
        })
    }, [])


    return(
        <div className="ourBlick">
            <div className="enka">
            {dopos.map(dopo => (
                <div className="dopomoga" key={dopo.id}>
                    <img className='ourIMG' src={dopo.img} alt="haMaLa" />
            
            <div className="paral">
                <p className='golovText'>{dopo.mainTEXT}</p>
                    <span className='negolovText'>{dopo.lessTEXT}</span>
            </div>
                </div>
            ))}
            </div>

            
        <div className="thetapist">
        {mets.map(met => (
            <div className='thera' key={met.id}>
                <h1 className='expertS'>{met.goloText} <i className='eXperts'>{met.goloText1}</i></h1>
                <div>
                    <p className='alok' >{met.undText}</p>
                </div>
                </div>
        ))}
        </div>

        <div className="ourExpirt">
            {expers.map(exper => (
                <div className="personExperts" key={exper.id}>
                    <img className='experImg' src={exper.img} alt="exper.img" />
                    <div className="blockBereich">
                        <p className='nameExp'>{exper.name}</p>
                        <p className='fieldActOfPers'>{exper.fieldOfAct}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default HomeAuthor