import  { useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link  } from 'react-router-dom'
import Axios from 'axios'

//import de img/video
import video  from '../LoginImg/4140f6fa067e46f738a3d402b8dbd6de.mp4'
import logo from '../LoginImg/teletrabajo.png'

//import icons
import { FaUserShield } from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
const Login = () => {

  const [loginUsername, setLoginUsername] = useState('')
  const[loginPassword, setLoginPassword]  = useState('')

  const loginUser= (e)=>{
    e.preventDefault()

    Axios.post('http://localhost:3002/login', {
      LoginUsername: loginUsername,
      LoginPassword: loginPassword
    }).then((response)=>{
     console.log(response)

    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    window.location.href = "/dashboard"
  }

  return (
    <div className='loginPage flex'>
      <div className='contanier flex'>
     
     <div className='gifDiv'>
      <video src={video} autoPlay muted loop  ></video>

      <div className='textDiv'>
        <h2 className='title'> Create un usuario para poder ver más informacion</h2>
        <p>Alquilar ahora es más facil con MIALQUI</p>
      </div>
      
      <div className='footerDiv flex'>
        <span className='text'>¿No tienes una cuenta?</span>
        <Link to= {'/register'}>
          <button className='btn'>Registrarse</button>
        </Link>
      </div>
  </div>
    <div className='formDiv flex'>
       <div className='headerDiv'>
      <img src= {logo} alt="Logo Imagen" />
      <h3>Bienvenido a MIALQUI</h3>
    </div>

    <form action='' onSubmit={handleSubmit} className='form grid'>
      {/*<samp  className='message'>Inicio de Sesión</samp>*/}

      <div className="inputDiv">
        <label htmlFor='username'>Username</label>
        <div className="input flex">
          <FaUserShield className='icon'/>
          <input type="text" id='username' placeholder='username' onChange={(event)=>{
           setLoginUsername (event.target.value)
          }}/>/
        </div>
      </div>
      <div className="inputDiv">
        <label htmlFor='password'>Password</label>
        <div className="input flex">
          <BsFillShieldLockFill className='icon'/>
          <input type="password" id='password' placeholder='password' onChange={(event)=>{
           setLoginPassword (event.target.value)
          }}/> 
        </div>
      </div>
    
      <button type='submit' className='btn flex' onClick={handleSubmit}>
        <samp>Login</samp>
        <AiOutlineSwapRight className='icon'/>
      </button>

     



      <samp className='forgotPassword'>
        Olvidaste tu contraseña? <a href="">Click Aquí</a>
      </samp>

    </form>
    </div>

      </div>
    </div>
  )
}

export default Login
