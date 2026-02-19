import './minDoorHome.css'
import MinDoorLogo from '../images/myphoto.svg'
import { Link } from 'react-router-dom'
import HomeMenu from '../components/homeMenu'
import HomeMain from '../components/homeMain'
import HomeMainNext from '../components/homeMainNext'
import HomeAnywhere from '../components/homeAnywhere'
import HomeGreenPatuk from '../components/homeGreenPatuk'
import HomeBetween from '../components/homeBetween'
import HomeAuthor from '../components/homeAuthor'
import HomeCommentsOfPeople from '../components/homeCommentsOfPeople'
import HomeQuestions from '../components/homeQuestions'
import HomeStartYourHealing from '../components/homeStartYourHealing'
import HomeFooter from '../components/homeFooter'


function MinDoorHome() {

    return(
        <section className='hero'>
        <HomeMenu />

        <HomeMain />

        <HomeMainNext />

        <HomeAnywhere />

        <HomeGreenPatuk />

        <HomeBetween />

        <HomeAuthor />

        <HomeCommentsOfPeople />

        <HomeQuestions />

        <HomeStartYourHealing />

        <HomeFooter />
        <section className='hahahah'></section>
        </section>
    )
}

export default MinDoorHome