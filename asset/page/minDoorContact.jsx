import ContactMenu from '../contactComponents/minDoorContactMenu'
import UnderMenu from '../contactComponents/minDoorContactUnderMenu'
import ContactForm from '../contactComponents/minDoorContactContactForm'
import FrequentlyAnswersMainName from '../contactComponents/minDoorContactFrequentlyAnswersName'
import FrequentlyAnswers from '../contactComponents/minDoorContactFrequentlyAnswers'
import HealingForm from '../contactComponents/minDoorContactHealingForm'
import ContactFooter from '../contactComponents/minDoorContactFooter'
import './minDoorContact.css'

function MinDoorContact() {

    return(
        <section className='hero'>
            <ContactMenu  />

            <UnderMenu />

            <ContactForm />

            <FrequentlyAnswersMainName />

            <FrequentlyAnswers />

            <HealingForm />

            <ContactFooter />
        </section>
    )
}

export default MinDoorContact