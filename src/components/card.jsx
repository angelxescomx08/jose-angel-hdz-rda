import React, { useState } from 'react'

import '../css/card.css'
import github from '../img/github.svg'

export default function Card({ language, id, img, link_github, titulo, descripcion, lenguajes, link_web }) {
    const link = React.createRef()
    const [see_github, setSee_github] = useState(false)

    return (
        <article id={id} className="card">
            <figure>
                <img className="card_img" src={img} alt="imagen proyecto" />
            </figure>

            <p className={`card_see_on_github animate__animated animate__fast ${see_github?'animate__fadeIn':'animate__fadeOut'}`}>
                {language ? 'See on Github' : 'Ver en Github'}
            </p>

            <a href={link_github} target="_blank" rel="noreferrer" className="card_a">
                <img ref={link} className="card_github" src={github} alt="github link" onMouseOver={() => {
                    setSee_github(true)
                }} onMouseOut={() => {
                    setSee_github(false)
                }} />
            </a>
            <h3 className="card_h3">{titulo}</h3>
            <p className="card_p">{descripcion}</p>
            {
                link_web && <div className="container_link_web"><a className="link_web" href={link_web} target="_blank" rel="noreferrer">
                    {language ? 'CHECK OUT' : 'REVISAR'}</a></div>
            }
            {
                link_web ? <div className="container_lenguajes">
                    {
                        lenguajes.map(item => {
                            return <span className="lenguajes" key={item}>{item}</span>
                        })
                    }
                </div> : <div className="container_lenguajes-fondo">
                    {
                        lenguajes.map(item => {
                            return <span className="lenguajes" key={item}>{item}</span>
                        })
                    }
                </div>
            }
        </article>
    )
}