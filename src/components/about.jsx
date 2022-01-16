import '../css/about.css';
import CardZoom from './card_zoom';
import gustos from '../js/gustos';

const About = ({ language, setShowMenu }) => {
    return (
        <article onClick={() => setShowMenu(false)}>
            <h2 className="h2">{language ? 'About me' : 'Acerca de mí'}</h2>
            <hr />
            <div className='container-about-me'>
                {
                    gustos.map(gusto=>{
                        return <CardZoom key={gusto.titulo}
                                        titulo={language?gusto.titulo:gusto.title}
                                        img={gusto.img}
                                        descripcion={language?gusto.descripcion:gusto.description}/>
                    })
                }
            </div>
        </article>
    )
}

export default About;