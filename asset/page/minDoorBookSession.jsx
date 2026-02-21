import BookSessionMenu from "../bookSessionComponents/minDoorBookSessionMenu"
import BookingCart from "../bookSessionComponents/minDoorBookSessionBookingCart"

function MinDoorBookASession() {

    return(
        <section className='hero'>
            <BookSessionMenu />

            <BookingCart />
        </section>
    )
}

export default MinDoorBookASession