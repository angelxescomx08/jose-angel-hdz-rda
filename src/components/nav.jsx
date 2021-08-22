import '../css/nav.css'
import menu from '../img/menu.svg'

export default function Nav({setShowMenu}){
    return <nav className="nav">
        <img className="nav_img" src={menu} alt="icono de menu" onClick={()=>{
            setShowMenu((value)=>!value)
        }}/>
        <span className="nav_span" >José Ángel Hernández Radilla</span>
    </nav>
}