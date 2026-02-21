import FirstImg from '../images/firstTherapy.png'
import SecondImg from '../images/secondTherapy.png'
import ThirdImg from '../images/thirdTherapy.png'

import PreviouslyArrow from '../images/leftStrilka.svg'
import NextArrow from '../images/rightStrilka.svg'

export const left_part = [
    {
        id: 1,
        main_TEXT : 'Every Session',
        minor_WORD: 'Matters',
        under_TEXT: 'Therapists support clients in making small steps for improvements',
    }   
]

export const ourChangingPhoto_Text = [
    {
        id: 0,
        img: FirstImg,
        main_text: '“With the clinic’s support, our home has gently transformed into a sanctuary of calm. We now communicate with care and clarity, leaving all past conflicts so far behind.”',
        name: 'Jonas Muller',
        field_of_activity: 'Family Therapy'
    },

    {
        id: 1,
        img: SecondImg,
        main_text: '“Through the center’s guidance, our family has slowly grown into a refuge of peace. We speak with warmth and honesty now, letting all former tensions drift away today.”',
        name: 'Jake Patel',
        field_of_activity: 'Family Therapy'
    },

    {
        id: 2,
        img: ThirdImg,
        main_text: '“Thanks to the clinic’s care, our space has softly evolved into a place of balance. We communicate with gentle respect now, leaving every old frustration well behind.”',
        name: 'Michael Chen',
        field_of_activity: 'Depression Support'
    },
]

export const buttonsForBox = [
    {
        id: 1,
        previously: PreviouslyArrow,
        next: NextArrow
    }
]