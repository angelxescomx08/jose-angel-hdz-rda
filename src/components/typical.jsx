import '../css/typical.css'
import foto from '../img/angel.jpg'
import gmail from '../img/gmail.svg'
import facebook from '../img/facebook.svg'
import github from '../img/github.svg'
import printInDOMNode from '../js/printInDOMNode'
import pdf from '../pdf/CV.pdf'
import { useEffect } from 'react'

export default function Typical({ language,setShowMenu }) {
    useEffect(() => {
        const text = language ? ["I'm José Ángel a future software engineer that studies at ESCOM-IPN. ",
            "I love web development, I think that web is the plattaform of the future, ",
            "and I'm interested in machine learning and mobile applications. ",
            "you never stop learning, just go ahead and try to make life easy :D."] : [
            "Soy José Ángel un futuro ingeniero de software que estudia en ESCOM-IPN. ",
            "Yo amo el desarrollo web, pienso que la web es la plataforma del futuro, ",
            "nunca paras de aprender, solo sigue adelante y trata de hacer la vida más fácil :D. "
        ]
        const DOMNode = document.getElementById('text')
        return printInDOMNode(DOMNode, text)
    }, [language])

    return (
        <section id="aboutme" className="section" onClick={()=>{
            setShowMenu(false)
        }}>
            <article className="container">
                <div className="typing" >
                    <span className="typing_span hola">{language ? 'Hello 👋' : 'Hola 👋'}</span><br /><br />
                    <span id="text" className="typing_span"></span>
                </div>
                <img className="container_img" src={foto} alt="foto de perfil" />
            </article>
            <article className="container_datos">
                <a href="mailto:jose.angel.hdz.rda@gmail.com"><img className="container_datos_img" src={gmail} alt="gmail logo" /></a>
                <a href="https://www.facebook.com/angelx105" target="_blank" rel="noreferrer"><img className="container_datos_img" src={facebook} alt="facebook logo" /></a>
                <a href="https://github.com/angelxescomx08" target="_blank" rel="noreferrer"><img className="container_datos_img" src={github} alt="github logo" /></a>
            </article>
            <a href={pdf} target="_blank" rel="noreferrer" className="resume">{language ? 'MY CURRICULUM' : 'MI CURRÍCULUM'}</a>

        </section>
    )
}