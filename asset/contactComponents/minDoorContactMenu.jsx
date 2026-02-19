import './minDoorContactMenu.css'

import { useEffect, useRef, useState } from "react"
import { getMinDoorContactMenuData } from "../contactApi/minDoorContactMenuApi"
import { menuAllPages, menuAllPagesSecond, menuAllPagesThird, menuContactMain, cart, telAndbook } from "../contactData/minDoorContactMenuData"
import MinDoorLogo from '../images/myphoto.svg'
import MinDoorDownArrow from '../images/queArrow.svg'
import { Link } from "react-router-dom"
import MinDoorContactCart from '../images/cartik.svg'
import MinDoorContactCloser from '../images/closer.svg'
function ContactMenu() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const [isRotated, setIsRotated] = useState(false)

    const [menuFirsts, setMenuFirsts ] = useState([])
    const [menuSeconds, setMenuSeconds ] = useState([])
    const [menuThirds, setMenuThirds] = useState([])
    const [menuMain, setMenuMain] = useState([])
    const [carts, setCarts] = useState([])
    const [tels, setTels] = useState([])

    const HandleMakeRotateUp = () => {
        setIsRotated(true)
    }

    const HandleMakeRotateDown = () => {
        setIsRotated(false)
    }

    const style = {
        transform: isRotated ? 'rotate(180deg)' : "rotate(0deg)",
        transition: '0.5s ease-in-out',
    }

    const timeoutRef = useRef(null)

    const MouseENTER = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setIsOpen(true)
    }

    const MouseLEAVE = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false)
            timeoutRef.current = null
        }, 1500);
    }


    useEffect(() => {
        getMinDoorContactMenuData()
        .then((data) => {
            setMenuFirsts(data.menuAllPages ?? menuAllPages)
            setMenuSeconds(data.menuAllPagesSecond ?? menuAllPagesSecond)
            setMenuThirds(data.menuAllPagesThird ?? menuAllPagesThird)
            setMenuMain(data.menuContactMain ?? menuContactMain)
            setCarts(data.cart ?? cart)
            setTels(data.telAndbook ?? telAndbook)
        })
        .catch(() => {
            setMenuFirsts(menuAllPages)
            setMenuSeconds(menuAllPagesSecond)
            setMenuThirds(menuAllPagesThird)
            setMenuMain(menuContactMain)
            setCarts(cart)
            setTels(telAndbook)
        })
    }, [])

    return(
        <header>
            <div className="leftside">
                        <img className='logo' src={MinDoorLogo} alt="MinDoorLogo" />
        <nav>
            <div className="leftside">
            <div className="menushka" onMouseEnter={MouseENTER} onMouseLeave={MouseLEAVE}>
            <Link className='allpages' onMouseEnter={HandleMakeRotateUp} onMouseLeave={HandleMakeRotateDown}>All Pages <img style={style} onMouseEnter={HandleMakeRotateUp} onMouseLeave={HandleMakeRotateDown} src={MinDoorDownArrow} alt="" /></Link>
            {isOpen && (
                <div className="lists"  onMouseEnter={HandleMakeRotateUp} onMouseLeave={HandleMakeRotateDown}>
                <div className="firstLein">
                    {menuFirsts.map(first => (
                    <div className="like">
                        <Link className='likos' key={first.id} to={first.link}>{first.name}</Link>
                    </div>
                    ))}
                </div>

                <div className="secondLein">
                    {menuSeconds.map(second => (
                    <div className="like2">
                        <Link className='likos' key={second.id} to={second.link}>{second.name}</Link>
                    </div>
                    ))}
                </div>

                <div className="thirdLein">
                    {menuThirds.map(third => (
                    <div className="like3">
                        <Link className='likos' key={third.id} to={third.link}>{third.name}</Link>
                    </div>
                    ))}
                </div>
                </div>
            )}
            </div>
            
            <div className="linksOthers">
                {menuMain.map(contact => (
                <div className="like4">
                    <Link className='likos' key={contact.id} to={contact.link}>{contact.name}</Link>
                </div>
                ))}
            </div>
            </div>
            </nav>
            </div>
            <div className="rightside">
                <div className="cats">
                <img className='ai' onClick={() => setIsOpen1(true)} src={MinDoorContactCart} alt="" />
                <div className='greenPunkt'></div>
                {isOpen1 && (
                    <div className="overlay1" onClick={() => setIsOpen1(false)}> 
                    <div className="wrappper" onClick={(e) => e.stopPropagation()}>
                        {carts.map(car => (
                    <div className="cart-model" key={car.id}>
                            <div className="high">
                                <p className="firstPhrase">{car.firstPhrase}</p>
                                <img className="aika" onClick={() => setIsOpen1(false)} src={MinDoorContactCloser} alt="MinDoorContactCloser" />
                            </div>

                            <div className="hr">
                                <hr />
                            </div>

                            <div className="lower">
                                <p>{car.lessPhrase}</p>
                            </div>
                    </div>
                        ))}
                    </div>
                    </div>
                )}
                </div>

                <div className="telbook">
                    {tels.map(tel => (
                        <div className="zysa" key={tel.id}>
                            <Link className="numeros" to={tel.link}>{tel.book}</Link>
                            <button className="numerik"><img className='classik' src={tel.img} alt="tel.img" />{tel.tel}</button>
                        </div>
                    ))}
                </div>
            </div>

        </header>
    )
}

export default ContactMenu