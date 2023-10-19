
import './listado.css'

import img from '../../../imagenes/pexels-photo-5570224.jpeg'
import img1 from '../../../imagenes/pexels-photo-5570224.jpeg'
import img2 from '../../../imagenes/pexels-photo-5570224.jpeg'
import img3 from '../../../imagenes/pexels-photo-5570224.jpeg'

import {BsArrowRight} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
const Listado = () => {
  return (
    <div className='listadoSection'>
      <div className="heading flex">
        <h1>Mi Lista</h1>
        <button className='btn flex'>
          Ver todo  <BsArrowRight className= 'icon'/>
        </button>
      </div>

      <div className='secContainer flex'>
        <div className='singleItem'>
          <AiFillHeart className= 'icon' />
          <img src= {img} alt="Image Name" />
          <h3>Departamento</h3>
        </div>
      </div>
      <div className='secContainer flex'>
        <div className='singleItem'>
          <AiFillHeart className= 'icon' />
          <img src= {img1} alt="Image Name" />
          <h3>Departamento</h3>
        </div>
      </div>
      <div className='secContainer flex'>
        <div className='singleItem'>
          <AiFillHeart className= 'icon' />
          <img src= {img2} alt="Image Name" />
          <h3>Departamento</h3>
        </div>
      </div>
      <div className='secContainer flex'>
        <div className='singleItem'>
          <AiFillHeart className= 'icon' />
          <img src= {img3} alt="Image Name" />
          <h3>Departamento</h3>
        </div>
      </div>
    </div>
  )
}

export default Listado