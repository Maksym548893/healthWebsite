import BookSessionMenu from "../bookSessionComponents/minDoorBookSessionMenu"
import BookingCart from "../bookSessionComponents/minDoorBookSessionBookingCart"
import NextChapter from "../bookSessionComponents/minDoorBookSessionNextChapter"
import BookSessionCare from "../bookSessionComponents/minDoorBookSessionCare"
import ThreeBlock from "../bookSessionComponents/MinDoorBookSessionThreeBlock"
import StartHealing from "../bookSessionComponents/minDoorBookSessionStartHealing"
import BookSessionFooter from "../bookSessionComponents/minDoorBookSessionFooter"

function MinDoorBookASession() {

    return(
        <section className='hero'>
            <BookSessionMenu />

            <BookingCart />

            <NextChapter />

            <BookSessionCare />

            <ThreeBlock />

            <StartHealing />

            <BookSessionFooter />
        </section>
    )
}

export default MinDoorBookASession