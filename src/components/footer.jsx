import '../css/footer.css'
export default function Footer({ language,setShowMenu }) {
    return (
        <footer className="footer" onClick={()=>{
            setShowMenu(false)
        }}>
            <p className="footer_p">
                {
                    language ?'Made by José Ángel Hernández Radilla.'
                        : 'Creado por José Ángel Hernández Radilla.'
                }
            </p>
        </footer>
    )
}