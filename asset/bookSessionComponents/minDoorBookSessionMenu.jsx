import { getBookSessionMenuData } from '../bookSessionApi/minDoorBookSessionMenuApi'
import { corzuna, bookAsessionEl, bookSessionPages, bookSessionPagesSecond, bookSessionPagesThird, rightSiDe } from '../bookSessionData/minDoorBookSessionMenuData'

import MinDoorLogos from '../images/myphoto.svg'
import MinDoorDownArrows from '../images/queArrow.svg'
import { Link } from "react-router-dom"
import MinDoorContactCarts from '../images/cartik.svg'
import MinDoorContactClosers from '../images/closer.svg'

import './minDoorBookSessionMenu.css'
import { useEffect, useRef, useState } from 'react'

function BookSessionMenu() {
    const [cors, setCors] = useState([])
    const [elems, setElems] = useState([])
    const [firstPages, setFirstPages] = useState([])
    const [secondPages, setSecondPages] = useState([])
    const [thirdPages, setThirdPages] = useState([])
    const [sides, setSides] = useState([])

    useEffect(() => {
        getBookSessionMenuData()
        .then((data) => {
            setCors(data.corzuna ?? corzuna)
            setElems(data.bookAsessionEl ?? bookAsessionEl)
            setFirstPages(data.bookSessionPages ?? bookSessionPages)
            setSecondPages(data.bookSessionPagesSecond ?? bookSessionPagesSecond)
            setThirdPages(data.bookSessionPagesThird ?? bookSessionPagesThird)
            setSides(data.rightSiDe ?? rightSiDe)
        })
        .catch(() => {
            setCors(corzuna)
            setElems(bookAsessionEl)
            setFirstPages(bookSessionPages)
            setSecondPages(bookSessionPagesSecond)
            setThirdPages(bookSessionPagesThird)
            setSides(rightSiDe)
        })
    }, [])

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const menuOpen = useRef(null)

    const MouseEntering = () => {
        if(menuOpen.current) {
            clearTimeout(menuOpen.current)
            menuOpen.current = null
        }
        setIsDropDownOpen(true)
    }

    const MouseLeaving = () => {
        menuOpen.current = setTimeout(() => {
            setIsDropDownOpen(false)
            menuOpen.current = null
        }, 1000);
    }

    const [isRevirse, setIsRevirse] = useState(false)

    const ReverseArrowUp = () => {
        setIsRevirse(true)
    }

    const ReverseArrowDown = () => {
        setTimeout(() => {
            setIsRevirse(false)
        }, 1000);
    }

    const styliok = {
        transform: isRevirse ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: '0.6s ease-in-out'
    }

    const [isCartOpen, setIsCartOpen] = useState(false)

    return(
        <header className="bookASession">
            <div className="leftSid">
<div className="logik"><img className='logiks' src={MinDoorLogos} alt="MinDoorLogos" /></div>

            <nav>
                <div className='menishka' onMouseEnter={MouseEntering} onMouseLeave={MouseLeaving}>
                <Link className='down-arrow' onMouseEnter={ReverseArrowUp} onMouseLeave={ReverseArrowDown}>All Pages <img onMouseEnter={ReverseArrowUp} onMouseLeave={ReverseArrowDown} style={styliok} src={MinDoorDownArrows} alt="" /></Link>
                {isDropDownOpen && (
                    <div className='listHere'>
                    <ul className='listOne'>
                    {firstPages.map(firPage => 
                        <Link className='listEL' to={firPage.link} key={firPage.id}>{firPage.name}</Link>
                    )}
                    </ul>

                    <ul className='listTwo'>
                    {secondPages.map(secPage => 
                        <Link className='listEL' to={secPage.link} key={secPage.id}>{secPage.name}</Link>
                    )}
                    </ul>

                    <ul className='listThree'>
                    {thirdPages.map(thiPage => 
                        <Link className='listEL' to={thiPage.link} key={thiPage.id}>{thiPage.name}</Link>
                    )}
                    </ul>

                    </div>
                )}
                </div>

                {elems.map(elem => 
                <div className='normalElems' key={elem.id}>
                    <Link to={elem.link} className='elems'>{elem.name}</Link>
                </div>
                )}

            </nav>
            </div>


            <div className="rightSid">
                <Link className='cartuks' onClick={() => setIsCartOpen(true)}><img className='hart' src={MinDoorContactCarts} alt="" /></Link>
                <div className='greenPunkts'></div>
                {isCartOpen && (
                    <div className="overlays" onClick={() => setIsCartOpen(false)}>
                        <div className="wrappers" onClick={(e) => e.stopPropagation()}>
                            {cors.map(cor => 
                            <div className="cartek" key={cor.id}>
                                <div className="erst">
                                    <p className='your-cart'>{cor.firstPhrase}</p>
                                    <img className='closers' onClick={() => setIsCartOpen(false)} src={MinDoorContactClosers} alt="" />
                                </div>

                                <div className="hr">
                                    <hr />
                                </div>

                                <div className="lessPhrases">
                                    <p className='last-phrase'>{cor.lessPhrase}</p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                )}



                {sides.map(side =>   
                <div className="rig" key={side.id}>
                <Link className='book-A-session' to={side.link}>{side.book}</Link>

                <Link className='phoneBtn'><img className='photoImg' src={side.img} alt="" /> {side.tel}</Link>
                </div>
                )}

            </div>
        </header>
    )
}

export default BookSessionMenu