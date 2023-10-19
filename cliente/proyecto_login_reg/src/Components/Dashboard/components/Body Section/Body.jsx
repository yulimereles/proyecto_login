import './body.css'
import Superior from './seccionSuperior/superior'
import Listado from './listadoSeccion/listado'
import Actividad from './actividadSeccion/actividad'
const Body = () => {
  return (
    <div className='mainContent'>
        <Superior/>

        <div className='bottom flex'>
            <Listado/>
            <Actividad/>
        </div>
    </div>
  )
}

export default Body