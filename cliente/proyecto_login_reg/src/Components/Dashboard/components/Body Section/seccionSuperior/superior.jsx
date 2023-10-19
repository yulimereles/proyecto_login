
import './superior.css'

import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {BsArrowRight} from 'react-icons/bs'

//importacion de imagen de admi
import img from '../../../imagenes/perfil.jpg'
import video from '../../../imagenes/video-fondo-publicar.mp4'
import img2 from '../../../imagenes/teletrabajo.png'
const Superior = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Bienvenido a miAlqui</h1>
          <p>¡Queremos que tu experiencia en miAlqui sea  ùnica.</p>
        </div>

        <div className='searchBar flex'>
            <input type="text"  placeholder='Search Dashboard'/>
            <BiSearchAlt className= 'icon'/>
        </div>

        <div className="admiDiv flex">
          <TbMessageCircle className= 'icon'/>
          <MdOutlineNotificationsActive className='icon'/>
          <div className="admiImage">
            <img src={img}alt="Admi Image" />
          </div>
        </div>
      </div>

      <div className='cardSection flex'>

        <div className='rightCard flex'>
          <h1>Alquilar y vender</h1>
          <p>Poder vender y alquilar ahora es màs facil con miAlqui</p>

          <div className='buttons flex'> 
              <button className='btn'>Explora màs</button>
              <button className='btn transparent'>Lo màs visto</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
  
        </div>

        <div className='leftCard flex'>
          <div className='main flex'>

            <div className="textDiv">
              <h1>Estadisticas</h1>

              <div className='flex'>
                <span>
                  Hoy <br /> <small>Orden</small>
                </span>
                <span>
                  Este mes<br /> <small>Orden</small>
                </span>
              </div>
              
             <span className='flex link'>
                Ver todo <BsArrowRight className='icon'/>
             </span>

            </div>

            <div className="imagDiv">
              <img src={img2} alt="Image Name" />
            </div>
            
            </div> 
        </div>

      </div>
    </div>
  )
}

export default Superior