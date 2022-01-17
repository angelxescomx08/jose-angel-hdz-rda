import { useEffect } from 'react';
import gustos from '../js/gustos';
import '../css/slider.css';
import M from 'materialize-css';

const Slider = ({language}) => {
    useEffect(() => {
        const elems = document.querySelectorAll('.carousel');
        const instance = M.Carousel.init(elems, {
            fullWidth: true
        });
        const autoPlay = async (instance)=>{
            const promesa = new Promise(resolve=>{
                return setTimeout(()=>{
                    instance.next();
                    autoPlay(instance);
                },3000)
            })
            const id = await promesa;
            clearTimeout(id);
        }
        autoPlay(instance[0]);
    },[])
    return (
        <div className="carousel carousel-slider center">
            {
                gustos.map(gusto => {
                    return (
                        <div key={gusto.title+"id"} className="carousel-item red white-text">
                            <div className='card-slider'>
                                <img src={gusto.img} alt="" />
                                <div className='card-slider-container-texto'>
                                    <h3>{language?gusto.title:gusto.titulo}</h3>
                                    <hr />
                                    <p>
                                        {language?gusto.description:gusto.descripcion}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider;