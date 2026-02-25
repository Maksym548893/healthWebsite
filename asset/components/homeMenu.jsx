import MinDoorLogo from '../images/myphoto.svg'
import MiniCartLogo from '../images/cartik.svg'
import { Link } from 'react-router-dom'
import './homeMenu.css'
import { useEffect, useState } from 'react'
import { getHomeMenuData }  from '../api/homeMenuApi'
import { hamburger } from '../data/homeMenuData'

function HomeMenu() {
    const [hamburgers, setHamburgers] = useState([])

    useEffect(() => {
        getHomeMenuData()
        .then(data => 
            setHamburgers(data)
        )

        .catch(() => 
            setHamburgers(hamburger))
    }, [])

    const [isOpen, setIsOpen] = useState(false)

    const [isOpen1, setIsOpen1] = useState(false)

    const [isRotated, setIsRotated] = useState(false)

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
    
    const [isHamburger, setIsHamburger] = useState(false)

    const HandleHamburgerOn = () => {
        setIsHamburger(prev => !prev)
    }

    const [isWideOpen, setIsWideOpen] = useState(false)

    const MenuOpen = () => {
        setIsWideOpen(prev => !prev)
        setIsRotated(gav => !gav)
    }
    return(
    <header>
    <div className='leftsideOfMenu'>
    <img className='MindoorLogo' src={MinDoorLogo} alt="" />

    <nav>
        <div className="wrapperikOnMenu" onMouseEnter={() => setIsOpen1(true)} onMouseLeave={() => setIsOpen1(false)}>
            <Link className='allPages'onMouseEnter={HandleMakeRotateUp} onMouseLeave={HandleMakeRotateDown}>All Pages <svg style={style} onMouseEnter={HandleMakeRotateUp} onMouseLeave={HandleMakeRotateDown} className='downArrow' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></Link>

            {isOpen1 && (
            <div className='allPagesDiv'>
            <div className="divOfLists">
                <div className="list1">
                    <Link className='elementAllPages'>Home</Link>
                    <Link className='elementAllPages'>About</Link>
                    <Link className='elementAllPages'>Service</Link>
                    <Link className='elementAllPages'>Service Details</Link>
                    <Link className='elementAllPages'>Blog</Link>
                    <Link className='elementAllPages'>Blog Details</Link>
                </div>

                <div className='list1'>
                    <Link className='elementAllPages'>Booking</Link>
                    <Link className='elementAllPages'>Product</Link>
                    <Link className='elementAllPages'>Product Details</Link>
                    <Link className='elementAllPages'>Testimonial</Link>
                    <Link className='elementAllPages'>Terms & Conditions</Link>
                    <Link className='elementAllPages'>Privacy Policy</Link>
                </div>
                <div className='list1'>
                    <Link className='elementAllPages'>Contact</Link>
                    <Link className='elementAllPages'>Styleguide</Link>
                    <Link className='elementAllPages'>License</Link>
                    <Link className='elementAllPages'>Changelog</Link>
                    <Link className='elementAllPages'>404</Link>
                </div>
            </div>
            </div>
        )}
        </div>
        <div className='insideks'>
        <Link className='menuEl' to={'/about'}>About</Link>
        <Link className='menuEl' to={'/service'}>Service</Link>
        <Link className='menuEl' to={'/contact'}>Contact</Link>
        </div>
    </nav>

    </div>
    <div className='rightsideOfMenu'>
        <div className='cartik'>
            <div className='greenCircle'></div> 
            <button className='Cart' onClick={() => setIsOpen(true)}>
            <img className='cartikkk' src={MiniCartLogo} alt="cart" />
            </button>
        </div>
        {isOpen && (
                <div className="overlay" onClick={() => setIsOpen(false)}>
                    <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="inside">
                            <p className='mainName'>Your Cart</p>
                            <button className='closeModalBtn' onClick={() => setIsOpen(false)}><svg className='closeModal' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
                        </div>
                        <hr className='underLine'/>
                        <div className="overhow">
                        <p className='addedItems'>No items found.</p>
                        </div>
                    </div>
                </div>
            )
            }
            <div className="hambuger-menu">
            <div className="hamburgerLogo">
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={HandleHamburgerOn} height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            {isHamburger && (
                <ul className='loop'>
                    <Link className='allPages1' onClick={MenuOpen}>All Pages <svg style={style} onMouseEnter={HandleMakeRotateUp} onMouseLeave={HandleMakeRotateDown} className='downArrow1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></Link>
                    {isWideOpen && (
                    <ul className='ditu'>
                        {hamburgers.map(hamburger => (
                        <Link to={hamburger.url} className='hamEl' key={hamburger.id}>{hamburger.name}</Link>
                        ))}
                    </ul>
                    )}
                <Link className='elementAllPages'>About</Link>
                <Link className='elementAllPages'>Service</Link>
                <Link className='elementAllPages'>Contact</Link>
                </ul>
            )}
            </div>
            </div>
        <div className="haha">
        <Link className='bookASession' to={'/book-a-session'}>Book A Session</Link>
        <button className='telephone'><svg className='tele' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>+021 480-202-5906</button>
            </div>

    </div>
    </header>
    )
}

export default HomeMenu