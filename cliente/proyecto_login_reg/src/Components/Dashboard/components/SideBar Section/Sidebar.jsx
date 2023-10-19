
import './sidebar.css'

import logo from '../../imagenes/teletrabajo.png'

import {IoMdSpeedometer} from 'react-icons/io'
import {BsChatRightDots} from 'react-icons/bs'
import {MdTravelExplore} from 'react-icons/md'
import {BsQuestionCircle} from 'react-icons/bs'
const Sidebar = () => {
  return (
    <div className='sideBar grid'>
        <div className='logoDiv flex'>
        <img src= {logo} alt="Image Name" />
        <h2>MIALQUI.</h2>
        </div>

        <div className='menuDiv'>
            <h3 className='divTitle'>
                Todo en una sola plaforma
            </h3>
            <ul className='menuLists grid'>
                <li className='listItem'>
                    <a href="#" className='menuLink flex'>
                    <MdTravelExplore className = 'icon'/>
                    <span className='smallText'>
                        Explorar
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href="#" className='menuLink flex'>
                    <IoMdSpeedometer className = 'icon'/>
                    <span className='smallText'>
                        Ley de Alquileres
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href="#" className='menuLink flex'>
                    <IoMdSpeedometer className = 'icon'/>
                    <span className='smallText'>
                        ¿Quienes somos?
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href="#" className='menuLink flex'>
                    <IoMdSpeedometer className = 'icon'/>
                    <span className='smallText'>
                        Contactanos
                    </span>
                    </a>
                </li>
            </ul>
        </div>

        <div className='menuDiv'>
            <h3 className='divTitle'>
                Servicios
            </h3>
            <ul className='menuLists grid'>
                <li className='listItem'>
                    <a href="#" className='menuLink flex'>
                    <BsChatRightDots className = 'icon'/>
                    <span className='smallText'>
                        Ayuda
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href="#" className='menuLink flex'>
                    <MdTravelExplore className = 'icon'/>
                    <span className='smallText'>
                        Políticas y Términos de Uso
                    </span>
                    </a>
                </li>
            </ul>
        </div>
            <div className='sideBarCard'>
                <BsQuestionCircle className = 'icon' />
                <div className='cardContent'>
                <div className='circle1'></div>
                <div className='circle2'></div>

                <h3>Centro de Ayuda</h3>
                <p>Si tienes preguntas o problemas con MIALQUI, contáctanos. Estamos aquí para ayudarte.</p>

                <button className='btn'> Ir al centro de ayuda</button>
                </div>
            </div>
    </div>
  )
}

export default Sidebar