import '../css/card_zoom.css';

const CardZoom = ({titulo,img,descripcion})=>{
    return(
        <div className='card-zoom'>
            <img src={img} alt=""/>
            <div className='card-zoom-container-texto'>
                <h3>{titulo}</h3>
                <hr/>
                <p>
                    {descripcion}
                </p>
            </div>
        </div>
    )
}

export default CardZoom;