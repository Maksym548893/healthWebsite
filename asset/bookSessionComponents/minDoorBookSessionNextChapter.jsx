import { useEffect, useState } from "react";
import { getNextChapterData } from "../bookSessionApi/minDoorBookSessionNextChapterApi";

import { left_part, ourChangingPhoto_Text , buttonsForBox } from "../bookSessionData/minDoorBookSessionNextChapterData";

import './minDoorBookSessionNextChapter.css'

function NextChapter() {
    const [left_parts, setLeft_parts] = useState([])
    const [changings_photos, setChangings_Photos] = useState([])
    const [buttons_boxs, setButtons_Boxs] = useState([])

    useEffect(() => {
        getNextChapterData()
        .then((data) => {
        setLeft_parts(data.left_part ?? left_part)
        setChangings_Photos(data.ourChangingPhoto_Text ?? ourChangingPhoto_Text)
        setButtons_Boxs(data.buttonsForBox ?? buttonsForBox)
        })
        .catch(() => {
            setLeft_parts(left_part)
            setChangings_Photos(ourChangingPhoto_Text)
            setButtons_Boxs(buttonsForBox)
        })
    }, [])

    const [changID, setChangID] = useState(0)

    const prevClick = () => {
        setTimeout(() => {
            setChangID(prev => prev > 0 ? prev - 1 : changings_photos.length - 1)
        }, 500);
    }

    const nextClick = () => {
        setTimeout(() => {
            setChangID(prev => prev < changings_photos.length - 1 ? prev + 1 : 0)
        }, 500);
    }

    return(
        <div className="nextChapter">
            {left_parts.map(left_pa =>
            <div className="left_Part" key={left_pa.id}>
                <div className="mainTexts">
                    <h1 className="mains_text">{left_pa.main_TEXT}</h1>
                    <h1 className="minors_text"><i>{left_pa.minor_WORD}</i></h1>
                </div>

                <div className="underText">
                    <p className="under_text">{left_pa.under_TEXT}</p>
                </div>
            </div>
            )}

            <div className="right_Part">
            {changings_photos.map(changings_photo =>
                changings_photo.id === changID && (
                <div className="allRight_Part" key={changings_photo.id}>

                <div className="changedImg" key={changings_photo.id}>
                    <div className="back">
                    <img className="fotku_my" src={changings_photo.img} alt="changings_photo_img" />
                    </div>
                </div>

                <div className="text_and_button">
                <div className="comms_with_name_field" key={changings_photo.id}>
                    <p className="main_text_not_main">{changings_photo.main_text}</p>
                </div>

                <div className="bitton">
                    <div className="name_and_field">
                        <p className="name_commentars">{changings_photo.name}</p>
                        <p className="field_of_activity">{changings_photo.field_of_activity}</p>
                    </div>

                {buttons_boxs.map(buttons_box => 
                    <div className="buttonsFor" key={buttons_box.id}>
                        <button onClick={prevClick} className="button_prev"><img className="prev" src={buttons_box.previously} alt="" /></button>

                        <button onClick={nextClick} className="button_next"><img className="next" src={buttons_box.next} alt="" /></button>
                    </div>
                )}   
                </div>
                </div>
            </div>


            )
            )}
        </div>
        </div>
    )

}

export default NextChapter