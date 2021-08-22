import Card from '../components/card'
import carta from '../js/proyectos'
import '../css/container.css'
export default function Container({ language,setShowMenu }) {
    return (
        <div onClick={()=>{
            setShowMenu(false)
        }}>
            <h2 className="h2">{language ? 'Projects' : 'Proyectos'}</h2>
            <section className="card_container">
                {
                    carta.map(item => {
                        return <Card key={item['tittle-esp']} language={language} id={language?item['id-eng']:item['id-esp']} img={item.img} link_github={item.github} titulo={language ? item['tittle-eng'] : item['tittle-esp']}
                            descripcion={language ? item.english : item.spanish} lenguajes={item.lenguajes} link_web={item.link_web}></Card>
                    })
                }
            </section>
        </div>
    )
}