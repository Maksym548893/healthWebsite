    import './homeQuestions.css'
    import { getHomeQuestionsData } from '../api/homeQuestionsApi'
    import { frequentlyQuestions, Questions, fotoQuestions } from '../data/homeQuestionsData'
    import { useEffect, useState } from 'react'
    import MinDoorQueArrow from '../images/queArrow.svg'

    function HomeQuestions() {
        const [freQues, setFreQues] = useState([])
        const [quests, setQuests] = useState([])
        const [fotos, setFotos] = useState([])

        const [isOpen, setIsOpen] = useState(null)


        const HandlerOpener = (id) => {
            setIsOpen(prev => prev === id ? null : id)
        }

        useEffect(() => {
            getHomeQuestionsData()
            .then(
                data => {
                setFreQues(data.frequentlyQuestions ?? frequentlyQuestions)
                setQuests(data.Questions ?? Questions)
                setFotos(data.fotoQuestions ?? fotoQuestions)  
                }        
            )

            .catch(
                () => {
                    setFreQues(frequentlyQuestions)
                    setQuests(Questions)
                    setFotos(fotoQuestions)
                }
            )
        }, [])

        return(
            <div className="HomeQuestions">
                    {freQues.map(freQue => (
                    <div className="frequentlyQuestions" key={freQue.id}>
                        <h1 className='mainQue'>{freQue.mainTxt}</h1>
                        <div>
                            <p className='lessQue' >{freQue.lessMainTxt}</p>
                        </div>
                    </div>
                    ))}

                    <div className="queAndFoto">
                        <div className='claassss'>
                        {quests.map(quest => (
                                <div className='princ' key={quest.id} onClick={() => HandlerOpener(quest.id)}>
                                    <div className="part">
                                        <p className={`  ${isOpen === quest.id ? 'focused' : ''}`}>{quest.questions}</p>
                                        <img className={`MinDoorQueArrow ${isOpen === quest.id ? 'focused' : ''}`} src={MinDoorQueArrow} style={{
                                            transform:isOpen === quest.id && 'rotate(180deg)',
                                            transition: '0.5s ease-in-out'
                                        }} alt="MinDoorQueArrow" />
                                    </div>

                                    <div className="kippop">
                                        <div className={`ans ${isOpen === quest.id ? 'active' : ''}`}>                                                      
                                            <p className='answer' >{quest.answer}</p>
                                        </div>
                                    </div>

                                    <div className='hr'>
                                        <hr />
                                    </div>

                                </div>
                            ))}
                        </div>

                        {fotos.map(foto => (
                            <div className="kiFoto" key={foto.id}>
                                <img className='imgQu' src={foto.img} alt="foto.img" />
                            </div>  
                        ))}
                    </div>
                    </div>

        )
    }

    export default HomeQuestions