import '../css/menu.css'
import menu from '../img/menu.svg'
import gmail from '../img/gmail.svg'
import facebook from '../img/facebook.svg'
import github from '../img/github.svg'
import carta from '../js/proyectos'
import app from '../icons/app.svg'
import person from '../icons/person.svg'

export default function Menu(props) {
    return (
        <aside className={props.showMenu ? 'menu active' : 'menu'}>
            <article className="menu-article">
                <div className="container-name">
                    <img className="nav_img" src={menu} alt="icono de menu" onClick={() => {
                        props.setShowMenu((value) => !value)
                    }} />
                    <span className="nav_span name" >José Ángel Hernández Radilla</span>
                </div>
                <div className="container-perfil">
                    <article className="container_datos">
                        <a href="mailto:jose.angel.hdz.rda@gmail.com"><img className="container_datos_img menu-icon" src={gmail} alt="gmail logo" /></a>
                        <a href="https://www.facebook.com/angelx105" target="_blank" rel="noreferrer"><img className="container_datos_img menu-icon" src={facebook} alt="facebook logo" /></a>
                        <a href="https://github.com/angelxescomx08" target="_blank" rel="noreferrer"><img className="container_datos_img menu-icon" src={github} alt="github logo" /></a>
                    </article>
                </div>
            </article>
            <span className="language-span">{props.language ? 'Language' : 'Lenguaje'}</span>
            <div className="container-language">
                <span className="language-span">ESP</span>
                {
                    props.children
                }
                <span className="language-span">ENG</span>
            </div>

            <div className="container-projects">
                <span className="tittle-projects">{props.language ? 'About me' : 'Sobre mí'}</span>
                <div className="container-app">
                    <img className="person-icon" src={person} alt="person icon" />
                    <a className="link-a" href="#aboutme">
                        {props.language ? 'About me' : 'Sobre mí'}
                    </a>
                </div>
            </div>

            <div className="container-projects">
                <span className="tittle-projects">{props.language ? 'Projects' : 'Proyectos'}</span>
                {
                    carta.map(item => {
                        return (
                            <div className="container-app">
                                <img className="app-icon" src={app} alt="app icon" />
                                <a className="link-a" key={item['tittle-esp']} href={props.language ? `#${item['id-eng']}` : `#${item['id-esp']}`}>
                                    {props.language ? item['id-eng'] : item['id-esp']}
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    )
}