import './homeFooter.css'
import {getHomeFooterData} from '../api/homeFooterApi'
import MinDoorLogo from '../images/myphoto.svg'
import { firstUp, secondUp, thirdUp, fourthUp, fifthUp } from '../data/homeFooterData'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fi } from '@faker-js/faker'


function HomeFooter() {
const [first, setFirst] = useState([])
const [second, setSecond] = useState([])
const [third, setThird] = useState([])
const [fourth, setFourth] = useState([])
const [fifth, setFifth] = useState([])
    
useEffect(() => {
    getHomeFooterData()
    .then(data => {
        setFirst(data.firstUp ?? firstUp)
        setSecond(data.secondUp ?? secondUp)
        setThird(data.thirdUp ?? thirdUp)
        setFourth(data.fourthUp ?? fourthUp)
        setFifth(data.fifthUp ?? fifthUp)
    })

    .catch(() => {
        setFirst(firstUp)
        setSecond(secondUp)
        setThird(thirdUp)
        setFourth(fourthUp)
        setFifth(fifthUp)
    })
}, [])


return(
    <div className="Footer">
        <div className="firstChapter">

        {first.map(fir => (
        <div className="firstUp">
            <div className='main' key={fir.id}>
                    <p className='mensch' >{fir.main}</p>
            </div>

            <div className="our" key={fir.id}>
                <p className='ourText'>{fir.our}</p>
                <div className="logos">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} className='cl' fill="currentColor"><path d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} className='cl' fill="currentColor"><path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} className='cl' fill="currentColor"><g><path d="M23.002,21.584h0.227l-0.435-0.658l0,0c0.266,0,0.407-0.169,0.409-0.376c0-0.008,0-0.017-0.001-0.025c0-0.282-0.17-0.417-0.519-0.417h-0.564v1.476h0.212v-0.643h0.261L23.002,21.584z M22.577,20.774h-0.246v-0.499h0.312c0.161,0,0.345,0.026,0.345,0.237c0,0.242-0.186,0.262-0.412,0.262" /><path d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745C6.26,7.284,5.479,8.065,4.515,8.065z M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245c-0.012-0.819-0.685-1.474-1.503-1.463" /><path d="M22.603,19.451c-0.764,0.007-1.378,0.633-1.37,1.397c0.007,0.764,0.633,1.378,1.397,1.37c0.764-0.007,1.378-0.633,1.37-1.397c-0.007-0.754-0.617-1.363-1.37-1.37H22.603 M22.635,22.059c-0.67,0.011-1.254-0.522-1.265-1.192c-0.011-0.67,0.523-1.222,1.193-1.233c0.67-0.011,1.222,0.523,1.233,1.193c0,0.007,0,0.013,0,0.02C23.81,21.502,23.29,22.045,22.635,22.059h-0.031" /></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} className='cl' fill="currentColor"><g><path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311C8.416,2.174,8.796,2.162,12,2.162M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942C15.668,0.014,15.259,0,12,0z" /><path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" /><circle cx="18.406" cy="5.594" r="1.44" /></g></svg>

                </div>
            </div>
        </div>
        ))}
        
        <div className='partTwo'>
            
        {second.map(sec => (
            <div className="secondUp">
                <div className="mainCompany" key={sec.id}>
                    <p className='Company'>{sec.mainCompany}</p>

                    {sec.mainStich.map((line, i) => (
                        <ul className='mainStich'>
                            <Link className='maStich' key={i}>{line}</Link>
                        </ul>
                    ))}
                </div>
            </div>
        ))}

        {third.map(thi => (
            <div className="thirdUp">
                <div className="mainMore" key={thi.id}>
                    <p className='More'>{thi.mainMore}</p>

                    {thi.moreStich.map((line, i) => (
                        <ul className='moreStich'>
                            <Link className='moStich' key={i}>{line}</Link>
                        </ul>
                    ))}
                </div>
            </div>
        ))}

        {fourth.map(fou => (
            <div className="fourthUp">
                <div className="mainLegal" key={fou.id}>
                    <p className='Legal'>{fou.mainLegal}</p>

                    {fou.legalStich.map((line, i) => (
                        <ul className='legalStich'>
                            <Link className='leStich' key={i}>{line}</Link>
                        </ul>
                    ))}
                </div>
            </div>
        ))}

        </div>

        </div>

        <hr className='harush'/>

        <div className="secondChapter">
            <Link to={'/'} className="LogoFooter"><img src={MinDoorLogo} alt="MinDoorLogo" /></Link>
            
            {fifth.map(fif => (
                <div className="fifthUp">
                    <div className="mainCopy" key={fif.id}>
                        <p className='copy'>{fif.mainCopy} {fif.mainCopy1}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
)
}

export default HomeFooter